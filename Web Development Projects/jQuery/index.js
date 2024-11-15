// $ and jQuery are the same thing
$('h1').css('color', 'red');

//// It is safer to wait for the webpage to load before using jQuery
////// This is used when we call <script> at the start of the page
$(document).ready(function() {
    $('h1').css('color', 'red');
});