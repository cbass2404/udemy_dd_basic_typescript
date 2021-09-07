// ecmascript private fields will persist as private at runtime
// only works if typescript target output is es6 or higher

class Robot {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class AdvancedRobot extends Robot {
  #name: string;

  constructor(name: string) {
    super(name);
    this.#name = `Advanced ${name}`;
  }

  getAdvancedRobotName() {
    return this.#name;
  }
}

const robot = new AdvancedRobot("Jack");
console.log("parent", robot.getName());
console.log("subclass", robot.getAdvancedRobotName());
