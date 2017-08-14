/* closure example */

function foo() {
    const a = 3;

    function bar() {
        console.log(a);
    }

    return bar;
}

const baz = foo();

baz();

/* Example where closure doesn't work as expected, 6 would be printed every time */

for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*1000 );
}

/* using let allows a new variable to be created for each iteration of the loop, i.e. its block scoped */

for(let i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*1000 );
}

/* Module Pattern */

function coolModule() {
    const greeting = 'hello';
    const numbers = [1,2,3]

    function sayHello() {
        console.log(greeting);
    }

    function spitNumbers() {
        console.log(numbers.join(' ! '));
    }

    return {
        sayHello:sayHello,
        spitNumbers:spitNumbers
    }
}

const myMod = coolModule();

myMod.sayHello();
myMod.spitNumbers();