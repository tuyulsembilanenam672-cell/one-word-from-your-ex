import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "practice";

const codePoints = [...WORD].length;
if (codePoints < 1 || codePoints > 24) {
  throw new Error(`word must be 1-24 code points, got ${codePoints}`);
}
if (/\s/.test(WORD) || WORD.trim() !== WORD) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote ${codePoints} code point(s) to /output/entry.txt`);
