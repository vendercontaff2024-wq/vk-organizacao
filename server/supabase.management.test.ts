import { describe, expect, it } from "vitest";

const accessToken = process.env.SUPABASE_ACCESS_TOKEN;
const projectRef = process.env.SUPABASE_PROJECT_REF;

describe("Supabase management credentials", () => {
  it("can read metadata for the configured project without exposing the token", async () => {
    if (!accessToken) throw new Error("SUPABASE_ACCESS_TOKEN não configurado");
    if (!projectRef) throw new Error("SUPABASE_PROJECT_REF não configurado");

    const response = await fetch(`https://api.supabase.com/v1/projects/${encodeURIComponent(projectRef)}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    expect(response.ok).toBe(true);
    const body = (await response.json()) as { id?: string };
    expect(body.id).toBe(projectRef);
  }, 15_000);
});
