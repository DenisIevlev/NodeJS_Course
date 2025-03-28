// itgid.info - курс Node.js 2024

// Task 08.
// Создайте анонимный модуль, который с помощью модуля getCSV читает файл ./f_06/v_08.csv, выводит в консоль и возвращает массив объектов - записей файла. В результирующем массиве не должно быть объектов с пустым емейл. Файл csv править - запрещено. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');

module.exports = async function t08 () {
    const records = await getCSV('./f_06/v_08.csv', { columns: true, skip_records_with_error : true });

    return records;
}