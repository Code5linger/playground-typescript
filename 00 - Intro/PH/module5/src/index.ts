// // What build in data types are in JS (6)
// // number, string, boolean, null, undefined, symbol

// // What data types are extended & added to JS by TS (5)
// // enum, touple, -any-. -unknown-, -never-

// // Create a variable with number type
// let age: number = 30;
// // Create a large number and use _ in between for ease of use
// let largeNumber: number = 1_00_00_000;
// // Create a variable with string type
// let fname: string = 'Shakib';

// // Create a variable with boolean type
// let isOk = true;

// // What is TypeScript Infer

// // How dose it work
// // Remove the TS type from the previous data types and see
// // What if we declare a variable, but don't add any value to it what data type dose it get
// let empty;

// console.log(empty);

// let a: number = 4;
// // a = 'O_o';
// // 156-163-175

// let shoppingList: string[] = ['egg', 'milk', 'tea'];

// let mixedArr: (string | number | boolean)[] = [
//   'egg',
//   12,
//   'milk',
//   1,
//   'sugar',
//   5,
// ];
// mixedArr.push(true);

// // Tuple
// let coord: [number, number] = [20, 30];

// let couple: [string, string] = ['husband', 'wife'];

// let student: [string, number] = ['Sakib', 17];

// console.log(student[0]);
// student[0] = 'O_o';
// console.log(student[0]);

// let emptyArray = [];

// // 07 - Objects
// let obj: {
//   readonly id: number;
//   name: string;
//   retireDate?: (date: Date) => void;
// } = {
//   id: 1,
//   name: '',
//   retireDate: (date: Date) => {
//     console.log(date);
//   },
// };

// console.log(obj);

// type Person = {
//   readonly id: number;
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
// };

// const person: Person = {
//   id: 15,
//   name: 'Sakib',
//   age: 29,
// } as const;
// person.isProgrammer = true;

// console.log(typeof person);

// console.log(person);

// type finalPerson = Readonly<Person>;

// //
// type NumArray = readonly number[];

// const nums: NumArray = [1, 2, 3];

// //
// type person = {
//   name: string;
//   age: number;
// };

// function getValue(key: keyof Person, person: Person) {
//   return person[key];
// }

// // const user: {
// //   firstName: string;
// //   middleName: string;
// //   lastName: string;
// // } = {
// //   firstName: 'Sakib',
// //   middleName: 'Ahmed',
// //   lastName: 'Sourov',
// // };

// function taxCal(num: number, taxYear: number = 2022): number {
//   if (taxYear || 2020) {
//     return num * 1.05;
//   } else {
//     return num * 1.03;
//   }
// }

// console.log(taxCal(10_000, 2015));
// console.log(taxCal(20_000));

// // function person(person: { name: string }) {
// //   console.log(person.name);
// // }

// //
// // function sum(numA: number, numB: number): number {
// //   return numA + numB;
// // }
// // sum(5, 9);

// // const add = (num1: number, num2: number): number => num1 + num2;
// // add(7, 8);

// // //
// // const demo = {
// //   name: 'Sakib',
// //   balance: 0,
// //   addBalance(value: number): number {
// //     const totalBalance = (this.balance += value);
// //     return totalBalance;
// //   },
// // };

// // demo.addBalance(10);
// // console.log(demo);

// // const arr: number[] = [1, 2, 3];
// // const squareArray = arr.map((element: number) => element * element);

// // console.log(squareArray);

// // 5-7 Function in typescript
// function sum(num1: number, num2: number): number {
//   return num1 + num2;
// }

// console.log(sum(5, 9));

// const object = {
//   id: 1,
//   name: 'summation',
//   balance: 0,
//   addBalance(value: number): number {
//     const updatedBalance = (this.balance += value);
//     return updatedBalance;
//   },
// };

// console.log(object);
// object.addBalance(10);
// console.log(object);

// const array: number[] = [1, 2, 3];
// console.log(array);
// const squareArray = array.map((item: number): number => item * item);
// console.log(squareArray);

// // 5-8 Rest & Spread Operator

// // Rest Operator
// const friends: string[] = ['A', 'B'];
// const schoolFriend: string[] = ['C', 'D'];
// const collegeFriend: string[] = ['E', 'F'];

// console.log(friends);
// friends.push(...schoolFriend);
// console.log(friends);
// friends.push(...collegeFriend);
// console.log(friends);

// const userData = {
//   name: 'Sakib',
//   age: 30,
// };

// const updatedData = {
//   hobby: 'exploring',
//   favoriteColor: 'black',
// };

// const totalUserData = { ...userData, ...updatedData };
// console.log(totalUserData);

// // Spread Operator
// // const sendInvite = (...friend: string[]) => {
// //   friend.map((invitee) => console.log(`Invite sent to ${invitee}`));
// // };

// // sendInvite('A', 'B', 'C', 'D');

// const sendInvite = (friendA: string, friendB: string, friendC: string) => {
//   console.log('Send invite to ' + friendA);
//   console.log('Send invite to ' + friendB);
//   console.log('Send invite to ' + friendC);
// };

// sendInvite('A', 'B', 'C');

// // 5-9 Destructuring in typescript
// type User = {
//   id: number;
//   name: {
//     fname: string;
//     mName: string;
//     lName: string;
//     nickName: {
//       a: string;
//       c: string;
//     };
//   };
//   gender: 'male' | 'female' | 'others';
//   favoriteColor: string;
// };

// const user: User = {
//   id: 123,
//   name: {
//     fname: 'Sheikh',
//     mName: 'Shakib',
//     lName: 'Ahmed',
//     nickName: {
//       a: 'B',
//       c: 'D',
//     },
//   },
//   gender: 'male',
//   favoriteColor: 'black',
// };

// const { favoriteColor: color } = user;
// console.log(color);

// const {
//   name: { mName: userName },
// } = user;
// console.log(userName);

// const {
//   name: {
//     nickName: { a: calledAs },
//   },
// } = user;

// console.log(calledAs);

// const friendsAlt = ['A', 'B', 'C'];
// const [, , Test] = friendsAlt;
// console.log(Test);

// // 5-10 Type Alias in typescript
// const user2: User = {
//   id: 123,
//   name: {
//     fname: 'Sheikh',
//     mName: 'Shakib',
//     lName: 'Ahmed',
//     nickName: {
//       a: 'B',
//       c: 'D',
//     },
//   },
//   gender: 'male',
//   favoriteColor: 'black',
// };

// console.log(user2);

// type AddValue = (num1: number, num2: number) => number;

// const addValue: AddValue = (num1: number, num2: number): number => num1 + num2;

// addValue(2, 2);

// // Union
// type UserRole = 'admin' | 'user' | 'guest';

// const dashboard = (role: UserRole) => {
//   if (role === 'admin') {
//     return 'Admin Dashboard';
//   } else if (role === 'user') {
//     return 'User Dashboard';
//   } else if (role === 'guest') {
//     return 'Guest Dashboard';
//   } else {
//     return 'WTF';
//   }
// };

// // console.log(dashboard('O_o'));
// console.log(dashboard('admin'));
// console.log(dashboard('user'));
// console.log(dashboard('guest'));
// // console.log(dashboard(69));

// type Employee = {
//   id: string;
//   name: string;
//   phoneNo: number;
// };

// type Manager = {
//   position: string;
//   teamSize: number;
// };

// type EmployeeManager = Employee & Manager;

// const testUser: EmployeeManager = {
//   name: 'O_o',
//   id: 'A12',
//   phoneNo: 567,
//   position: 'Manager',
//   teamSize: 6,
// };

// // 5-12 ternary, nullish coalescing & optional chaining
// const userAge = 21;

// const eligibilityCheck = (age: number): void => {
//   const result = age >= 21 ? console.log('✔️') : console.log('❌');
//   return result;
// };

// eligibilityCheck(15);
// eligibilityCheck(25);

// const userTheme = undefined;
// const selectedTheme = userTheme ?? 'Light Theme';

// console.log(selectedTheme);

// type UserInfo = {
//   address: {
//     city: string;
//     town: string;
//     zipCode: number;
//   };
// };

// const userInfo: UserInfo = {
//   address: {
//     city: 'Dhaka',
//     town: 'Narayangonj',
//     zipCode: 1421,
//   },
// };

// console.log(userInfo);
// console.log(userInfo.address);
// console.log(userInfo?.address?.zipCode);

// //
// const getUser = (input: string | null) => {
//   if (input) {
//     console.log('O_o' + input);
//   } else {
//     console.log('XD');
//   }
// };

// getUser('Test');
// getUser(null);

// //
// const discountCalculator = (input: unknown): void => {
//   if (typeof input === 'number') {
//     const discountedPrice = input * 0.1;
//     console.log(discountedPrice);
//   } else if (typeof input === 'string') {
//     const discountedPrice = parseInt(input) * 0.1;
//     console.log(discountedPrice);
//   } else if (typeof input === null) {
//     console.log(`${input} is not valid.`);
//   } else {
//     console.log('O_o');
//   }
// };

// discountCalculator(100);
// discountCalculator('100 Taka');
// discountCalculator(null);

// //
// const throwError = (msg: string): never => {
//   throw new Error(msg);
// };

// // throwError('Error!');

// // 15 - Type Assertions
// // let phone = document.getElementById('phone') as HTMLInputElement;
// // let phoneAlt = <HTMLInputElement>document.getElementById('phone');

// // console.log(phone);

// // let anything: any;

// // anything = 'O_o';

// // 6-2 Type Interface
// type User = {
//   name: string;
//   age: number;
// };

// const user1: User = {
//   name: 'Test',
//   age: 20,
// };
