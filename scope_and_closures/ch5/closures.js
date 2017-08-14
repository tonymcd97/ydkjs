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