var gamePattern = [];
var buttonColours = ['red' , 'blue', 'green', 'yellow'];

function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor =buttonColours[randomNumber];
    gamePattern.push(randomChosenColor)
    var button = $('#' + randomChosenColor)

    // Adding animation and removing animation
    button.addClass('pressed');
    setTimeout(function () {
        button.removeClass('pressed');
    }, 100);
    
};
