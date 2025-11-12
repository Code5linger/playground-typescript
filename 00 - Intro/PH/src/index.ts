// What build in data types are in JS (6)
// number, string, boolean, null, undefined, symbol

// What data types are extended & added to JS by TS (5)
// enum, touple, -any-. -unknown-, -never-

// Create a variable with number type
let age: number = 30;
// Create a large number and use _ in between for ease of use
let largeNumber: number = 1_00_00_000;
// Create a variable with string type
let fname: string = 'Shakib';

// Create a variable with boolean type
let isOk = true;

// What is TypeScript Infer

// How dose it work
// Remove the TS type from the previous data types and see
// What if we declare a variable, but don't add any value to it what data type dose it get
let empty;

console.log(empty);

let a: number = 4;
// a = 'O_o';
// 156-163-175

let shoppingList: string[] = ['egg', 'milk', 'tea'];

let mixedArr: (string | number | boolean)[] = [
  'egg',
  12,
  'milk',
  1,
  'suger',
  5,
];
mixedArr.push(true);

// Tuple
let coord: [number, number] = [20, 30];

let couple: [string, string] = ['husbend', 'wife'];

let student: [string, number] = ['Sakib', 17];

console.log(student[0]);
student[0] = 'O_o';
console.log(student[0]);

let emptyArray = [];

// 07 - Objects
let obj: {
  readonly id: number;
  name: string;
  retireDate?: (date: Date) => void;
} = {
  id: 1,
  name: '',
  retireDate: (date: Date) => {
    console.log(date);
  },
};

console.log(obj);

type Person = {
  readonly id: number;
  name: string;
  age: number;
  isProgrammer?: boolean;
};

const person: Person = {
  id: 15,
  name: 'Sakib',
  age: 29,
} as const;
person.isProgrammer = true;

console.log(typeof person);

console.log(person);

type finalPerson = Readonly<Person>;

//
type NumArray = readonly number[];

const nums: NumArray = [1, 2, 3];

//
type person = {
  name: string;
  age: number;
};

function getValue(key: keyof Person, person: Person) {
  return person[key];
}

const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: 'Sakib',
  middleName: 'Ahmed',
  lastName: 'Sourov',
};

function taxCal(num: number, taxYear: number = 2022): number {
  if (taxYear || 2020) {
    return num * 1.05;
  } else {
    return num * 1.03;
  }
}

console.log(taxCal(10_000, 2015));
console.log(taxCal(20_000));

// function person(person: { name: string }) {
//   console.log(person.name);
// }

//
// function sum(numA: number, numB: number): number {
//   return numA + numB;
// }
// sum(5, 9);

// const add = (num1: number, num2: number): number => num1 + num2;
// add(7, 8);

// //
// const demo = {
//   name: 'Sakib',
//   balance: 0,
//   addBalance(value: number): number {
//     const totalBalance = (this.balance += value);
//     return totalBalance;
//   },
// };

// demo.addBalance(10);
// console.log(demo);

// const arr: number[] = [1, 2, 3];
// const squareArray = arr.map((element: number) => element * element);

// console.log(squareArray);

// 5-7 Function in typescript
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(5, 9));

const summ = (num1: number, num2: number): number => num1 + num2;

console.log(summ(9, 9));

const object = {
  id: 1,
  name: 'summetion',
  balance: 0,
  addBalance(value: number): number {
    const updatedBalance = (this.balance += value);
    return updatedBalance;
  },
};

console.log(object);
object.addBalance(10);
console.log(object);

const array: number[] = [1, 2, 3];
console.log(array);
const squareArray = array.map((item: number): number => item * item);
console.log(squareArray);

// 5-8 Rest & Spread Operator

