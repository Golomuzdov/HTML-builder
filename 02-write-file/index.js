const fs = require('fs');
const path = require('path');
const {stdin, stdout} = process;

const text = path.join(__dirname, 'text.txt');
const stream = fs.createWriteStream(text);

stdout.write('Пожалуйста, введите текст');

stdin.on('data', data => {
    if(data.toString().trim() === 'exit') {
        process.exit();
    } else {
        stream.write(data);
    }
});

process.on('exit', () => stdout.write('Прощайте'));

process.on('SIGINT', () => process.exit())