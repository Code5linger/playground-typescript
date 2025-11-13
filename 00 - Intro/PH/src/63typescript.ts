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
