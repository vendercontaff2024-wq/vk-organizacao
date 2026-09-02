import { decodeJwt } from "jose";
import { describe, expect, it } from "vitest";
import { issueSupabaseRealtimeTokenForManus, resolveSupabaseUserForManus } from "./supabaseRealtimeJwt";

const url = process.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const sqlEndpoint = () => `https://api.supabase.com/v1/projects/${encodeURIComponent(process.env.SUPABASE_PROJECT_REF ?? "")}/database/query`;

async function sql(query: string) {
  const token = process.env.SUPABASE_ACCESS_TOKEN;
  if (!token) throw new Error("SUPABASE_ACCESS_TOKEN is not configured");
  const response = await fetch(sqlEndpoint(), { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ query, read_only: false }) });
  expect(response.ok).toBe(true);
}

describe("Manus to Supabase identity link", () => {
  it("resolves only a server-created link and denies an unlinked session", async () => {
    expect(url).toBeTruthy();
    expect(service).toBeTruthy();
    if (!url || !service) return;
    const manusOpenId = `manus-test-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const email = `${manusOpenId}@example.invalid`;
    let userId = "";
    try {
      const created = await fetch(`${url}/auth/v1/admin/users`, { method: "POST", headers: { apikey: service, Authorization: `Bearer ${service}`, "Content-Type": "application/json" }, body: JSON.stringify({ email, password: `VK-link-${Date.now()}-Aa1!`, email_confirm: true, user_metadata: { test: true } }) });
      expect(created.ok).toBe(true);
      userId = ((await created.json()) as { id: string }).id;
      expect(await resolveSupabaseUserForManus(manusOpenId)).toBeNull();
      await sql(`insert into public.identity_links (supabase_user_id, manus_open_id) values ('${userId}', '${manusOpenId}');`);
      expect(await resolveSupabaseUserForManus(manusOpenId)).toBe(userId);
      const token = await issueSupabaseRealtimeTokenForManus({ manusOpenId, email });
      expect(token).toBeTruthy();
      expect(decodeJwt(token as string).sub).toBe(userId);
      expect(await issueSupabaseRealtimeTokenForManus({ manusOpenId: `${manusOpenId}-unlinked` })).toBeNull();
    } finally {
      await sql(`delete from public.identity_links where manus_open_id = '${manusOpenId}';`);
      if (userId) {
        const deleted = await fetch(`${url}/auth/v1/admin/users/${userId}`, { method: "DELETE", headers: { apikey: service, Authorization: `Bearer ${service}` } });
        expect([200, 204, 404]).toContain(deleted.status);
      }
    }
  }, 30_000);
});
