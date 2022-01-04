let a = 7;
let b = '6';
let c = a + b;
// console.log('Answer:' + c); // output will be Answer:76 . Not 12 because the 6 is a string so its concatinate 7 as number and 6 as string.

// Type COERCION refers to the process of automatic or implicit conversion of values from one data type to another.
// COERCION example#1
// using parseInt -> parseInt(string: string, radix?: number): number
let a = 7;
let b = '6';
b = parseInt(b,10)
let c = a + b;
console.log('Answer:' + c); // output will be Answer:13 .

// radix is a A value between 2 and 36 that specifies the base of the number in string. 
// If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. 
// All other strings are considered decimal.

let a = 7;
let b = '6';
b = parseInt(b,2)
let c = a + b;
console.log('Answer:' + c); // output will be Answer:NaN or Not a Number

let d = parseInt('Chrizsan', 10);
let e = isNaN(d);
console.log(d); // output will be NaN
console.log(e); // output will be true
