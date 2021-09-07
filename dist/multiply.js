"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyByTwo = void 0;
const multiply = (a, b) => {
    return a * b;
};
const multiplyByTwo = (num) => {
    return multiply(num, 2);
};
exports.multiplyByTwo = multiplyByTwo;
exports.default = multiply;
