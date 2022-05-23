const fs = require('fs');
const path = require('path');

fs.readdir('./03-files-in-folder/secret-folder/', {withFileTypes:true}, (err, data) => {
    if (err) throw err;
    data.forEach(file => { 
        if(file.isFile()) {
            console.log(file.name.substring(0, file.name.indexOf('.')) + ' - ' + path.extname(file.name).slice(1) + ' - ' + fs.statSync('./03-files-in-folder/secret-folder/' + file.name).size + 'b');
        }
    });
});