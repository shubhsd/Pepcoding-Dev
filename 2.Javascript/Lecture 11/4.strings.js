// String is a sequence of characters

var str = "hello world";
console.log(str);
console.log(str[6]);
console.log(str.length);

// String methods

// 1. Extraction methods
// a. slice(start_index, end_index)

let slicedStr = str.slice(2, 5);
console.log(slicedStr);

slicedStr = str.slice(2, 8);
console.log(slicedStr);

// Passing only one argument in slice

console.log(str.slice(3));  //means 3 se leke end tak sab print hoga 
console.log(str);

var updatedStr = str.slice(6, -2);
console.log(updatedStr);

var updatedStr = str.slice(2, -2);
console.log(updatedStr);




// -----------------------------SUBSTRING

let ans = str.substr(2, 6);
console.log(ans);
console.log(str);


// -----lower case
str = "HELLO";
console.log(str.toLowerCase());

// Uppercase

str = "teststring";
console.log(str.toUpperCase());

// -------Concatenation

let firststr = "You guys ";
let secondStr = "are smart";
let concatenatedStr = firststr + secondStr;
console.log(concatenatedStr);

// concat function

let concatStr = firststr.concat(secondStr, "in you");
console.log(concatStr);


// Trim
let trimStr = "      hello    how   are y ou";
console.log(trimStr);
console.log(trimStr.trim());




