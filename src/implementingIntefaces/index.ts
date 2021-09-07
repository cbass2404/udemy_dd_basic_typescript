import { ShoppingCart } from "./implementingIntefaces/shoppingCart";
import { calculateTotalAmount } from "./implementingIntefaces/calculateTotalAmount";
import { Order } from "./implementingIntefaces/order";

const cart = new ShoppingCart();
console.log(`The cart's total is ${calculateTotalAmount(cart)}`);
const order = new Order();
console.log(`The order's total is ${calculateTotalAmount(order)}`);
