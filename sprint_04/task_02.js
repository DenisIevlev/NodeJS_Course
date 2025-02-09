// itgid.info - курс Node.js


// Task 02
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. Возвращает сумму чисел из файла. Пример вызова в index.js. Для простоты считаем что в файле будут только числа.

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {

   const data = fs.readFileSync(fileName, {encoding: 'utf8', flag: 'r'});

   const dataArr = data.split('\r\n')
   .filter(line => line.trim() !== '')
   .map(item => parseInt(item));

   const sumNumbers = dataArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

   return sumNumbers;
}

