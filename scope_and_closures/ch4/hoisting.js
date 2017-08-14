/* hoisting works with function declarations */

hello();

function hello() {
    console.log('hello');
}

/* hoisting does not work with function expressions */

foo();

var foo = function hi() {
    console.log('hello');
}

/* functions are hoisted over variable declarations, duplicate VARIABLE definitions are ignored */

foo();

var foo;

foo = function() {
    console.log(2);
}

function foo() {
    console.log(1);
}

/* duplicate function definitions are not */

foo();

function foo() {
    console.log(1);
}

function foo() {
    console.log(2);
}

function foo() {
    console.log(3);
}