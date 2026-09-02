import { describe, expect, it } from "vitest";

const projectRef = process.env.SUPABASE_PROJECT_REF;
const accessToken = process.env.SUPABASE_ACCESS_TOKEN;

async function runQuery(query: string) {
  if (!projectRef || !accessToken) throw new Error("Credenciais de gerenciamento do Supabase não configuradas");
  const response = await fetch(`https://api.supabase.com/v1/projects/${encodeURIComponent(projectRef)}/database/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, read_only: true }),
  });
  expect(response.ok).toBe(true);
  return response.json();
}

describe("Supabase foundation", () => {
  it("has the core tenant tables and authorization functions", async () => {
    const result = await runQuery(`
      select table_name
      from information_schema.tables
      where table_schema = 'public'
        and table_name in ('profiles', 'guilds', 'guild_memberships', 'guild_permissions', 'guild_roles', 'guild_role_permissions', 'guild_member_roles', 'audit_logs', 'community_updates')
      order by table_name;
    `) as Array<{ table_name: string }>;
    expect(result.map(row => row.table_name)).toEqual([
      "audit_logs",
      "community_updates",
      "guild_member_roles",
      "guild_memberships",
      "guild_permissions",
      "guild_role_permissions",
      "guild_roles",
      "guilds",
      "profiles",
    ]);

    const functions = await runQuery(`
      select routine_name
      from information_schema.routines
      where routine_schema = 'public'
        and routine_name in ('is_super_admin', 'is_guild_member', 'has_guild_permission')
      order by routine_name;
    `) as Array<{ routine_name: string }>;
    expect(functions.map(row => row.routine_name)).toEqual([
      "has_guild_permission",
      "is_guild_member",
      "is_super_admin",
    ]);

    const types = await runQuery(`
      select t.typname as type_name
      from pg_type t
      join pg_namespace n on n.oid = t.typnamespace
      where n.nspname = 'public' and t.typname in ('membership_status', 'platform_role')
      order by t.typname;
    `) as Array<{ type_name: string }>;
    expect(types.map(row => row.type_name)).toEqual(["membership_status", "platform_role"]);
  }, 15_000);

  it("has RLS enabled and policies on every foundation table", async () => {
    const result = await runQuery(`
      select c.relname as table_name, c.relrowsecurity as rls_enabled, count(p.policyname)::int as policy_count
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      left join pg_policies p on p.schemaname = n.nspname and p.tablename = c.relname
      where n.nspname = 'public'
        and c.relname in ('profiles', 'guilds', 'guild_memberships', 'guild_permissions', 'guild_roles', 'guild_role_permissions', 'guild_member_roles', 'audit_logs', 'community_updates')
      group by c.relname, c.relrowsecurity
      order by c.relname;
    `) as Array<{ table_name: string; rls_enabled: boolean; policy_count: number }>;
    expect(result).toHaveLength(9);
    expect(result.every(row => row.rls_enabled && row.policy_count > 0)).toBe(true);

    const policies = await runQuery(`
      select policyname
      from pg_policies
      where schemaname = 'public'
        and policyname in ('guilds_public_read', 'memberships_self_or_authorized_read', 'roles_manage', 'audit_logs_authorized_read', 'community_updates_public_read')
      order by policyname;
    `) as Array<{ policyname: string }>;
    expect(policies.map(row => row.policyname)).toEqual([
      "audit_logs_authorized_read",
      "community_updates_public_read",
      "guilds_public_read",
      "memberships_self_or_authorized_read",
      "roles_manage",
    ]);
  }, 15_000);

  it("publishes community updates to Supabase Realtime", async () => {
    const result = await runQuery(`
      select tablename
      from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'community_updates';
    `) as Array<{ tablename: string }>;
    expect(result).toEqual([{ tablename: "community_updates" }]);
  }, 15_000);
});
