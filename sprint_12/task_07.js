// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/gow/random-world
// и получает ответ - случайное имя мира из игры God of War
// Модуль должен возвращать имя мира.
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function () {
     let data = await awaitRequest(URL + `/api/12/gow/random-world`, {
                      'method': 'POST',
                      'headers': {
                          'apikey': APIKEY
                      }
                  });
              
                  data = JSON.parse(data.body);
                  return (data.world);
}
