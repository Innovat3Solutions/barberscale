const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir).map(f => path.join(dir, f));
files.push('./src/App.tsx');
files.forEach(f => {
  if (f.endsWith('.tsx')) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace("import React from 'react';\n", "");
    content = content.replace("import React, {", "import {");
    fs.writeFileSync(f, content);
  }
});
