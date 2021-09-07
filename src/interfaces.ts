// Interfaces
interface Profile {
  readonly name: string;
  age?: number;
}

let profile: Profile = {
  name: "John",
};

// Index Signature
interface A {
  someProp: string;
  [key: string]: number | string;
}

const a: A = { someProp: "some prop" };
a.x = 1;
a.y = 2;

// call signature
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = "some prop";

// extending interfaces
interface Parent {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Parent3 {
  z: string;
}

interface Child extends Parent, Parent2, Parent3 {}

let child: Child = {
  x: "some prop",
  y: "another prop",
  z: "another another prop",
};
