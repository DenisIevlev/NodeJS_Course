// itgid.info - курс NODE.JS 2024


// Task 06
// Создайте анонимный модуль в данном файле, который возвращает количество JSON файлов в папке f_05. Обращаю внимание - в папке могут находиться файлы другого формата и другие папки - их учитывать не нужно!!!

const fs = require('fs');
const path = require('path');

module.exports = function () {

    const folderInfo = fs.readdirSync('./f_05');

    const filesNumberInDir = folderInfo.filter((element) => element.substring(element.length - 4) === 'json');

    return filesNumberInDir.length;  
   
}

