"use strict";
// functions (optional and default parameters)
// const sum = (a: number, b?: number): number => {
//   return a + (b || 0);
// }
const sum = (a, b = 0) => {
    return a + b;
};
const sum2 = (a, b) => a + b;
// unknown number of arguments
function sumEverything(arg1, arg2, ...numbers) {
    return numbers.reduce((result, num) => result + num, 0);
}
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
