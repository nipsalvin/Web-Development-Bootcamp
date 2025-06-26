var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}
var doubledNumbers = numbers.map(double);
// console.log(doubledNumbers);

// #### A more Consice way to do it using an anonymous function ####

var doubledNumbersSecond = numbers.map(function (x) {
  return x * 2;
});
// console.log(doubledNumbersSecond);

// ####################

//Filter - Create a new array by keeping the items that return true.
function filterFunction(x) {
  //   console.log(x, x > 10);
  return x < 10;
}
var filteredNumbers = numbers.filter(filterFunction);
// console.log(filteredNumbers);

// #### A more Consice way to do it using an anonymous function ####
var filteredNumbersSecond = numbers.filter(function (x) {
  //   console.log(x, x < 10);
  return x < 10;
});

// ####################

//Reduce - Accumulate a value by doing something to each item in an array.
// ### Using forEach (Long Way) ###
var newNumber = 0;
numbers.forEach(function (x) {
  newNumber += x;
  //   console.log(newNumber);
});
// ### Using Reduce ###

var newNumberSecond = numbers.reduce(function (previousNumber, currentNumber) {
  console.log("Previous Number = " + previousNumber);
  console.log("Current Number = " + currentNumber);
  return previousNumber + currentNumber;
});

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
