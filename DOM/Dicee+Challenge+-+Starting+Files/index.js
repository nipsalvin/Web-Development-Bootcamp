var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');
var heading = document.querySelector('h1');

image1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
image2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

if (randomNumber1 > randomNumber2 ){
    heading.innerText = 'Player 1 wins'
} else if ( randomNumber2 > randomNumber1 ) {
    heading.innerText = 'Player 2 wins'
} else if ( randomNumber1 === randomNumber2 ) {
    heading.innerText = "It's a Draw"
}