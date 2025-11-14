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

// const user: User = {
//   firstName: 'harkirat',
//   lastName: 'singh',
//   email: 'email@gmail.com',
//   age: 21,
// };

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

// ! Step 7 - Types
// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

type ID = string | number;

function printID(id: ID) {
  console.log(`ID = ${typeof id}`);
}

printID(12);
printID('12');

type EmployeeData = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TechLead = EmployeeData & Manager;

const teachLead: TechLead = {
  name: 'Test',
  startDate: new Date(2025),
  department: 'QA',
};

console.log(teachLead);

// ! Step 8 - Arrays in TS

const array: number[] = [1, 2, 3];
console.log(array.length);

function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 5, 3]));

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function ageChecker(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

// const userA = {
//   firstName: 'A',
//   lastName: 'B',
//   age: 15,
// };

// const userB = {
//   firstName: 'C',
//   lastName: 'D',
//   age: 25,
// };

// console.log(
//   ageChecker([
//     {
//       firstName: 'harkirat',
//       lastName: 'Singh',
//       age: 21,
//     },
//     {
//       firstName: '',
//       lastName: 'Singh',
//       age: 16,
//     },
//   ])
// );

//! Step 9 - Enums
// type KeyInputs = 'up' | 'down' | 'left' | 'right';

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// function gameInputs(keyPressed: Direction): void {
//   if (keyPressed === Direction.Up) {
//     console.log('Move Up');
//   } else if (keyPressed === Direction.Down) {
//     console.log('Move Down');
//   } else if (keyPressed === Direction.Left) {
//     console.log('Move Left');
//   } else if (keyPressed === Direction.Right) {
//     console.log('Move Right');
//   } else {
//     console.log('Invalid!');
//   }
// }

// gameInputs(Direction.Up);
// gameInputs(Direction.Down);
// gameInputs(Direction.Left);
// gameInputs(Direction.Right);

// type Input = number | string;

// function firstElement(array: Input[]): {
//   return array[0];
// }

//! Step 1 - Pre-requisites

interface UserInfo {
  name: string;
  age: number;
}

function sumOfAge(user1: UserInfo, user2: UserInfo) {
  return user1.age + user2.age;
}

// Example usage
const result = sumOfAge(
  { name: 'harkirat', age: 20 },
  { name: 'raman', age: 21 }
);
console.log(result); // Output: 9

// ! Pick

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};
