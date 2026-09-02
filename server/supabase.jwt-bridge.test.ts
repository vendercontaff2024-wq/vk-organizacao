import { SignJWT } from "jose";
import { describe, expect, it } from "vitest";

const url = process.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const anon = process.env.VITE_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const jwtSecret = process.env.SUPABASE_JWT_SECRET;

describe("Supabase JWT bridge", () => {
  it("accepts a short-lived server-signed token at the protected REST gateway", async () => {
    expect(url).toBeTruthy();
    expect(anon).toBeTruthy();
    expect(service).toBeTruthy();
    expect(jwtSecret).toBeTruthy();
    if (!url || !anon || !service || !jwtSecret) return;

    const suffix = `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const email = `vk-jwt-bridge-${suffix}@example.invalid`;
    const password = `VK-jwt-${suffix}-Aa1!`;
    let userId = "";
    try {
      const created = await fetch(`${url}/auth/v1/admin/users`, {
        method: "POST",
        headers: { apikey: service, Authorization: `Bearer ${service}`, "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, email_confirm: true, user_metadata: { test: true } }),
      });
      expect(created.ok).toBe(true);
      userId = ((await created.json()) as { id: string }).id;

      const token = await new SignJWT({ role: "authenticated", aal: "aal1", amr: [{ method: "password", timestamp: Math.floor(Date.now() / 1000) }] })
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setSubject(userId)
        .setIssuedAt()
        .setExpirationTime("2m")
        .sign(new TextEncoder().encode(jwtSecret));

      const response = await fetch(`${url}/rest/v1/profiles?select=id&limit=1`, {
        headers: { apikey: anon, Authorization: `Bearer ${token}` },
      });
      expect(response.ok).toBe(true);
      expect(await response.json()).toEqual([]);
    } finally {
      if (userId) {
        const deleted = await fetch(`${url}/auth/v1/admin/users/${userId}`, {
          method: "DELETE",
          headers: { apikey: service, Authorization: `Bearer ${service}` },
        });
        expect([200, 204, 404]).toContain(deleted.status);
      }
    }
  }, 30_000);
});
