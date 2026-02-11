var generateName = require("sillyname");

import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);
// console.log(`My name is ` + sillyName + `!`); // Another way of writing a string with a variable

import superheroes from "superheroes";

const name = superheroes.random();
console.log(`I am ${name}!`);