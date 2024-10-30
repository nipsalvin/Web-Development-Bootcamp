document.querySelector("button").addEventListener("click", handleClick); 

function handleClick() {
    console.log("I got clicked!");
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
    buttons[i].addEventListener('click', function(){
        // alert(buttons[i] + 'I got clicked!');
        console.log(this)
        // 'this' is the element that triggered the event
        this.style.color = "white";
    })
}


var audio = new Audio('sounds/tom-1.mp3');
audio.play();