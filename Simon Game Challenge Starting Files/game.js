var gamePattern = [];
var buttonColours = ['red' , 'blue', 'green', 'yellow'];
var userClickedPattern = [];


$('.btn').click(function () {
            console.log(this);
            var userChosenColor = $(this).attr('id');
            userClickedPattern.push(userChosenColor);
            playSound(userChosenColor);
        }
    )


function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor =buttonColours[randomNumber];
    gamePattern.push(randomChosenColor)
    var button = $('#' + randomChosenColor)
    // Animating fadeIn and Fadeout
    button.fadeIn(100).fadeOut(100).fadeIn(100);
    // Play sound
    var audio = new Audio('sounds/' + randomChosenColor + '.mp3');
    audio.play();
    
};


function playSound(button) {
    switch(button) {
        case 'blue':
            var blueAudio = new Audio('sounds/blue.mp3');
            blueAudio.play();
            break;
        
        case 'green':
            var greenAudio = new Audio('sounds/green.mp3');
            greenAudio.play();
            break;
        
        case 'red':
            var redAudio = new Audio('sounds/red.mp3');
            redAudio.play();
            break;
        
        case 'yellow':
            var yellowAudio = new Audio('sounds/yellow.mp3');
            yellowAudio.play();
            break;
    }
}
