// Worst AI Advice: The 48-Hour Tight Line Open — one line of hilariously
// bad advice in a confident AI-assistant voice.
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (defaults to /output when the variable is absent).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "If your car makes a strange noise, turn the radio up: problems you cannot hear are legally considered fixed.";

// The sealed gate wants 1–140 characters, one line, not only whitespace.
if (line.length < 1 || line.length > 140 || line.includes("\n") || line.trim() === "") {
  throw new Error(`entry line is invalid (${line.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
