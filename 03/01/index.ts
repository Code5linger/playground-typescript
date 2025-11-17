class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number) {
    if (amount <= 0) return 'Invalid Number';

    this.balance += amount;
  }
}

const accountA = new Account(1, 'Me', 0);
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

// Parameter property

class Animal {
  constructor(
    public id: number,
    public type: string,
    public sound: string,
    public pet: boolean
  ) {}

  logger(input: string): void {
    console.log(
      `${this.id} => ${this.type} => ${this.sound} => ${this.pet} & ${input}`
    );
  }
}

let dog = new Animal(1, 'Dog', 'O_O', true);
console.log(dog);
dog.logger('ZS');

let cat = new Animal(2, '😺', '🐈‍⬛', false);
console.log(cat);
cat.logger('👋');
