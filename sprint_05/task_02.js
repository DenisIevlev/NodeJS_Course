// itgid.info - курс NODE.JS 2024


// Task 02
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, читает указанный файл и возвращает true, если значение age из полученного объекта больше 18 лет (строго) и false в противном случае.

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {

    const jsonFile = fs.readFileSync(fileName);

    const jsonResult = JSON.parse(jsonFile);

    return jsonResult.age > 18 ? true : false;
   
}

