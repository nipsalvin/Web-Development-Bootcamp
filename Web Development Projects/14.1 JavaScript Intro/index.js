alert('Hello World'); //Returns an alert to the user on the browser
var firstName = prompt('What is your name?'); //Returns a prompt to the user on the browser
alert('Hello ' + firstName); //Alerts the user with their name

firstName.length; //Returns the length of the string
firstName.toUpperCase(); //Changes the name to uppercase
firstName.toLowerCase(); //Changes the name to lowercase
firstName.charAt(0); //Returns the letter at index 0
firstName.slice(0, 3); //Returns the letters from index 0 to 3
firstName.slice(0, firstName.length); //Returns the letters from index 0 to the number of letters in the length of the string

// Arithmetic Operations
var a = 5;
var b = 2;
a + b; //Adds the numbers
a - b; //Subtracts the numbers
a * b; //Multiplies the numbers
a / b; //Divides the numbers
a % b; //Returns the remainder of the division
3+5*2; //Rule of order of operations applies here
(3+5)*2; //Multiplies the numbers 

// Increment and Decrement Operators
var x = 10;
x++; //Increments x by 1 -> 11
x--; //Decrements x by 1 -> 10
++x; //Increments x by 1 -> 11
--x; //Decrements x by 1 -> 10
x+=2; //Increments x by 2 -> 12
x-=2; //Decrements x by 2 -> 10
x*=2; //Multiplies x by 2 -> 20
x/=2; //Divides x by 2 -> 10
x%=2; //Returns the remainder of the division of x by 2 -> 0

    //
    var a = 5;
    var b = a++; // 'b' is assigned the value of 'a' and then 'a' is incremented
    var c = ++a; // 'c' is incremented and assigned the value of 'a'
    var d = --b; // 'd' is decremented and assigned the value of 'b'
    b += 1; 

// Functions
function getMilk() {
    console.log('Here is your milk!');
}

function getMoreMilk(quantity) {
    console.log('Here is ' + quantity + ' more milk!');    
}

function lifeInWeeks(age) {
        var expectancy = 90 - age
        var days = expectancy * 365
        var weeks = expectancy * 52
        var months = expectancy * 12
        console.log('You have ' + days + ' days, ' + weeks +' weeks,' + months + ' months left' );
    }
    
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height) {
    bmi = Math.round((weight) / (height * height), 2) // Method 1
    bmi = Math.round((weight) / Math.pow(height, 2)) //Method 2
    return bmi
}
// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
// console.log(bmi)
//bmi should equal 20 when it's rounded to the nearest whole number.


// Love Calculator
var fName = prompt('Enter your name: ');
var sName = prompt("Enter your crush's name: ");

var result = Math.random();
result = (result*100)+1;
result = Math.floor(result);

// if (result === 90 ) {
//     alert("Hello " + fName + ", Your chances with " + sName + " are very high at " + result + " %");
// } else {
//     alert("Hello " + fName + ", Your chances with " + sName + " are very low at " + result + " %");
// }

if (result > 90 ) {
    alert("Hello " + fName + ", Your chances with " + sName + " are very high at " + result + " %");
}
if (result > 30 && result <= 90) {
    alert("Hello " + fName + ", Your chances with " + sName + " are moderate " + result + " %");
}
if (result <= 30 ) {
    alert("Hello " + fName + ", Your chances with " + sName + " are very low at " + result + " %");
}

console.log("Hello " + fName + ", Your chances with " + sName + " are " + result + " %");

//End of Love Calculator

// Leap Year Calculator
function isLeap(year) {    
    if (year%4 === 0) {
        if (year % 100 === 0 ){
            if (year % 400 == 0){
                console.log('Leap year');
            } else {
                console.log('Not Leap Year');
            }
        } else {
            console.log('Leap Year.');
        }
    } else {
        console.log('Not leap year.');
    }
    }
// End of Leap Year Calculator

// Working with Arrays
var guestList = ['John', 'Jane', 'Smith', 'Michael', 'Johnson', 'David', 'Wilson', 'Olivia'];

var guest = prompt('What is your name? ');
var fLetter = guest.slice(0, 1);
fLetter = fLetter.toUpperCase();
var restOfName = guest.slice(1);
restOfName = restOfName.toLowerCase();

guest = fLetter + restOfName

if (guestList.includes(guest)) {
    alert('Welcome to the party ' + guest + ' !');
} else {
    alert('You are not Welcome to the party ' + guest + '!');
} 

// FizzBuzz
var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0 ) {
        output.push('FizBuzz');
    } 
    else if(count % 5 === 0) {
        output.push('Buzz');
    } 
    else if (count % 3 === 0) {
        output.push('Fizz');
    } 
    else {
        output.push(count);
    }
    count ++;
    console.log(output);
}

// End of FizzBuzz

//Bill Paying Game

    //Write your code here.
    var numberOfPeople = guests.length;
    var randomPersonPosition = Math.random() * numberOfPeople;
    randomPersonPosition = Math.floor(randomPersonPosition);
    var randomPerson = guests[randomPersonPosition];
    console.log(randomPerson + ' is going to buy lunch');
    return randomPerson + ' is going to buy lunch';

// End of game