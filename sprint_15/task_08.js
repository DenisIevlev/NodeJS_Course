// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает массив вида: 
    // ['fusion',  2016]

// т.е. модель и год первого автомобиля в таблице
// постарайтесь выборку одной записи реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const syncMysql         = require('sync-mysql');
const CONFIG            = require('./config');
const task_01 = require('./task_01');

module.exports = function () {
     const result = task_01('SELECT model, year FROM cars LIMIT 1 ');
     return result.map((item) => [item.model, item.year]).flat();
}

