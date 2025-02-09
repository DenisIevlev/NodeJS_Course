// itgid.info - курс Node.js


// Task 10
// Создайте анонимный модуль в данном файле, который принимает аргументы - исходный файл и конечный. Модуль должен получить содержимое исходного файла (текст) и записывать в конечный файл. Кодировки utf8, флаг w.


const fs = require('fs');
const path = require('path');

module.exports = function (fileFrom, fileTo) {

          const readFile = fs.readFileSync(fileFrom, {encoding: 'utf8', flag: 'r'});
          fs.writeFileSync(fileTo, readFile, {encoding: 'utf8', flag: 'w'});

        }

