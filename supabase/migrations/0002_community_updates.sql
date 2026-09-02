-- VK ORGANIZAÇÃO | 0002_community_updates
create table public.community_updates (
  id uuid primary key default gen_random_uuid(),
  guild_id uuid references public.guilds(id) on delete cascade,
  author_user_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 2000),
  visibility text not null default 'guild' check (visibility in ('guild', 'public')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index community_updates_guild_created_idx on public.community_updates(guild_id, created_at desc);

alter table public.community_updates enable row level security;

create policy community_updates_public_read on public.community_updates for select using (visibility = 'public' or (guild_id is not null and public.is_guild_member(guild_id)) or public.is_super_admin());
create policy community_updates_create on public.community_updates for insert with check (author_user_id = auth.uid() and (visibility = 'public' or (guild_id is not null and public.has_guild_permission(guild_id, 'can_publish_as_guild'))));
create policy community_updates_update on public.community_updates for update using (author_user_id = auth.uid() or (guild_id is not null and public.has_guild_permission(guild_id, 'can_publish_as_guild')) or public.is_super_admin()) with check (author_user_id = auth.uid() or (guild_id is not null and public.has_guild_permission(guild_id, 'can_publish_as_guild')) or public.is_super_admin());
create policy community_updates_delete on public.community_updates for delete using (author_user_id = auth.uid() or (guild_id is not null and public.has_guild_permission(guild_id, 'can_publish_as_guild')) or public.is_super_admin());

revoke all on public.community_updates from anon;

alter publication supabase_realtime add table public.community_updates;
