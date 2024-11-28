var gamePattern = [];
var buttonColours = ['red' , 'blue', 'green', 'yellow'];
var userClickedPattern = [];

$('.btn').click(function () {
            console.log(this);
            var userChosenColor = $(this).attr('id');
            userClickedPattern.push(userChosenColor);
            playSound(userChosenColor);
            animatePress(userChosenColor);
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
    playSound(randomChosenColor);
    
};

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColor) {
    button = $('#' + currentColor)
    button.addClass('pressed');
    setTimeout(function () {
        button.removeClass('pressed');
    }, 100);
}