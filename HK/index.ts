console.log('O_o');

let x: number = 30;
console.log(x);

function greetings(name: string) {
  console.log(`Hello ${name} 👋`);
}

greetings('Shakib');

// Problem 2 - Sum function
// Write a function that calculates the sum of two functions
// Why? How to assign a return type to a function
function numA(): number {
  return 60;
}
function numB(): number {
  return 40;
}

function sumFunction(functionA: number, functionB: number) {
  return functionA + functionB;
}

console.log(sumFunction(numA(), numB()));

// Write a function that calculates the sum of two parameter
function summation(a: number, b: number) {
  return a + b;
}

console.log(summation(10, 20));

// Problem 3 - Return true or false based on if a user is 18+
function isOfAge(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isOfAge(15));
console.log(isOfAge(18));

// Problem 4 - Create a function that takes another function as input, and runs it after 1 second.

function runner(input: () => void) {
  setTimeout(input, 1000);
}

function init(): void {
  console.log('O_o');
}

runner(init);

//

console.log('O_o');
console.log('O_o');
console.log('O_o');
console.log('O_o');

// TODO: Add `dist` folder to gitignore

//! Step 6 - Interfaces

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const user: User = {
  firstName: 'harkirat',
  lastName: 'singh',
  email: 'email@gmail.com',
  age: 21,
};

//* Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

function isLegal(user: number): boolean {
  if (user >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(15));
console.log(isLegal(25));
console.log(isLegal(14));

//* Assignment #2 - Create a React component that takes todos as an input and renders them

interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

interface Person {
  name: string;
  age: number;
  greet(phase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phase: string): void {
    console.log(`${phase} ${this.name} ${this.age}`);
  }
}

const personA = new Employee('A', 69);
personA.greet('O_o');
console.log(personA);
