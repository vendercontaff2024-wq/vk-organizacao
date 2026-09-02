import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { decodeJwt } from "jose";

const url = process.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const anon = process.env.VITE_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const managementToken = process.env.SUPABASE_ACCESS_TOKEN;
const projectRef = process.env.SUPABASE_PROJECT_REF;

async function sql(query: string) {
  if (!managementToken || !projectRef) throw new Error("Management credentials missing");
  const response = await fetch(`https://api.supabase.com/v1/projects/${encodeURIComponent(projectRef)}/database/query`, { method: "POST", headers: { Authorization: `Bearer ${managementToken}`, "Content-Type": "application/json" }, body: JSON.stringify({ query, read_only: false }) });
  expect(response.ok).toBe(true);
}

function context(openId: string, email: string): TrpcContext {
  return {
    user: { id: 1, openId, email, name: "VK Test", loginMethod: "manus", role: "user", createdAt: new Date(), updatedAt: new Date(), lastSignedIn: new Date() },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("auth.supabaseRealtimeToken", () => {
  it("issues a token only for a Manus session with a persisted identity link", async () => {
    expect(url).toBeTruthy();
    expect(service).toBeTruthy();
    if (!url || !service) return;
    const openId = `procedure-linked-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const email = `${openId}@example.invalid`;
    let supabaseUserId = "";
    try {
      const created = await fetch(`${url}/auth/v1/admin/users`, { method: "POST", headers: { apikey: service, Authorization: `Bearer ${service}`, "Content-Type": "application/json" }, body: JSON.stringify({ email, password: `VK-procedure-${Date.now()}-Aa1!`, email_confirm: true, user_metadata: { test: true } }) });
      expect(created.ok).toBe(true);
      supabaseUserId = ((await created.json()) as { id: string }).id;
      await sql(`insert into public.identity_links (supabase_user_id, manus_open_id) values ('${supabaseUserId}', '${openId}');`);
      const result = await appRouter.createCaller(context(openId, email)).auth.supabaseRealtimeToken();
      expect(decodeJwt(result.token).sub).toBe(supabaseUserId);
    } finally {
      await sql(`delete from public.identity_links where manus_open_id = '${openId}';`);
      if (supabaseUserId) {
        const deleted = await fetch(`${url}/auth/v1/admin/users/${supabaseUserId}`, { method: "DELETE", headers: { apikey: service, Authorization: `Bearer ${service}` } });
        expect([200, 204, 404]).toContain(deleted.status);
      }
    }
  }, 30_000);

  it("rejects an authenticated Manus session without a link", async () => {
    const caller = appRouter.createCaller(context(`procedure-unlinked-${Date.now()}`, "unlinked@example.invalid"));
    await expect(caller.auth.supabaseRealtimeToken()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("does not expose identity_links to an authenticated REST client", async () => {
    expect(url).toBeTruthy();
    expect(anon).toBeTruthy();
    expect(service).toBeTruthy();
    if (!url || !anon || !service) return;
    const email = `vk-rsl-${Date.now()}@example.invalid`;
    const password = `VK-rsl-${Date.now()}-Aa1!`;
    let userId = "";
    try {
      const created = await fetch(`${url}/auth/v1/admin/users`, { method: "POST", headers: { apikey: service, Authorization: `Bearer ${service}`, "Content-Type": "application/json" }, body: JSON.stringify({ email, password, email_confirm: true, user_metadata: { test: true } }) });
      expect(created.ok).toBe(true);
      userId = ((await created.json()) as { id: string }).id;
      const signedIn = await fetch(`${url}/auth/v1/token?grant_type=password`, { method: "POST", headers: { apikey: anon, "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      expect(signedIn.ok).toBe(true);
      const accessToken = ((await signedIn.json()) as { access_token: string }).access_token;
      const response = await fetch(`${url}/rest/v1/identity_links?select=supabase_user_id&limit=1`, { headers: { apikey: anon, Authorization: `Bearer ${accessToken}` } });
      expect([200, 401, 403]).toContain(response.status);
      if (response.status === 200) expect(await response.json()).toEqual([]);
    } finally {
      if (userId) {
        const deleted = await fetch(`${url}/auth/v1/admin/users/${userId}`, { method: "DELETE", headers: { apikey: service, Authorization: `Bearer ${service}` } });
        expect([200, 204, 404]).toContain(deleted.status);
      }
    }
  });
});
