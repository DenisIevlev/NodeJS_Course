// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает массив объектов - автомобилей audi с сортировкой по году выпоуска. От меньшего к большему.


// постарайтесь выборку одной записи реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const syncMysql         = require('sync-mysql');
const CONFIG            = require('./config');
const task_01 = require('./task_01');

module.exports = function () {
    const result = task_01('SELECT * FROM cars WHERE make = "audi" ORDER by year');
    return result;
}

