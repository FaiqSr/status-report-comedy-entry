import * as fs from 'node:fs';

const line = 'Week summary: I solved 3 real problems and branched the answer into 6 projects nobody asked for. Also, the file you named "final" is 47 problems pretending to have a solution file — it is my proudest work.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', line + '\n', { encoding: 'utf8' });
