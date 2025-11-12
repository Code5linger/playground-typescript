type Draggable = {
  drag: void;
};

type Resizable = {
  resize: void;
};

type UIWidget = Draggable & Resizable;

let widget: UIWidget = {
  drag: console.log(200),
  resize: console.log(200),
};

console.log(widget);

interface Person {
  name: String;
  age: number;
}

interface Todo {
  complete: boolean;
}

interface PersonWithID extends Person, Todo {
  id: number | string;
}

const userA: PersonWithID = {
  name: 'Test',
  age: 20,
  id: 'Abc',
  complete: false,
};

const userB: PersonWithID = {
  name: 'O_o',
  age: 40,
  id: 123,
  complete: true,
};

type User = {
  name: string;
  age: number;
};

type Role = {
  role: 'admin' | 'user' | 'guest';
};

const user1: User & Role = {
  name: 'O_o',
  age: 15,
  role: 'user',
};
