var gamePattern = [];
var buttonColours = ['red' , 'blue', 'green', 'yellow'];
var userClickedPattern = [];
var started = false;
var level = 0;

// Detecting keyboard press when started === false
$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        }
    });

$('.btn').click(function () {
            console.log(this);
            var userChosenColor = $(this).attr('id');
            userClickedPattern.push(userChosenColor);
            playSound(userChosenColor);
            animatePress(userChosenColor);
            checkAnswer(userClickedPattern.length - 1);
        }
    );

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // Functionality for when the user gets the sequence right
        console.log('success');
        if (userClickedPattern.length === gamePattern.length) {
            // Call nextSequence() after a user has clicked the last button after 1000 ms delay
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log('wrong');
        // Functionality for when the user gets the sequence wrong
        playSound('wrong');
        // Animating the body
        var body = $('body');
        body.addClass('game-over');
        setTimeout(function(){
            body.removeClass('game-over');
        }, 200);
        // Displaying the text
        $("#level-title").text("Game Over, Press Any Key to Restart");
        // Functionality to Restarting the game
        startOver();
    }
};

function startOver(){
    level = 0;
    gamePattern = [];
    started = false
};

function nextSequence () {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor =buttonColours[randomNumber];
    gamePattern.push(randomChosenColor)
    var button = $('#' + randomChosenColor)
    // Animating fadeIn and Fadeout
    button.fadeIn(100).fadeOut(100).fadeIn(100);
    // Play sound
    playSound(randomChosenColor);
    // Updating the level everytime this function is called
    level++;
    $("#level-title").text('Level ' + level);
    
};

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
};

function animatePress(currentColor) {
    button = $('#' + currentColor)
    button.addClass('pressed');
    setTimeout(function () {
        button.removeClass('pressed');
    }, 100);
};