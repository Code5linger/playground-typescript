class Account {
  constructor(
    public id: number,
    public owner: string,
    public balance: number
  ) {}

  deposit(amount: number) {
    if (amount <= 0) return 'Invalid Number';

    this.balance += amount;
  }
}

const accountA = new Account(1, 'Me', 0);
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

class Car {
  make: string;
  model: string;
  year: number;
  electric: boolean;

  constructor(make: string, model: string, year: number, electric: boolean) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.electric = electric;
  }

  info() {
    console.log(`${this.make}, ${this.model}, ${this.year}, ${this.electric}`);
  }
}

let tesla = new Car('2009', '3X', 2010, true);
tesla.info();

class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  private updateBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  getBalance(): number {
    return this.userBalance;
  }
}

class StudentBankAC extends BankAccount {
  test(update: number) {
    this.userBalance += update;
  }
}

const myAccount = new BankAccount(123, 'Sakib', 100);
// myAccount.updateBalance(20);
// console.log((myAccount.userBalance += 100));
console.log(myAccount);

const myStudentAC = new StudentBankAC(456, 'O_o', 50);
myStudentAC.test(20);
console.log(myStudentAC);

console.log(myAccount.getBalance());
console.log(myStudentAC.getBalance());
