/*eslint no-undef: "error"*/
/*eslint-env browser*/

var hamburger = document.querySelectorAll('.hamburger')[0];
var menu = document.querySelectorAll('#menu')[0];

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
});
    
/* When the event 'click' is initiated, it is set to toggle the hamburger 'open' and menu 'open' classes. */