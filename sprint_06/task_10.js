// itgid.info - курс Node.js 2024

// Task 10.
// Создайте анонимный модуль, который с помощью getCSV читает файл ./f_06/v_10.csv, выводит в консоль и возвращает массив объектов - записей файла. Обратите внимание - в конце строк с данными находится символ точка (конец предложения). Данная точка должна быть сохранена в результирующих объектах. Файл csv править - запрещено. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');

module.exports = async function t10 () {

    const records = await getCSV('./f_06/v_10.csv', { columns: true, delimiter: ';'});
    return records;

}