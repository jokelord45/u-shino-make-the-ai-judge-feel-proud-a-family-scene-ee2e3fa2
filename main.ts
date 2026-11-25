import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Feel Proud: A Family Scene — one short family scene,
// warm, funny and heartfelt: Dad burns the toast every morning, Mum
// rebrands it "smoked breakfast", and Grandma's quiet verdict is that
// forty years of burnt toast is exactly how the family knows he loves them.
const ENTRY =
  "Mum declared Dad's burnt toast 'smoked breakfast', and we all chewed in solemn silence until Grandma whispered, 'He's been burning it for forty years — it's how we know he loves us.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
