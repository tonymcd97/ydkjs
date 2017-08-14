var a = 2

function foo() {
    var a = 3;
    console.log(a);
}

foo();

console.log(a);

/* simplified using a immediately invoked function expression (IIFE)*/

var a = 2;

(function foo() {
    var a = 3;
    console.log(a);
})();

console.log(a);

/* passing in references */

var a = 2;

(function IIFE(global) {
    var a = 3;
    console.log(a);
    console.log(global.a)
})(window);

console.log(a);

/* let block scope vs var */

{
    var a = 3;
    console.log(`in block a = ${a}`);
}

console.log(`out of block a = ${a}`);

{
    let a = 3;
    console.log(`in block a = ${a}`);
}

console.log(`out of block a = ${a}`);

/* hoisting doesn't work with let */

(function hoist() {
    console.log(`hoisted a = ${a}`);
    var a = 10;
})();

(function hoist() {
    console.log(`hoisted a = ${a}`);
    let a = 10;
})();