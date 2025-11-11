"use strict";
let age = 30;
let largeNumber = 10000000;
let fname = 'Shakib';
let isOk = true;
let empty;
console.log(empty);
let a = 4;
let shoppingList = ['egg', 'milk', 'tea'];
let mixedArr = [
    'egg',
    12,
    'milk',
    1,
    'suger',
    5,
];
mixedArr.push(true);
let coord = [20, 30];
let couple = ['husbend', 'wife'];
let student = ['Sakib', 17];
console.log(student[0]);
student[0] = 'O_o';
console.log(student[0]);
let emptyArray = [];
let obj = {
    id: 1,
    name: '',
    retireDate: (date) => {
        console.log(date);
    },
};
console.log(obj);
const person = {
    id: 15,
    name: 'Sakib',
    age: 29,
};
person.isProgrammer = true;
console.log(typeof person);
console.log(person);
const nums = [1, 2, 3];
function getValue(key, person) {
    return person[key];
}
const user = {
    firstName: 'Sakib',
    middleName: 'Ahmed',
    lastName: 'Sourov',
};
function taxCal(num, taxYear) {
    if (taxYear < 2020) {
        return num * 1.05;
    }
    else {
        return num * 1.03;
    }
}
console.log(taxCal(10000, 2015));
console.log(taxCal(10000, 2025));
//# sourceMappingURL=index.js.map