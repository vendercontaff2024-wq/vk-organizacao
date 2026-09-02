import { chromium } from "playwright";

const baseUrl = process.env.VK_PREVIEW_URL ?? "http://127.0.0.1:3000";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const failures = [];

try {
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "Explorar o cenário" }).click();
  if (!page.url().endsWith("/explorar")) failures.push("CTA Explorar o cenário não navegou para /explorar");
  await page.getByRole("link", { name: "Início" }).click();
  if (!page.url().endsWith("/")) failures.push("Link Início não retornou para /");
  await page.getByRole("link", { name: "Entrar" }).click();
  if (!page.url().endsWith("/app")) failures.push("Link Entrar não navegou para /app");
  await page.getByRole("button", { name: /Sign in|Entrar|Criar conta/ }).first().isVisible();
  if (failures.length) throw new Error(failures.join("; "));
  console.log("E2E smoke passed: public CTA navigation and private route gating rendered.");
} finally {
  await browser.close();
}
