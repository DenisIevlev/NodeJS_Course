// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/random/generate-password
// в body POST запроса укажите length равный аргументу n модуля, а второй параметр с именем 'uppercase' равный единице, если в модуль передана строка 'up'. Если в качестве аргумента передана строка отличная от 'up', то параметр 'uppercase' в запросе не делать.
// и получает ответ - пароль указанной длины и регистра.
// Модуль должен возвратить пароль
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function (n, u) {
     let data = await awaitRequest(URL + `/api/12/random/generate-password`, {
                 'method': 'POST',
                 'headers': {
                     'apikey': APIKEY
                 },
                 data: JSON.stringify(
                   {
                       length: n,
                       uppercase: u
                   }
                 )
             });
         
             data = JSON.parse(data.body);
             return (data.password);
}
