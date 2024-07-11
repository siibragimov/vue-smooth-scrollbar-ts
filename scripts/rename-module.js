import { readFile, writeFile } from 'fs';
import { join } from 'path';

const filePath = join(process.cwd(), 'dist/vue-smooth-scrollbar-ts.d.ts');
const originalModuleName = 'lib/main';
const newModuleName = 'vue-smooth-scrollbar-ts';

readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;

  const result = data.replace(new RegExp(`declare module "${originalModuleName}"`, 'g'), `declare module "${newModuleName}"`);

  writeFile(filePath, result, 'utf8', (err) => {
    if (err) throw err;
    console.log('Module name has been updated!');
  });
});
