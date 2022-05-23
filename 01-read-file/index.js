const fs = require('fs');
const path = require('path'); 

const stream = fs.createReadStream(path.join(__dirname, './text.txt'), 'utf-8');
stream.on('data', (chunk) => console.log(chunk));

stream.on('end', () => {
    console.log("THE END");
});

// fs.readFile(
//     path.join(__dirname, './text.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );