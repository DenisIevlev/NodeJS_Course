// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/13/sr/read
// и получает ответ - описание рас игры космические рейнджеры
// Модуль должен возвращать массив title рас

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function () {
const res = await fetch (`${URL}/api/13/sr/read`, {
                'method' : 'POST',
                'headers': {
                    'apikey' : APIKEY
                }
       })

       const data = await res.json();
       return data.result.map((item) => item.title);
}
