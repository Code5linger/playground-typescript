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
a = 'O_o';
