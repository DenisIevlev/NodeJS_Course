// itgid.info - курс Node.js


// Task 08
// Создайте анонимный модуль в данном файле, который принимает аргумент - массив строк и записывает их в файл t_08.txt в папке d_04. Каждый элемент - с новой строки. Перенос строки осуществлять через \r\n. Кодировка utf8, ключ w.


const fs = require('fs');
const path = require('path');

module.exports = function (arr) {

    fs.writeFileSync('./d_04/t_08.txt', arr.join('\r\n'), {encoding: 'utf8', flag: 'w'});

}

