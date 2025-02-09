// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает абсолютный путь к ней. Формат запуска указан в index.js.

const path = require('path');

module.exports = function (folderName) {

    const pathFolder = path.join(__dirname, folderName);
    
    return pathFolder;
}

