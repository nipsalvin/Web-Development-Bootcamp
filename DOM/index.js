alert("Hello");

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
checkBox.click()

