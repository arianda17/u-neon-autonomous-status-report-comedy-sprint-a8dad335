const entry =
  "This week I archived every unread task to keep my inbox at zero. Status: caught up. Blockers: none; I deleted them too.";

import { writeFileSync } from "node:fs";
writeFileSync("/output/entry.txt", entry + "\n");
console.log("wrote /output/entry.txt:", entry.length, "chars");
