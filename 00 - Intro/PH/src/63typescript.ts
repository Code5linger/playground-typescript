// type GenericArray = Array<string>;

// // const friends: string[] = ['A', 'B', 'C'];
// const friends: GenericArray = ['A', 'B', 'C'];

// // const rollNumber: number[] = [4, 7, 11];
// const rollNumber: GenericArray = [4, 7, 11];

// const isEligible: Array<boolean> = [true, true, false];

// const friends: string[] = ['A', 'B', 'C'];
type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ['A', 'B', 'C'];
const rolls: GenericArray<number> = [1, 2, 3];
const scholarships: GenericArray<boolean> = [true, true, false];

type Coordinates<x, y> = [x, y];

const coordinateA: Coordinates<number, number> = [10, 20];
const coordinateB: Coordinates<string, string> = ['10', '20'];
const coordinateC: Coordinates<string, number> = ['10', 20];
const coordinateD: Coordinates<string, boolean> = ['10', true];

type UserObject<T> = T;

const userList: UserObject<{ name: string; age: number }>[] = [
  { name: 'O_o', age: 22 },
  { name: 'XD', age: 30 },
];

interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    year: number;
  };
  smartWatch: T;
}

interface BasicFeatures {
  heartRate: string;
  stopwatch: boolean;
}

interface PremiumFeatures extends BasicFeatures {
  calculator: boolean;
  AI: boolean;
}

const developerA: Developer<BasicFeatures> = {
  name: 'A',
  salary: 20,
  device: {
    brand: 'HP',
    model: 'think-pad',
    year: 2000,
  },
  smartWatch: {
    heartRate: 'Yes',
    stopwatch: true,
  },
};

const developerB: Developer<PremiumFeatures> = {
  name: 'B',
  salary: 40,
  device: {
    brand: 'Apple',
    model: 'Macbook Pro 16',
    year: 2025,
  },
  smartWatch: {
    heartRate: 'Yes',
    stopwatch: true,
    calculator: true,
    AI: true,
  },
};

// const createArrayString = (value: string): string[] => [value];
// const createArrayNumber = (value: number): Number[] => [value];
// const createArrayBoolean = (value: boolean): Boolean[] => [value];
// const createArrayObject = (value: { id: number; name: string }) => {
//   return [value];
// };

const createArrayWithGeneric = <T>(value: T): T[] => {
  return [value];
};

const arrayString = createArrayWithGeneric('A');
const arrayNumber = createArrayWithGeneric(5);
const arrayBoolean = createArrayWithGeneric(true);
const arrayObject = createArrayWithGeneric({ id: 123, name: 'O_o' });

console.log(arrayString, arrayNumber, arrayBoolean, arrayObject);

// Tuple

const createArrayWithTuple = (value: string, params: number) => [value, params];

const createArrayWithTupleGeneric = <X, Y>(value: X, params: Y) => [
  value,
  params,
];

const responseA = createArrayWithTupleGeneric(true, 'O_o');
const responseB = createArrayWithTupleGeneric(null, 26);

console.log(responseA, responseB);

type ObjectType = { id: number; name: string };

const addStudentToCourse = <T extends ObjectType>(studentInfo: T) => {
  return { course: 'Next Level', ...studentInfo };
};

const ObjA = {
  id: 123,
  name: 'O_o',
  test: true,
};

const ObjB = {
  id: 321,
  name: 'XD',
  test: false,
  demo: true,
  ok: null,
};

const ObjC = {
  id: 222,
  name: 'Test',
};

const resultA = addStudentToCourse(ObjA);
const resultB = addStudentToCourse(ObjB);
const resultC = addStudentToCourse(ObjC);

console.log(resultA);
console.log(resultB);
console.log(resultC);

// Constraint in typescript
type Comfort = {
  car: string;
  bike: string;
};

type frugal = 'bike' | 'car' | 'truck';

type transportationA = 'bike' | 'car' | 'truck';
type transportationB = keyof Comfort;

const myVehicle: transportationA = 'bike';

//
type UserRoles = 'Admin' | 'User' | 'Guest';

const canPublish = (role: UserRoles): boolean => {
  if (role === 'Admin' || role === 'User') {
    return true;
  } else if (role === 'Guest') {
    return false;
  } else {
    return false;
  }
};

// 6-9 Use as const instead of enum

// 7-1 Class and object
// class Animal {
//   constructor(
//     public name: string,
//     public species: string,
//     public sound: string
//   ) {}

//   makeSound() {
//     console.log(`${this.name} O_o ${this.sound}`);
//   }
// }

// const dog = new Animal('🐶', '🐶', '🌭');
// const cat = new Animal('😻', '🐈‍⬛', '🐈');
// console.log(dog, cat);
// dog.makeSound();
// cat.makeSound();

// 7-2 Inheritance, the 1st pilar of OOP

class Parent {
  name: string;
  age: number;
  classNo: number;

  constructor(name: string, age: number, classNo: number) {
    this.name = name;
    this.age = age;
    this.classNo = classNo;
  }

  mostTimeSpent(hours: number | undefined): void {
    if (typeof hours == 'number') {
      console.log(`💤 for ${hours} Hours!`);
    } else {
      console.log(`💤 for Hours!`);
    }
  }
}

class Student extends Parent {}

const studentA = new Student('A', 17, 8);
const studentB = new Student('B', 15, 6);

console.log(studentA, studentB);
studentA.mostTimeSpent(8);
studentB.mostTimeSpent(7);

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, classNo: number, designation: string) {
    super(name, age, classNo);
    this.designation = designation;
  }

  mostTimeSpent(hours: number | undefined): void {
    if (typeof hours == 'number') {
      console.log(`💤 for ${hours} Hours!`);
    } else {
      console.log(`💤 for Hours!`);
    }
  }

  teachingClass(hours: number) {
    console.log(`Mr.${this.name}, Daily takes ${hours} hours of class!`);
  }
}

const teacherA = new Teacher('A', 56, 8, 'Home Room Teacher');
teacherA.teachingClass(8);
