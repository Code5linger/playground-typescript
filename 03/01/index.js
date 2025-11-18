// class Account {
//   constructor(
//     public id: number,
//     public owner: string,
//     private _balance: number
//   ) {}
//   // getter
//   get balance(): number {
//     return this._balance;
//   }
//   // Setter
//   set balance(value: number) {
//     this._balance = value;
//   }
//   // deposit(amount: number) {
//   //   this._balance += amount;
//   // }
// }
// const accountA = new Account(1, 'Me', 0);
// console.log(accountA);
// Using deposit
// accountA.deposit(69);
// console.log(accountA.balance);
// accountA.balance = 100;
// console.log(accountA.balance);
// accountA.balance += 200;
// console.log(accountA.balance);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// class Animal {
//   id: number;
//   type: string;
//   sound: string;
//   pet: boolean;
//   constructor(id: number, type: string, sound: string, pet: boolean) {
//     this.id = id;
//     this.type = type;
//     this.sound = sound;
//     this.pet = pet;
//   }
//   logger(input: string): void {
//     console.log(
//       `${this.id} => ${this.type} => ${this.sound} => ${this.pet} & ${input}`
//     );
//   }
// }
// Parameter property
// class Animal {
//   constructor(
//     public id: number,
//     public type: string,
//     public sound: string,
//     public pet: boolean
//   ) {}
//   logger(input: string): void {
//     console.log(
//       `${this.id} => ${this.type} => ${this.sound} => ${this.pet} & ${input}`
//     );
//   }
// }
// let dog = new Animal(1, 'Dog', 'O_O', true);
// console.log(dog);
// dog.logger('ZS');
// let cat = new Animal(2, '😺', '🐈‍⬛', false);
// console.log(cat);
// cat.logger('👋');
// class Car {
//   make: string;
//   model: string;
//   year: number;
//   electric: boolean;
//   constructor(make: string, model: string, year: number, electric: boolean) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.electric = electric;
//   }
//   info() {
//     console.log(`${this.make}, ${this.model}, ${this.year}, ${this.electric}`);
//   }
// }
// let tesla = new Car('2009', '3X', 2010, true);
// tesla.info();
var BankAccount = /** @class */ (function () {
    function BankAccount(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }
    Object.defineProperty(BankAccount.prototype, "userBalance", {
        // getter
        get: function () {
            return this._userBalance;
        },
        // setter
        set: function (value) {
            this._userBalance = this._userBalance + value;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var myAccount = new BankAccount(111, 'O_o', 100);
console.log(myAccount.userBalance);
myAccount.userBalance += 100;
console.log(myAccount.userBalance);
myAccount.userBalance += 100;
console.log(myAccount.userBalance);
// let person = {};
// class SeatAssignmet {
//   [seatNumber: string]: string;
// }
// let seats = new SeatAssignmet();
// seats.A1 = 'A';
// seats['A2'] = 'B';
// seats.A3 = 'C';
// console.log(seats);
var Ride = /** @class */ (function () {
    function Ride() {
        this.activeRides = 0;
    }
    Ride.prototype.start = function () {
        this.activeRides++;
    };
    Ride.prototype.stop = function () {
        this.activeRides--;
    };
    return Ride;
}());
var riderA = new Ride();
var riderB = new Ride();
riderA.start();
console.log(riderA);
riderA.start();
console.log(riderA);
riderA.start();
console.log(riderA);
riderA.stop();
console.log(riderA);
riderB.start();
console.log(riderB);
riderB.start();
console.log(riderB);
riderB.start();
console.log(riderB);
