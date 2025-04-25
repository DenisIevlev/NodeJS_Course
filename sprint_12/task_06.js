// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/get-time
// и получает ответ - текущее время сервера
// Модуль должен возвращать время в формате часы:минуты
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function () {
    let data = await awaitRequest(URL + `/api/12/get-time`, {
                   'method': 'POST',
                   'headers': {
                       'apikey': APIKEY
                   }
               });
           
               data = JSON.parse(data.body);
               return (data.time.h + ':' + data.time.m);
}
