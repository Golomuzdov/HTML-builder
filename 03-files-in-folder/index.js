const path = require('path');
const fs = require('fs');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
  for (let file of files) {
    fs.stat(path.join(__dirname, 'secret-folder', file), (err, stats) => {
      if (!stats.isDirectory()) {
        const baseName = path.basename(file, path.extname(file));
        const extName = path.extname(file).slice(1);
        const size = stats.size;
        console.log( `${baseName} - ${extName} - ${size} byte`);
      }
    });
  }
});