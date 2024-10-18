alert("Check out the word 'Hello'");

//Getting the DOM
document.firstElementChild.firstElementChild; //!Document/HTML/head

document.firstElementChild.lastElementChild; //!Document/HTML/body

// Getting the heading
var heading = document.firstElementChild.lastElementChild.firstElementChild;
//Changing the heading
heading.innerHTML = "Goodby"

// Getting by element name
var checkBox = document.querySelector('input');
//Method 1
checkBox.checked = true;
//Method 2
checkBox.click();

// CHanging the last Item on the list
alert("Check out the last item on the list'");
var listElement = document.firstElementChild.lastElementChild.querySelector('ul').lastElementChild;
listElement.innerHTML = 'Alvin'
