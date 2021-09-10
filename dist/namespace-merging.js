"use strict";
// can not use original properties in subsequent namespaces if they are not exported
////
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.x = 10;
})(MyNamespace || (MyNamespace = {}));
////
(function (MyNamespace) {
    MyNamespace.getX = () => MyNamespace.x;
})(MyNamespace || (MyNamespace = {}));
MyNamespace.x;
MyNamespace.getX();
const someInterface = {
    x: 1,
    y: 2,
};
// Functions
function someFunction() {
    return 10;
}
(function (someFunction) {
    someFunction.someProperty = 10;
})(someFunction || (someFunction = {}));
someFunction.someProperty;
// Enums
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Onion"] = "onion";
})(Vegetables || (Vegetables = {}));
(function (Vegetables) {
    function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
    Vegetables.makeSalad = makeSalad;
})(Vegetables || (Vegetables = {}));
const salad = Vegetables.makeSalad();
// Classes
class Salad {
}
(function (Salad) {
    Salad.availableDressings = ["olive oil", "yoghurt"];
})(Salad || (Salad = {}));
Salad.availableDressings.includes("olive oil");
