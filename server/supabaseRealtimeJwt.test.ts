import { decodeJwt } from "jose";
import { describe, expect, it } from "vitest";
import { issueSupabaseRealtimeToken } from "./supabaseRealtimeJwt";

describe("issueSupabaseRealtimeToken", () => {
  it("issues a short-lived authenticated token for the linked Supabase user", async () => {
    process.env.SUPABASE_JWT_SECRET ||= "test-only-secret-for-unit-test";
    const token = await issueSupabaseRealtimeToken({ supabaseUserId: "00000000-0000-0000-0000-000000000001", email: "test@example.invalid" });
    const claims = decodeJwt(token);
    expect(claims.sub).toBe("00000000-0000-0000-0000-000000000001");
    expect(claims.role).toBe("authenticated");
    expect(typeof claims.exp).toBe("number");
    expect((claims.exp ?? 0) - (claims.iat ?? 0)).toBeLessThanOrEqual(300);
  });
});
