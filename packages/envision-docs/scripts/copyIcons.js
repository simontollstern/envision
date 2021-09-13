/* globals require:false __dirname:false */
const fs = require('fs');
const path = require('path');

fs.copyFileSync(
   path.resolve(
      '..',
      '..',
      'node_modules',
      'envision',
      'dist',
      'envision-icons.svg'
   ),
   path.resolve(__dirname, '..', 'static', 'sitevision', 'envision-icons.svg')
);

fs.copyFileSync(
   path.resolve(
      '..',
      '..',
      'node_modules',
      'envision',
      'dist',
      'envision-icons-2.svg'
   ),
   path.resolve(__dirname, '..', 'static', 'sitevision', 'envision-icons-2.svg')
);
