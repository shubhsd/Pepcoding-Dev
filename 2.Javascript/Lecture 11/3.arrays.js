// arrays - collection of element  of any type

let cars = ["BMW", "audi", "MG", 1, 2, 3, true];

console.log(cars);

// accessing elements of array

console.log(cars[0]);

// replacing elements in array

cars[3] = "Mahindra";

console.log(cars[3]);
console.log(cars);

cars[7] = "Tata"
console.log(cars);

let array2d = [
    [1, 2, 3, "abc"],
    [4, true, 6],
    [7, 8, 9]
]

console.log(array2d);
console.log(array2d[1][2]);
console.log(array2d[1]);
console.table(array2d);
console.table(array2d[0].length);
console.table(array2d[1].length);
array2d[1][1] = false;
console.table(array2d);

