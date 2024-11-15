document.querySelector("button").addEventListener("click", handleClick); 

function handleClick() {
    console.log("I got clicked!");
}

// Adding Event Listeners to multiple buttons
////// Method 1
//// var buttons = document.querySelectorAll('.drum');
//// buttons.forEach((button) => {
////     button.addEventListener('click', () => {
////         alert(button.innerText + ' I got clicked!');
////     })
//// })

////// Method 2
var buttons = document.querySelectorAll('.drum');
var numberOfDrums = buttons.length;
for (var i = 0; i < numberOfDrums; i++) {
    buttons[i].addEventListener('click', function(){
        // alert(buttons[i] + 'I got clicked!');
        console.log(this)
        // // 'this' is the element that triggered the event
        // this.style.color = "white";
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}


var audio = new Audio('sounds/tom-1.mp3');
audio.play();

// Adding event listeners to keyboard
document.addEventListener('keydown', function(event){
    console.log(event.key);
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(key) {
    switch (key) {
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
}

// Adding animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');
    // setTimeout(function() {activeButton.classList.remove('pressed');}, 100);
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);
}