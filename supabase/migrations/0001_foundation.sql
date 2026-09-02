-- VK ORGANIZAÇÃO | 0001_foundation
-- Foundation segura: identidade de domínio, tenants e autorização granular.

create extension if not exists pgcrypto;

create type public.membership_status as enum ('pending', 'trial', 'active', 'absent', 'away', 'inactive', 'left', 'removed');
create type public.platform_role as enum ('user', 'super_admin');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique check (username ~ '^[a-z0-9_]{3,30}$'),
  display_name text not null check (char_length(display_name) between 1 and 80),
  avatar_path text,
  cover_path text,
  bio text check (char_length(bio) <= 1000),
  platform_role public.platform_role not null default 'user',
  looking_for_guild boolean not null default false,
  accepted_terms_version text,
  accepted_privacy_version text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.guilds (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9-]{3,60}$'),
  name text not null check (char_length(name) between 1 and 100),
  free_fire_id text unique,
  region text not null default 'br' check (region in ('br', 'ind', 'sg')),
  description text check (char_length(description) <= 2000),
  logo_path text,
  cover_path text,
  owner_user_id uuid references public.profiles(id) on delete set null,
  is_claimed boolean not null default false,
  is_recruiting boolean not null default false,
  is_public boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.guild_memberships (
  id uuid primary key default gen_random_uuid(),
  guild_id uuid not null references public.guilds(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  status public.membership_status not null default 'pending',
  joined_at timestamptz,
  left_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (guild_id, user_id)
);

create table public.guild_permissions (
  code text primary key,
  description text not null,
  created_at timestamptz not null default now()
);

create table public.guild_roles (
  id uuid primary key default gen_random_uuid(),
  guild_id uuid not null references public.guilds(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 60),
  is_system boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (guild_id, name)
);

create table public.guild_role_permissions (
  role_id uuid not null references public.guild_roles(id) on delete cascade,
  permission_code text not null references public.guild_permissions(code) on delete cascade,
  primary key (role_id, permission_code)
);

create table public.guild_member_roles (
  membership_id uuid not null references public.guild_memberships(id) on delete cascade,
  role_id uuid not null references public.guild_roles(id) on delete cascade,
  assigned_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  primary key (membership_id, role_id)
);

create table public.audit_logs (
  id bigint generated always as identity primary key,
  guild_id uuid references public.guilds(id) on delete set null,
  actor_user_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  before_data jsonb,
  after_data jsonb,
  created_at timestamptz not null default now()
);

create index guild_memberships_user_idx on public.guild_memberships(user_id, status);
create index guild_memberships_guild_idx on public.guild_memberships(guild_id, status);
create index guild_roles_guild_idx on public.guild_roles(guild_id);
create index audit_logs_guild_idx on public.audit_logs(guild_id, created_at desc);

insert into public.guild_permissions(code, description) values
  ('can_manage_members', 'Gerenciar membros da guilda'),
  ('can_edit_members', 'Editar ficha de membros'),
  ('can_manage_lines', 'Gerenciar Lines'),
  ('can_manage_goals', 'Gerenciar metas'),
  ('can_manage_warnings', 'Gerenciar advertências'),
  ('can_manage_recruitment', 'Gerenciar recrutamento'),
  ('can_accept_members', 'Aceitar membros'),
  ('can_manage_events', 'Gerenciar eventos'),
  ('can_score_events', 'Pontuar eventos'),
  ('can_publish_as_guild', 'Publicar em nome da guilda'),
  ('can_manage_guild_profile', 'Gerenciar perfil da guilda'),
  ('can_view_internal_notes', 'Visualizar notas internas'),
  ('can_manage_links', 'Gerenciar links'),
  ('can_manage_roles', 'Gerenciar cargos')
on conflict (code) do nothing;

create or replace function public.is_super_admin()
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.profiles p where p.id = auth.uid() and p.platform_role = 'super_admin') $$;

create or replace function public.is_guild_member(target_guild_id uuid)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.guild_memberships m where m.guild_id = target_guild_id and m.user_id = auth.uid() and m.status in ('trial', 'active', 'absent', 'away', 'inactive')) $$;

create or replace function public.has_guild_permission(target_guild_id uuid, required_permission text)
returns boolean language sql stable security definer set search_path = public
as $$
  select public.is_super_admin() or exists (
    select 1
    from public.guild_memberships m
    join public.guild_member_roles mr on mr.membership_id = m.id
    join public.guild_roles r on r.id = mr.role_id and r.guild_id = m.guild_id
    join public.guild_role_permissions rp on rp.role_id = r.id
    where m.guild_id = target_guild_id
      and m.user_id = auth.uid()
      and m.status in ('trial', 'active', 'absent', 'away', 'inactive')
      and rp.permission_code = required_permission
  )
$$;

create or replace function public.is_lineage_consistent_role()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if not exists (select 1 from public.guild_roles r join public.guild_memberships m on m.guild_id = r.guild_id where r.id = new.role_id and m.id = new.membership_id) then
    raise exception 'Role and membership belong to different guilds';
  end if;
  return new;
end;
$$;

create trigger guild_member_roles_tenant_guard
before insert or update on public.guild_member_roles
for each row execute function public.is_lineage_consistent_role();

alter table public.profiles enable row level security;
alter table public.guilds enable row level security;
alter table public.guild_memberships enable row level security;
alter table public.guild_permissions enable row level security;
alter table public.guild_roles enable row level security;
alter table public.guild_role_permissions enable row level security;
alter table public.guild_member_roles enable row level security;
alter table public.audit_logs enable row level security;

create policy profiles_public_read on public.profiles for select using (true);
create policy profiles_self_write on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());
create policy profiles_self_insert on public.profiles for insert with check (id = auth.uid());

create policy guilds_public_read on public.guilds for select using (is_public or public.is_guild_member(id) or public.is_super_admin());
create policy guilds_manage on public.guilds for update using (public.has_guild_permission(id, 'can_manage_guild_profile')) with check (public.has_guild_permission(id, 'can_manage_guild_profile'));

create policy memberships_self_or_authorized_read on public.guild_memberships for select using (user_id = auth.uid() or public.has_guild_permission(guild_id, 'can_manage_members'));
create policy memberships_authorized_insert on public.guild_memberships for insert with check (public.has_guild_permission(guild_id, 'can_accept_members') or public.is_super_admin());
create policy memberships_authorized_update on public.guild_memberships for update using (public.has_guild_permission(guild_id, 'can_manage_members') or user_id = auth.uid()) with check (public.has_guild_permission(guild_id, 'can_manage_members') or user_id = auth.uid());

create policy permissions_authenticated_read on public.guild_permissions for select to authenticated using (true);
create policy roles_member_read on public.guild_roles for select using (public.is_guild_member(guild_id) or public.is_super_admin());
create policy roles_manage on public.guild_roles for all using (public.has_guild_permission(guild_id, 'can_manage_roles')) with check (public.has_guild_permission(guild_id, 'can_manage_roles'));
create policy role_permissions_member_read on public.guild_role_permissions for select using (exists (select 1 from public.guild_roles r where r.id = role_id and (public.is_guild_member(r.guild_id) or public.is_super_admin())));
create policy role_permissions_manage on public.guild_role_permissions for all using (exists (select 1 from public.guild_roles r where r.id = role_id and public.has_guild_permission(r.guild_id, 'can_manage_roles'))) with check (exists (select 1 from public.guild_roles r where r.id = role_id and public.has_guild_permission(r.guild_id, 'can_manage_roles')));
create policy member_roles_member_read on public.guild_member_roles for select using (exists (select 1 from public.guild_memberships m where m.id = membership_id and (m.user_id = auth.uid() or public.is_guild_member(m.guild_id) or public.is_super_admin())));
create policy member_roles_manage on public.guild_member_roles for all using (exists (select 1 from public.guild_memberships m where m.id = membership_id and public.has_guild_permission(m.guild_id, 'can_manage_roles'))) with check (exists (select 1 from public.guild_memberships m where m.id = membership_id and public.has_guild_permission(m.guild_id, 'can_manage_roles')));

create policy audit_logs_authorized_read on public.audit_logs for select using ((guild_id is not null and public.has_guild_permission(guild_id, 'can_view_internal_notes')) or public.is_super_admin());
create policy audit_logs_server_insert on public.audit_logs for insert with check (actor_user_id = auth.uid() or public.is_super_admin());

revoke all on public.audit_logs from anon;
revoke all on public.guild_member_roles from anon;
revoke all on public.guild_role_permissions from anon;
revoke all on public.guild_roles from anon;
revoke all on public.guild_memberships from anon;
revoke all on public.guild_permissions from anon;
revoke all on public.guilds from anon;
revoke all on public.profiles from anon;
