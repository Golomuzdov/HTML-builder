const path = require('path');
const { mkdir, readdir, copyFile } = require('fs/promises');
const files = 'files';
const result = `${files}-copy`;
const pathFiles = path.resolve(__dirname, files);
const pathResult = path.resolve(__dirname, result);

async function copyDirectory(src, dest) {
	await mkdir(dest, { recursive: true });
	const files = await readdir(src, { withFileTypes: true });
	for (const { name } of files) {
		copyFile(path.resolve(src, name), path.resolve(dest, name));
	}
}
copyDirectory(pathFiles, pathResult);
