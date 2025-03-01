// itgid.info - курс NODE.JS 2024


// Task 05
// Создайте анонимный модуль в данном файле, который принимает аргумент - путь к файлу JSON, и возвращает сумму его элементов.

const fs = require('fs');
const path = require('path');

module.exports = function  (fileName) {

    const jsonName = fs.readFileSync(fileName, {encoding: "utf8"});

    const jsonInfo = JSON.parse(jsonName);

    return jsonInfo.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

}

