// itgid.info - курс NODE.JS 2024


// Task 10
// Создайте анонимный модуль в данном файле, который получает массив, выбирает из него числа и записывает эти числа в виде массива в JSON файл:
// ./f_05/10.json.

const fs = require('fs');
const path = require('path');

module.exports = function (arr) {

    const filteredArr = arr.filter(item => item === Number(item));
    
    const newFile = fs.writeFileSync('./f_05/10.json', JSON.stringify(filteredArr), {encoding: "utf8", flag: 'w'});

    return newFile;
}

