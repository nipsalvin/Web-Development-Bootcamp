import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   console.log(x, x * 2);
//   return x * 2;
// });
// **Using the Arrow Function**
const mappedNumbers = numbers.map((x) => x * 2);
// console.log(mappedNumbers);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
// **Using the Arrow Function**
const filteredNumbers = numbers.filter((x) => x < 10);
// console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
// **Using the Arrow Function**
const reducedNumbers = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
// console.log(reducedNumbers);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
// **Using the Arrow Function**
const foundNumber = numbers.find((x) => x > 10);
// console.log(foundNumber);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
// **Using the Arrow Function**
const foundIndex = numbers.findIndex((x) => x > 10);
// console.log(foundIndex);
