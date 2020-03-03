/**
 * Repeat elements
 * add the attribute data-repeat="x" 
 * where 'x' is the amount of reps
 * parent elemento cannot be the <body>
 */

var toRepeat = document.querySelectorAll('[data-repeat]');

[...toRepeat].map(el => {

    var template = el.outerHTML;
    var parent = el.parentElement;
    var repeats = el.dataset.repeat - 1;

    for (var i = 0; i < repeats; i++) {
        parent.innerHTML += template;
    }
})