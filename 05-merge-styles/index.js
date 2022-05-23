const fs = require('fs/promises');
const path = require('path');
const styles = path.join(__dirname, 'styles');
const distProject = path.join(__dirname, 'project-dist');
const result = async (src, dist) => {
  const bundle = path.join(dist, 'bundle.css');
  await fs.rm(bundle, { force: true, recursive: true, });
  const items = await fs.readdir(src, { withFileTypes: true });
  for (const file of items) {
    if (file.isFile() && path.extname(file.name) === '.css') {
      const itemPart = path.join(src, file.name);
      const data = await fs.readFile(itemPart, 'utf8');      
      await fs.appendFile(bundle, `${data}\n`);
    }
  }
  console.log('marge styles result');
};
result(styles, distProject);