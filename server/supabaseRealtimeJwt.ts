import { SignJWT } from "jose";

const EXPIRATION = "5m";

function supabaseHeaders() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured");
  return { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
}

export async function resolveSupabaseUserForManus(manusOpenId: string) {
  const url = process.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
  if (!url) throw new Error("VITE_SUPABASE_URL is not configured");
  if (!manusOpenId) throw new Error("manusOpenId is required");
  const response = await fetch(`${url}/rest/v1/identity_links?manus_open_id=eq.${encodeURIComponent(manusOpenId)}&select=supabase_user_id&limit=1`, { headers: supabaseHeaders() });
  if (!response.ok) throw new Error(`Supabase identity lookup failed with ${response.status}`);
  const rows = (await response.json()) as Array<{ supabase_user_id: string }>;
  return rows[0]?.supabase_user_id ?? null;
}

export async function issueSupabaseRealtimeTokenForManus(input: { manusOpenId: string; email?: string | null }) {
  const supabaseUserId = await resolveSupabaseUserForManus(input.manusOpenId);
  if (!supabaseUserId) return null;
  const secret = process.env.SUPABASE_JWT_SECRET;
  if (!secret) throw new Error("SUPABASE_JWT_SECRET is not configured");

  return new SignJWT({
    role: "authenticated",
    email: input.email ?? undefined,
    aal: "aal1",
    amr: [{ method: "manus-oauth", timestamp: Math.floor(Date.now() / 1000) }],
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(supabaseUserId)
    .setIssuedAt()
    .setExpirationTime(EXPIRATION)
    .sign(new TextEncoder().encode(secret));
}

/** Low-level helper used only by tests and server-side provisioning. */
export async function issueSupabaseRealtimeToken(input: { supabaseUserId: string; email?: string | null }) {
  const secret = process.env.SUPABASE_JWT_SECRET;
  if (!secret) throw new Error("SUPABASE_JWT_SECRET is not configured");
  if (!input.supabaseUserId) throw new Error("supabaseUserId is required");
  return new SignJWT({ role: "authenticated", email: input.email ?? undefined })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(input.supabaseUserId)
    .setIssuedAt()
    .setExpirationTime(EXPIRATION)
    .sign(new TextEncoder().encode(secret));
}
