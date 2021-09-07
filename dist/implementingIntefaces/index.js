"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shoppingCart_1 = require("./implementingIntefaces/shoppingCart");
const calculateTotalAmount_1 = require("./implementingIntefaces/calculateTotalAmount");
const order_1 = require("./implementingIntefaces/order");
const cart = new shoppingCart_1.ShoppingCart();
console.log(`The cart's total is ${(0, calculateTotalAmount_1.calculateTotalAmount)(cart)}`);
const order = new order_1.Order();
console.log(`The order's total is ${(0, calculateTotalAmount_1.calculateTotalAmount)(order)}`);
