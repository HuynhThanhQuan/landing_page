// scripts/smoke.mjs
// Usage: node scripts/smoke.mjs            -> prints initial JS size only
//        node scripts/smoke.mjs --full     -> structure, third-party and size checks
import { readFileSync, existsSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { join } from "node:path";

const OUT = "out";
// Gzipped size of the initial <script src> files on the last pre-redesign build.
// Set from the number printed in Task 1 Step 3.
const BASELINE_GZ = 158934;
const BUDGET_GZ = 60 * 1024;
const full = process.argv.includes("--full");

const fail = [];
const check = (ok, msg) => { if (!ok) fail.push(msg); };

const indexPath = join(OUT, "index.html");
if (!existsSync(indexPath)) { console.error("out/index.html missing: run npm run build"); process.exit(1); }
const html = readFileSync(indexPath, "utf8");

const scriptSrcs = [...html.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]);
let gz = 0;
const bodies = [];
for (const src of scriptSrcs) {
  const file = join(OUT, src.replace(/^\//, ""));
  if (!existsSync(file)) continue;
  const buf = readFileSync(file);
  bodies.push(buf.toString("utf8"));
  gz += gzipSync(buf).length;
}
console.log(`initial JS: ${scriptSrcs.length} files, ${(gz / 1024).toFixed(1)} KB gzip`);

if (full) {
  for (const id of ["hero-title", "labs", "services", "about", "contact", "content"]) {
    check(html.includes(`id="${id}"`), `index.html is missing id="${id}"`);
  }
  check(html.includes("cm-theme-v1"), "theme pre-hydration script missing");
  const external = html.match(/<(?:script|link|img)\b[^>]*\b(?:src|href)="(?:https?:)?\/\/[^"]+"/g) || [];
  check(external.length === 0, `third-party asset requests in index.html: ${external.join(" | ")}`);
  check(!bodies.some((b) => b.includes("WebGLRenderer")), "three.js is in the initial bundle (must be lazy)");
  check(BASELINE_GZ > 0, "BASELINE_GZ is not set in scripts/smoke.mjs");
  check(gz - BASELINE_GZ <= BUDGET_GZ, `initial JS grew by ${((gz - BASELINE_GZ) / 1024).toFixed(1)} KB gzip (budget 60 KB)`);
}

if (fail.length) { console.error("SMOKE FAILED\n- " + fail.join("\n- ")); process.exit(1); }
console.log(full ? "smoke ok" : "size only");
