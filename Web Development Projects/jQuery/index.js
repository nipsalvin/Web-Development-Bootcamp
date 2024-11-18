// $ and jQuery are the same thing
$('h1').css('color', 'red');

//// It is safer to wait for the webpage to load before using jQuery
////// This is used when we call <script> at the start of the page
$(document).ready(function() {
    $('h1').css('color', 'red');
});

// In jQuery, there is no difference between selecting 1 element and selecting all elements
//// selecting all
document.querySelectorAll('button');
$('button');
//// selecting 1
document.querySelector('button');
$('button');

$('h1').css('color', 'red'); // Passing 2 arguments is setting a property
$('h1').css('color'); // Passing 1 argument is getting a property

//Adding classes
$('h1').addClass('big-title');
// Removing classes
$('h1').removeClass('big-title');
// Toggling classes
$('h1').toggleClass('big-title');

// adding multiple classes
$('h1').addClass('big-title margin-50'); // In the same quotes separated by a space

// Checking if class exists
$('h1').hasClass('big-title'); // Returns true or false