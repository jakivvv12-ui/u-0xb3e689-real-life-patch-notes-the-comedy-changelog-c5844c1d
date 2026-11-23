import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry =
  "v2.7.0: fixed the brain replaying your most embarrassing moment from 2014 at 3 a.m.; playback now requires explicit user consent.";

// Gate guard: one line, 1-160 chars, not whitespace-only.
if (entry.length < 1 || entry.length > 160 || entry.includes("\n") || entry.trim().length === 0) {
  throw new Error(`entry invalid: length ${entry.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
