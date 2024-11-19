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

// Manipulating text
$('h1').text(); // Returns the text inside the element
$('h1').text('Bye'); // Sets the text inside the element

// Manipulating Attributes
$('a').attr('href'); // Returns the href attribute
$('a').attr('href', 'https://www.blacktech.co.ke'); // Sets the href attribute
$('img').attr('src'); // Returns the src attribute
$('img').attr('src', 'drum.png'); // Sets the src attribute

// Event listeners with jQuery
$('h1').click(function() {
    $('h1').css('color', 'purple')
});

//// Event Listeners on the webpage using vanilla JS
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        document.querySelector('h1').style.color = 'orange';
    });
}

//// Event Listeners on the webpage using jQuery
$('button').click(function() {
    $('h1').css('color', 'orange');
});

$('input').keypress(function(event){
    console.log(event.key);
})
//// the query 'input' selects only the input elements

$(document).keypress(function(event){
    console.log(event.key);
    $('h1').text(event.key);
})

////Event listeners on the webpage using shorthand jQuery
$('button').on('click', function() {
    $('h1').css('color', 'orange');
});

$('input').on('keypress', function(event){
    console.log(event.key);
})

$('h1').on('mouseover', function() {
    $('h1').css('color', 'green');
});

// Adding elements
$('h1').before('<button>New Before</button>'); // Adds an element before the selected element, outside the element tag
$('h1').after('<button>New After</button> <br>'); // Adds an element after the selected element, outside the element tag
$('h1').prepend('<button>New Prepend</button>'); // Adds an element before the selected element, inside the element tag
$('h1').append('<button>New Appended</button>'); // Adds an element after the selected element, inside the element tag
// $('h1').remove(); // Removes the selected element
// $('h1').empty(); // Removes the content of the selected element