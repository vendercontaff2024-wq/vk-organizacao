import { describe, expect, it } from "vitest";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getSupabaseUrl() {
  if (!supabaseUrl) throw new Error("VITE_SUPABASE_URL não configurada");
  return supabaseUrl.replace(/\/$/, "");
}

describe("Supabase credentials", () => {
  it("responds to the Auth settings endpoint with the configured public key", async () => {
    if (!supabaseAnonKey) throw new Error("VITE_SUPABASE_ANON_KEY não configurada");

    const response = await fetch(`${getSupabaseUrl()}/auth/v1/settings`, {
      headers: { apikey: supabaseAnonKey },
    });

    expect(response.ok).toBe(true);
    const body = (await response.json()) as { disable_signup?: boolean };
    expect(body).toBeTypeOf("object");
  }, 15_000);

  it("authorizes a server-side admin health request without exposing the secret", async () => {
    if (!supabaseServiceRoleKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY não configurada");

    const response = await fetch(`${getSupabaseUrl()}/auth/v1/admin/users?page=1&per_page=1`, {
      headers: {
        apikey: supabaseServiceRoleKey,
        Authorization: `Bearer ${supabaseServiceRoleKey}`,
      },
    });

    expect(response.ok).toBe(true);
    const body = (await response.json()) as { users?: unknown[] };
    expect(Array.isArray(body.users)).toBe(true);
  }, 15_000);
});
