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

// Switch Operators
switch (operator) {
    case 'add':
        return num1 + num2
    case 'subtract':
        return num1 - num2
    case 'multiply':
        return num1 * num2
    case 'divide':
        return num1 / num2
    default:
        return 'Invalid operator'
}

var buttons = document.querySelectorAll('.drum');
var numberOfDrums = buttons.length;
for (var i = 0; i < numberOfDrums; i++) {
    buttons[i].addEventListener('click', function(){
        // alert(buttons[i] + 'I got clicked!');
        console.log(this)
        // // 'this' is the element that triggered the event
        // this.style.color = "white";
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case 'w':
                var tom1  = new Audio('sounds/tom-1.mp3');
                tom1 .play();                
                break;
            case 'a':
                var tom2  = new Audio('sounds/tom-2.mp3');
                tom2 .play();                
                break;
            case 's':
                var tom3  = new Audio('sounds/tom-3.mp3');
                tom3 .play();                
                break;
            case 'd':
                var tom4  = new Audio('sounds/tom-4.mp3');
                tom4 .play();                
                break;
            case 'j':
                var snare  = new Audio('sounds/snare.mp3');
                snare .play();                
                break;
            case 'k':
                var crash  = new Audio('sounds/crash.mp3');
                crash .play();                
                break;
            case 'l':
                var kick  = new Audio('sounds/kick-bass.mp3');
                kick .play();                
                break;
            default:
                break;
        }
    })
}

//Objects in JavaScript
var bellBoy1 = {
    name: 'John',
    age: '28',
    hasWorkPermit: true,
    languages: ['English', 'Kiswahili', 'German']
}

var housKeeper1 = {
    name: 'Mary',
    age: '42',
    yearsOfExperience: 10,
    address: 'Nairobi',
    hasWorkPermit: true,
    languages: ['English', 'Kiswahili', 'German'],
    certifications: ['CPR', 'First Aid', 'Wound Care'],
    educationLevel: 'High School',
}

// Objects
//// Constructor Functions
function HouseKeeper(name, age, yearsOfExperience, address, hasWorkPermit, languages, certifications, educationLevel) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
    this.certifications = certifications;
    this.educationLevel = educationLevel;
    this.clean = function(){
        alert(this.name + 'Cleaning')
    };
}

function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function(){
        alert('May I move your Suitcase')
    };
}

////Initializing Objects
var houseKeeper1 = new HouseKeeper('Mary', 42, 10, ['English', 'Kiswahili', 'German'], ['CPR', 'First Aid', 'Wound Care'], 'High School');
var bellBoy1 = new BellBoy('John', 28, true, ['English', 'Kiswahili', 'German']);

//// Methods
////// Function to be associated with the object
function moveSuitcase() {
    alert('May I take your suitcase?');
    // pickUpSuitcase();
    // moveSuitcase();
}

////// Method in the object
var bellBoy1 = {
    name: 'John',
    age: '28',
    hasWorkPermit: true,
    languages: ['English', 'Kiswahili', 'German'],
    moveSuitcase: function() {
        alert('May I take your suitcase?');
        // pickUpSuitcase();
        // moveSuitcase();
    }
}

////// Calling the method
bellBoy1.moveSuitcase()


// Call back Functions
function anotherAddEventListener(typeOfEvent, callbackFunction) {
    var eventThatHappened = {
        eventType: 'keypress',
        key:'p',
        durationOfKeyPress: 2,
    }

if (eventThatHappened.eventType === typeOfEvent) {
    callbackFunction(eventThatHappened);
}
}

anotherAddEventListener('keypress', function(event){
    console.log(event)
})

//// On the browser console
document.addEventListener('keypress', function(event){
    console.log(event)
})