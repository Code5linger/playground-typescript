var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
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
