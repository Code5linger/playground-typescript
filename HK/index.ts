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

function init(): void {
  console.log('O_o');
}

function runner(input: VoidFunction) {
  setTimeout(input, 1000);
}

runner(init);
