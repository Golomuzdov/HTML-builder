const path = require('path');
const { mkdir, readdir, copyFile, rm } = require('fs/promises');
const files = 'files';
const result = `${files}-copy`;
const resFiles = path.resolve(__dirname, files);
const resResult = path.resolve(__dirname, result);

async function copyDir(src, dest) {
	await rm(dest, { force: true, recursive: true });
	await mkdir(dest, { recursive: true });
	const files = await readdir(src, { withFileTypes: true });
	for (const { name } of files) {
		copyFile(path.resolve(src, name), path.resolve(dest, name));
	}
}
copyDir(resFiles, resResult);
