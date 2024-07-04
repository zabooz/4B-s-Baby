const fs = require('fs');
const path = require('path');

const generateTree = (dir, depth = 0) => {
  let tree = '';
  const prefix = ' '.repeat(depth * 2);
  const files = fs.readdirSync(dir);
  files.forEach((file, index) => {
    const fullPath = path.join(dir, file);
    const isDir = fs.statSync(fullPath).isDirectory();
    tree += `${prefix}${isDir ? '├──' : '└──'} ${file}\n`;
    if (isDir) {
      tree += generateTree(fullPath, depth + 1);
    }
  });
  return tree;
};

const projectDir = path.resolve(__dirname);
const tree = generateTree(projectDir);
console.log(tree);

// Optionally, save to a file
fs.writeFileSync('structure.txt', tree);
