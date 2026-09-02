import { readFile } from "node:fs/promises";

const projectRef = process.env.SUPABASE_PROJECT_REF;
const accessToken = process.env.SUPABASE_ACCESS_TOKEN;
const migrationPath = process.argv[2];

if (!projectRef || !accessToken || !migrationPath) {
  throw new Error("SUPABASE_PROJECT_REF, SUPABASE_ACCESS_TOKEN e o caminho da migration são obrigatórios");
}

const query = await readFile(migrationPath, "utf8");
const response = await fetch(`https://api.supabase.com/v1/projects/${encodeURIComponent(projectRef)}/database/query`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query, read_only: false }),
});

if (!response.ok) {
  const message = await response.text();
  throw new Error(`Supabase migration failed with HTTP ${response.status}: ${message.slice(0, 500)}`);
}

console.log(`Migration applied successfully: ${migrationPath}`);
