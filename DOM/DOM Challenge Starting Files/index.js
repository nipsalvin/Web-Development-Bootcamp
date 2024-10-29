alert("Check out the word 'Hello'");

//Getting the DOM
document.firstElementChild.firstElementChild; //!Document/HTML/head

document.firstElementChild.lastElementChild; //!Document/HTML/body

// Getting the heading
var heading = document.firstElementChild.lastElementChild.firstElementChild;
//Changing the heading
// heading.innerHTML = "Goodby"

// Getting by element name
var checkBox = document.querySelector('input');
//Method 1
checkBox.checked = true;
//Method 2
checkBox.click();

// Changing the last Item on the list
alert("Check out the last item on the list'");
var listElement = document.firstElementChild.lastElementChild.querySelector('ul').lastElementChild;
listElement.innerHTML = 'Alvin'

// Selectors
/// Getting by Element
document.querySelector('ul'); //Returns the first element that matches <ul>
document.querySelector('#list'); //Returns the first element that matches id="list"
document.querySelector('.item'); //Returns the first element that matches class="item"
/// Combining Selectors
document.querySelector('li a'); //Returns the first element that matches <a> inside the first <li>
document.querySelector('ul li a'); //Returns the first element that matches <a> inside the first <li> inside the first <ul>
document.querySelector('.item a'); //Returns the first element that matches <a> inside the first class="item"
document.querySelector('#list a'); //Returns the first element that matches <a> inside the first id="list"
document.querySelector('#list .item'); //Returns the first element that matches class="item" inside the first id="list"
/// Selecting multiple elements
document.querySelectorAll('ul'); //Returns all elements that match <ul>
document.querySelectorAll('#list'); //Returns all elements that match id="list"
document.querySelectorAll('.item'); //Returns all elements that match class="item"

// Changing styling of an element
document.querySelector('h1').style.color = 'red';
document.querySelector('.btn').style.backgroundColor = 'yellow';

// Adding classes
document.querySelector('button').classList.add('invisible');
// Removing classes
document.querySelector('button').classList.remove('invisible');
// Toggling classes
document.querySelector('button').classList.toggle('invisible');
// Checking if a class is present
document.querySelector('button').classList.contains('invisible');

//Text Manipulation
/// innerHTML returns all the HTML inside the element
document.querySelector('h1').innerHTML
// document.querySelector('h1').innerHTML = '<b>Hello</b>';
/// innerText returns all the text inside the element
document.querySelector('h1').innerText
// document.querySelector('h1').innerText = 'Hello';
/// textContent returns all the text inside the element
document.querySelector('h1').textContent
// document.querySelector('h1').textContent = 'Hello';

// Manipulating HTML Element Attributes
document.querySelector('a').href // Returns the value of the href attribute
document.querySelector('a').getAttribute('href') // Returns the value of the href attribute
document.querySelector('a').setAttribute('href', 'https://www.blacktech.co.ke'); // Sets the value of the href attribute
document.querySelector('a').hasAttribute('href'); // Returns true or false if the href attribute exists

//Event Listeners
/// This is using an anonymous function
document.querySelector('button').addEventListener('click', function() {
    alert('I got clicked!');
});
/// This is using a named function
document.querySelector('button').addEventListener('click', hello)

function hello() {
    alert('I got clicked!');
};


var buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.innerText + ' I got clicked!');
    })
});

// Event Listeners on the webpage console
$0.addEventListener('click', function() {
    console.log('I got clicked!');
});

function add(num1, num2) {
    return num1 + num2
};

function multiply(num1, num2) {
    return num1 * num2
};

function subtract(num1, num2) {
    return num1 - num2
};

function divide(num1, num2) {
    return num1 / num2
};

function calculator(num1, num2, operator) {
    return operator(num1, num2)
};

/// In action:
console.log(calculator(2, 2, multiply))
console.log(calculator(2, 2, add))