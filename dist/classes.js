"use strict";
// typescript private fields will not persist as private at runtime
// class Robot {
//   _color: string;
//   static availableColors = ["green", "yellow"];
//   static isColorAvailable(color: string) {
//     return Robot.availableColors.includes(color);
//   }
//   constructor(protected _name: string, _color: string) {
//     this._color = _color;
//   }
//   askName() {
//     console.log(`My name is ${this.name}`);
//   }
//   move(distance: number) {
//     console.log(`${this.name} moved ${distance} meters`);
//   }
//   set color(color: string) {
//     if (!Robot.isColorAvailable(color)) {
//       // can not call static props on instance so no this._color
//       throw new Error(`Color ${color} is not available`);
//     }
//     this._color = color;
//   }
//   set name(value: string) {
//     this._name = "PREFIX_" + value;
//   }
//   get name() {
//     return this._name + "_SUFFIX";
//   }
// }
// class FlyingRobot extends Robot {
//   private readonly jetpackSize: number;
//   constructor(_name: string, _color: string, jetpackSize: number) {
//     super(_name, _color);
//     this.jetpackSize = jetpackSize;
//   }
//   move(distance: number) {
//     console.log(`${this.name} is flying`);
//     super.move(distance);
//   }
// }
// const robot = new Robot("John", "Yellow");
// robot.askName();
// robot.move(12);
// const flyingRobot = new FlyingRobot("Jim", "Yellow", 2);
// flyingRobot.move(10);
// // console.log(`Flying robot's jetpack size is ${flyingRobot.jetpackSize}`);
// flyingRobot.name = "Kevin";
// console.log(`My name is ${flyingRobot.name}`);
