// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает объект вида название файла - размер.

const path = require('path');
const fs = require('fs');

module.exports = function (folderName) {

    const files = fs.readdirSync(folderName);

    const fileDetails = {};

    for (let file of files) {
        const filePath = path.join(folderName, file);
        const statFile = fs.statSync(filePath);
        fileDetails[file] = statFile.size;
    }

    return fileDetails;

}
