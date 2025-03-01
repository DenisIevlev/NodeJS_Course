// itgid.info - курс NODE.JS 2024


// Task 03
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, читает указанный файл и возвращает массив состоящий из имен (name) сотрудников.

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {

    const jsonName = fs.readFileSync(fileName, {encoding: "utf8"});

    const jsonInfo = JSON.parse(jsonName);

    return jsonInfo.employees.map(item => item.name);
}

