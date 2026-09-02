-- VK ORGANIZAÇÃO | 0003_identity_links
-- Vínculo server-only; a chave service_role é a única autorizada a administrar esta tabela.
create table public.identity_links (
  supabase_user_id uuid primary key references auth.users(id) on delete cascade,
  manus_open_id text not null unique check (char_length(manus_open_id) between 1 and 128),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.identity_links enable row level security;
revoke all on public.identity_links from anon, authenticated;
