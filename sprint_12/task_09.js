// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL -/api/12/random/random-string?length=n
// где n - длина строки, берем и аргумента модуля
// и получает ответ - cлучайную строку длиной n символа(лов)
// Модуль должен возвращать строку
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function (n) {
    let data = await awaitRequest(URL + `/api/12/random/random-string?length=${n}`, {
                             'method': 'GET',
                             'headers': {
                                 'apikey': APIKEY
                             }
                         });
                     
                         data = JSON.parse(data.body);
                         return (data['random-string']);
}
