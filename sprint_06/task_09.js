// itgid.info - курс Node.js 2024

// Task 09.
// Создайте анонимный модуль, который с помощью модуля getCSV читает файл ./f_06/v_09.csv, и возвращает массив объектов - записей файла. Устраните лишние пробелы в результирующем объекте. Файл csv править - запрещено. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');

module.exports = async function t09 () {
    const records = await getCSV('./f_06/v_09.csv', { columns: true, delimiter: ';', trim: true });
    
    return records;
}