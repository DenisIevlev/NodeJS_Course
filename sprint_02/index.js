// Task 01
const task_01 = require('./task_01');
console.log(task_01);

// Task 02
const task_02 = require('./task_02');
console.log(task_02(3,6));

// Task 03
const task_03 = require('./task_03');
console.log(task_03([33, 2, -2, 35, 3]));

// Task 04
const task_04 = require('./task_04');
console.log(task_04(' I was born in 1518 in the vilLage of Glenfinnan on the shores '));

// Task 05
const task_05 = require('./task_05');
console.log(task_05('rtpd')); 

// Task 06
const {preparedArray} = require ('./task_06');
//  // ожидаю ['aa', 'b', 'c', 'dd]
console.log(preparedArray([' aA ', 'b', 'C', 'DD ']));

// Task 07
const {isWhitespace} = require('./task_07');
console.log(isWhitespace(' Humma Kavula ')); // ожидаю true

// Task 08
const task_08 = require('./task_08');
console.log(task_08(['3', 4, '5d', 6])); // ожидаю [3, 4, 6]

// Task 09
const task_09 = require('./task_09');
console.log(task_09('png')); 

// Task 10
const {password} = require('./task_10');
console.log(password(' dfghjkert '));

// Task 11
const task_11 = require('./task_11');
console.log(task_11(33));

// Task 12
const task_12 = require('./task_12');
console.log(task_12(2233));

// Task 13
const task_13 = require('./task_13');
console.log(task_13(['t', 'b'], ['t', 'b']));

// Task 14
const task_14 = require('./task_14');
console.log(task_14({'a' : 2}, {'a': 2, 'b': 8}));

// Task 15 
const {eqObject} = require('./task_15');
const {eqArray} = require('./task_15');

console.log(eqObject({'a' : 2}, {'a': 4}));
console.log(eqArray(['t', 'b'], ['t', 'b']));