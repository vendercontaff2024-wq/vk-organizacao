import { describe, expect, it } from "vitest";

const url = process.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const anon = process.env.VITE_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function adminRequest(path: string, init: RequestInit = {}) {
  if (!url || !service) throw new Error("Credenciais Supabase não configuradas");
  return fetch(`${url}${path}`, {
    ...init,
    headers: { apikey: service, Authorization: `Bearer ${service}`, "Content-Type": "application/json", ...(init.headers ?? {}) },
  });
}

async function sql(query: string) {
  const ref = process.env.SUPABASE_PROJECT_REF;
  const token = process.env.SUPABASE_ACCESS_TOKEN;
  if (!ref || !token) throw new Error("Credenciais de gerenciamento não configuradas");
  const response = await fetch(`https://api.supabase.com/v1/projects/${encodeURIComponent(ref)}/database/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, read_only: false }),
  });
  if (!response.ok) throw new Error(`SQL failed with ${response.status}`);
  return response.json();
}

async function signIn(email: string, password: string) {
  if (!url || !anon) throw new Error("Credenciais públicas Supabase não configuradas");
  const response = await fetch(`${url}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { apikey: anon, "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  expect(response.ok).toBe(true);
  return (await response.json()) as { access_token: string; user: { id: string } };
}

async function visibleGuilds(accessToken: string, guildId: string) {
  if (!url || !anon) throw new Error("Credenciais públicas Supabase não configuradas");
  const response = await fetch(`${url}/rest/v1/guilds?id=eq.${guildId}&select=id`, {
    headers: { apikey: anon, Authorization: `Bearer ${accessToken}` },
  });
  expect(response.ok).toBe(true);
  return (await response.json()) as Array<{ id: string }>;
}

async function visibleUpdates(accessToken: string, guildId: string) {
  if (!url || !anon) throw new Error("Credenciais públicas Supabase não configuradas");
  const response = await fetch(`${url}/rest/v1/community_updates?guild_id=eq.${guildId}&select=id,body`, {
    headers: { apikey: anon, Authorization: `Bearer ${accessToken}` },
  });
  expect(response.ok).toBe(true);
  return (await response.json()) as Array<{ id: string; body: string }>;
}

describe("Supabase guild isolation", () => {
  it("does not expose a private guild to a member of another guild", async () => {
    const suffix = `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const password = `VK-test-${suffix}-Aa1!`;
    const emailA = `vk-isolation-a-${suffix}@example.invalid`;
    const emailB = `vk-isolation-b-${suffix}@example.invalid`;
    let userA = "";
    let userB = "";
    let guildA = "";
    let guildB = "";
    const updateId = crypto.randomUUID();

    try {
      const createdA = await adminRequest("/auth/v1/admin/users", { method: "POST", body: JSON.stringify({ email: emailA, password, email_confirm: true, user_metadata: { test: true } }) });
      expect(createdA.ok).toBe(true);
      userA = ((await createdA.json()) as { id: string }).id;
      const createdB = await adminRequest("/auth/v1/admin/users", { method: "POST", body: JSON.stringify({ email: emailB, password, email_confirm: true, user_metadata: { test: true } }) });
      expect(createdB.ok).toBe(true);
      userB = ((await createdB.json()) as { id: string }).id;

      guildA = crypto.randomUUID();
      guildB = crypto.randomUUID();
      await sql(`
        insert into public.profiles (id, username, display_name) values
          ('${userA}', 'test_${suffix.replace(/[^a-z0-9]/g, "").slice(0, 20)}a', 'VK Test A'),
          ('${userB}', 'test_${suffix.replace(/[^a-z0-9]/g, "").slice(0, 20)}b', 'VK Test B');
        insert into public.guilds (id, slug, name, region, is_public) values
          ('${guildA}', 'vk-test-a-${suffix.toLowerCase().replace(/[^a-z0-9-]/g, "-")}', 'VK Test Guild A', 'br', false),
          ('${guildB}', 'vk-test-b-${suffix.toLowerCase().replace(/[^a-z0-9-]/g, "-")}', 'VK Test Guild B', 'br', false);
        insert into public.guild_memberships (guild_id, user_id, status, joined_at) values
          ('${guildA}', '${userA}', 'active', now()),
          ('${guildB}', '${userB}', 'active', now());
        insert into public.community_updates (id, guild_id, author_user_id, body, visibility)
          values ('${updateId}', '${guildA}', '${userA}', 'Atualização sintética de isolamento', 'guild');
      `);

      const sessionA = await signIn(emailA, password);
      const sessionB = await signIn(emailB, password);
      expect((await visibleGuilds(sessionA.access_token, guildA)).map(row => row.id)).toEqual([guildA]);
      expect(await visibleGuilds(sessionA.access_token, guildB)).toEqual([]);
      expect((await visibleGuilds(sessionB.access_token, guildB)).map(row => row.id)).toEqual([guildB]);
      expect(await visibleGuilds(sessionB.access_token, guildA)).toEqual([]);
      expect(await visibleUpdates(sessionA.access_token, guildA)).toEqual([{ id: updateId, body: "Atualização sintética de isolamento" }]);
      expect(await visibleUpdates(sessionB.access_token, guildA)).toEqual([]);
    } finally {
      if (guildA || guildB) await sql(`delete from public.guilds where id in ('${guildA || crypto.randomUUID()}', '${guildB || crypto.randomUUID()}');`);
      if (userA) { const response = await adminRequest(`/auth/v1/admin/users/${userA}`, { method: "DELETE" }); expect([200, 204, 404]).toContain(response.status); }
      if (userB) { const response = await adminRequest(`/auth/v1/admin/users/${userB}`, { method: "DELETE" }); expect([200, 204, 404]).toContain(response.status); }
    }
  }, 45_000);
});
