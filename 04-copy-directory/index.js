const fs = require('fs');
const path = require('path');


let folderMain = path.join(__dirname, 'files');
let folderCopy = path.join(__dirname, 'files-copy');


async function copyDir(src,dest) {
    fs.mkdir(dest, (err, files) => {
        if(err) throw err;
    });
    fs.readdir (src, {withFileTypes:true}, (err, files) => {
        if(err) throw err;
        files.forEach(file => {
            if(file.isFile()) {
                let fileSrc = path.join(src, file.name);
                let fileDest = path.join(dest, file.name);
                fs.stat(fileSrc, (err, stats) => {
                    if(err) throw err;
                    fs.copyFile(fileSrc, fileDest, (err) => {
                        if(err) throw err;
                    });
                });
            } else {
                copyDir(src, dest);
            }
        });
    });
}

copyDir(folderMain, folderCopy);