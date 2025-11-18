var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    // public id: number;
    // public owner: string;
    // public balance: number;
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        // this.id = id;
        // this.owner = owner;
        // this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0)
            return 'Invalid Number';
        this.balance += amount;
    };
    return Account;
}());
var accountA = new Account(1, 'Me', 0);
console.log(accountA);
accountA.deposit(69);
console.log(accountA);
accountA.deposit(100);
console.log(accountA);
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
var Animal = /** @class */ (function () {
    function Animal(id, type, sound, pet) {
        this.id = id;
        this.type = type;
        this.sound = sound;
        this.pet = pet;
    }
    Animal.prototype.logger = function (input) {
        console.log("".concat(this.id, " => ").concat(this.type, " => ").concat(this.sound, " => ").concat(this.pet, " & ").concat(input));
    };
    return Animal;
}());
var dog = new Animal(1, 'Dog', 'O_O', true);
console.log(dog);
dog.logger('ZS');
var cat = new Animal(2, '😺', '🐈‍⬛', false);
console.log(cat);
cat.logger('👋');
var Car = /** @class */ (function () {
    function Car(make, model, year, electric) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.electric = electric;
    }
    Car.prototype.info = function () {
        console.log("".concat(this.make, ", ").concat(this.model, ", ").concat(this.year, ", ").concat(this.electric));
    };
    return Car;
}());
var tesla = new Car('2009', '3X', 2010, true);
tesla.info();
var BankAccount = /** @class */ (function () {
    function BankAccount(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    BankAccount.prototype.updateBalance = function (balance) {
        this.userBalance = this.userBalance + balance;
    };
    BankAccount.prototype.getBalance = function () {
        return this.userBalance;
    };
    return BankAccount;
}());
var StudentBankAC = /** @class */ (function (_super) {
    __extends(StudentBankAC, _super);
    function StudentBankAC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentBankAC.prototype.test = function (update) {
        this.userBalance += update;
    };
    return StudentBankAC;
}(BankAccount));
var myAccount = new BankAccount(123, 'Sakib', 100);
// myAccount.updateBalance(20);
// console.log((myAccount.userBalance += 100));
console.log(myAccount);
var myStudentAC = new StudentBankAC(456, 'O_o', 50);
myStudentAC.test(20);
console.log(myStudentAC);
console.log(myAccount.getBalance());
console.log(myStudentAC.getBalance());
