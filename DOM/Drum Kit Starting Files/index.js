document.querySelector("button").addEventListener("click", handleClick); 

function handleClick() {
    alert("I got clicked!");
}

// Adding Event Listeners to multiple buttons
/// Method 1
// var buttons = document.querySelectorAll('.drum');
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         alert(button.innerText + ' I got clicked!');
//     })
// })

/// Method 2
var buttons = document.querySelectorAll('.drum');
var numberOfDrums = buttons.length;
for (var i = 0; i < numberOfDrums; i++) {
    buttons[i].addEventListener('click', () => {
        alert('I got clicked!');
    })
}