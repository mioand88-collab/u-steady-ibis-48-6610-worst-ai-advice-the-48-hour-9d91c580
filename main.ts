// Worst AI Advice: The 48-Hour Tight Line Open — one line of hilariously
// bad advice in a confident AI-assistant voice.
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (defaults to /output when the variable is absent).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "If your car makes a strange noise, turn the radio up: problems you cannot hear are legally considered fixed.";

// The sealed gate wants 1–140 characters, exactly one line, and content
// that is not only whitespace. Check each rule separately so a failure
// names the rule that was broken instead of a generic "invalid" error.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line (no newline characters)");
}
if (line.trim() === "") {
  throw new Error("entry line must not be blank or only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
