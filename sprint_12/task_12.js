// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/12/employee/read
// и получает ответ - массив всех сотрудников организации. 
// Модуль должен возвратить профессий сотрудников (designation)
// Все модули спринта реализуют запросы с помощью async-request модуля.


const awaitRequest = require('async-request');
const APIKEY = require('./apikey');


const URL = 'https://api.itgid.info';

module.exports = async function () {
   let data = await awaitRequest(URL + `/api/12/employee/read`, {
           'method': 'POST',
           'headers': {
               'apikey': APIKEY
           }
       });
   
       data = JSON.parse(data.body);
       let employeeDesignation = data.result.map(value => {
       return value.designation;
       });
       return employeeDesignation;
}
