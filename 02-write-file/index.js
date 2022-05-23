const fs = require('fs');
const path = require('path');
const readline = require('readline');
// fs.writeFile('./02-write-file/dest.txt', 'Hey', function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log('Введите текст');
// });

// let readableStream = fs.createReadStream('./dest.txt', 'utf-8');
// let writebleStream = fs.createWriteStream('./02-write-file/dest2.txt');

// readableStream.on('data', function(chunk) {
//     writebleStream.write(chunk);
// })

// output.on('data', chunk => output.write(chunk));
// output.on('error', error => console.log('Error', error.message));
const writebleStream = fs.createWriteStream('./02-write-file/dest2.txt');

writebleStream.on('error', (error) => {
    if(error) console.log('Error: ' + error.message);
});   
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout,
        prompt: 'Введите текст: '
    });
    rl.prompt();
    rl.on('line', (line) => {
        switch (line.trim()) {
            case 'exit':
                rl.close();
                break;
            default:
                let sentence = line + '\n';
                writebleStream.write(sentence);
                rl.prompt();
                break;
        } 
        }).on('close', () => {
            writebleStream.end();
            writebleStream.on('finish', () => {
                console.log('Спасибо за ваши сообщения!');
            });
            setTimeout(() => {
                process.exit(0);
            }, 100);
        });
    
