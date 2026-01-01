// variable scope = where a variable is accessible within the code
//                  and accessible locations depend on where the variable is declared (local vs global)


let x = 0; // global scope

function function1() {
    let x = 1; // local scope // overrides global x within this function
    console.log(x);
}

function function2() {
    // uses global x since there is no local x
    console.log(x);
}

function1();
function2();



