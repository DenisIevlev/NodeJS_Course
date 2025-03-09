// itgid.info - курс Node.js 2024

// Task 07.
// Создайте анонимный модуль, который помощью модуля getCSV читает файл ./f_06/v_07.csv, и возвращает сумму всех чисел файла. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');

module.exports = async function t07 () {
    const records = await getCSV('./f_06/v_07.csv', { columns: true, decimiter: ';' });

    const transformed = records.map(item => {
        const [n1, n2, n3] = item['n1;n2;n3'].split(';');
        return { n1, n2, n3 };
    });

    const sumNumbers = transformed.reduce((acc, obj) => {
        ['n1', 'n2', 'n3'].forEach(key => {
            const value = parseFloat(obj[key]);
            if (!isNaN(value)) {
                acc[key] = (acc[key] || 0) + value;
            }
        });
        return acc;
    }, {})
   const result = Object.values(sumNumbers).reduce((prevValue, nextValue) => {
        return prevValue + nextValue;
    }, 0)

    return result;
}
