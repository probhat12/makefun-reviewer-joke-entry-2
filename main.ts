import { writeFileSync } from 'node:fs';

const joke = 'My coding agent added a progress bar to setup; it reaches 100% just before asking me to install the package that draws the progress bar.';
writeFileSync('/output/entry.txt', `${joke}\n`, 'utf8');
