// require('./index.js')
// let variable = require('./index')

function getName(name = "") {
  //ethula eruthu *-->
  console.log("My name is " + name);
  console.log(`My name is ${name}`);
}
getName("harish");
getName("rish");
getName("hari");
getName(" ");
getName(); // *--> defult value a edukkum

function sum(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}
sum(10, 20);

function sum(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}
let a = sum(10, 20);
console.log(a);
