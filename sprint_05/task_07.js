// itgid.info - курс NODE.JS 2024


// Task 07
// Создайте анонимный модуль в данном файле, который при запуске делает копию файла 01.json в папке f_05 под именем 07.json.
// Внимание!!! Во всех задачах где создаются файлы json, подразумевается utf8, флаг - w. 

const fs = require('fs');
const path = require('path');

module.exports = function () {

    const fileInfo = fs.readFileSync('./f_05/01.json', {encoding: 'utf8'});

    const newFile = fs.writeFileSync('./f_05/07.json', fileInfo, {encoding: "utf8", flag: 'w'});

    return newFile;
   
}

