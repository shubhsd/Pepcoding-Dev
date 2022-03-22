// var, let, const

// Variable declaration

var a; //int string float

//variable initialization
a = 10;

// to print 
// console.log(a);

// typeof operator - tells us type of data stored in variable

// console.log(typeof(a));


// var, let, const

var a = 'hello'
console.log(a);

var a = 10;
console.log(a);

// Var can be reinitialized and redeclared


// -------------Let

// Below statements will give error as let cannot be redeclared
// let b = 'hello'
// console.log(b);

// let b = 10;
// console.log(b);



// Var can be accessed outside functional scope

for(var i = 0; i<=10; i++) {
    if(i%2==0) {
        var hello = 1000;
        console.log(i);
    }
}

console.log("value of i is " + i );
console.log(hello);

