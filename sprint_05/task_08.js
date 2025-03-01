// itgid.info - курс NODE.JS 2024


// Task 08
// Создайте анонимный модуль в данном файле, который при запуске делает читает файл ./f_05/01.json и записывает из него данные в файл ./f_05/08.json без ключа "os".

const fs = require('fs');
const path = require('path');

module.exports = function () {

    const fileInfo = fs.readFileSync('./f_05/01.json', {encoding: 'utf8'});

    let obj = JSON.parse(fileInfo);

    delete obj.os;

    const newFile = fs.writeFileSync('./f_05/08.json', JSON.stringify(obj), {encoding: "utf8"});

    return newFile;
    
}

