// can not use original properties in subsequent namespaces if they are not exported

////
namespace MyNamespace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}
////
namespace MyNamespace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNamespace.x;
MyNamespace.getX();
const someInterface: MyNamespace.SomeInterface = {
  x: 1,
  y: 2,
};

// Functions

function someFunction() {
  return 10;
}

namespace someFunction {
  export const someProperty = 10;
}

someFunction.someProperty;

// Enums

enum Vegetables {
  Tomato = "tomato",
  Onion = "onion",
}

namespace Vegetables {
  export function makeSalad() {
    return Vegetables.Tomato + Vegetables.Onion;
  }
}

const salad = Vegetables.makeSalad();

// Classes

class Salad {}

namespace Salad {
  export const availableDressings = ["olive oil", "yoghurt"];
}

Salad.availableDressings.includes("olive oil");
