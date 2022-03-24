// Normal function

// function definition
function function_name(param1, param2) {
    //do something
}

//function invokation

// function_name(arg1, arg2);


function calculator(str, a, b) {
    if (str == 'add') {
        return function add() {
            return a + b;
        }
    }
}

let returnedFunction = calculator('add', 10, 12);
console.log("returned function is \n" + returnedFunction);

returnedFunction();



// IIFE functions--- functions that are called as soon as they are defined.
// wrapped inside () brackets

let additionIIFE = (function add(a,b) {
    return a + b;
})(20,30);

console.log("adddition iife is " + additionIIFE);
