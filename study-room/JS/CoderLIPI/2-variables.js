let a = 3;
let b = 2;
let c = a + b;
console.log('Answer: ' + c);
// output will be -> Answer: 5

/*
the 'a', 'b' and 'c' act as a variable like a bucket that contain or storing a value for put or retrieve a information.
the 'a' variable contain a value equal to 3.
the 'b' variable contain a value equal to 2.
the 'c' variable contain an expression that add 2 values inside the 'a' and 'b' variables.
the '+' operator act as an addition operator on variable 'c'.
the '+' on console.log serving to concatenate 2 values together .
*/


/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~KEYWORD ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
for example the 'let' .
it's like a verb in the english language.
it's like an instruction to the JS compiler that we want to do something.
for example:

let a = 3;

tell JS compiler that we want to create a variable with the identifier of 'a' that stored a value equal to 3.

beside 'let' there are other way to declare variable, other keyword those are 'const' and 'var'. 
Source#1: https://kotakode.com/blogs/10214/Mengenal-Perbedaan-LET%2C-CONST%2C-Dan-VAR-Pada-Javascript

RULE 1: STOP USING 'var' AT ALL. Use 'let' or 'const' instead because 'var' uses something called ‘hoisting’, which can lead to unexpected results.
-> 'let' & 'const' is functional scope based. 'var' is block (inside {}) scope based.
-> means when we declare variable using 'var' we cant access the variable outside function but we can access outside block.
-> meanwhile using 'let' or 'const' we can't access the variable either outside block/function/if statements/for loops.
-> example */

for(let i=1; i<6; i++){
    console.log(i) // output will be number 1 to 5
}

for(let i=1; i<6; i++){
    console.log(i)
}
console.log(i) // will throw error -> i is not defined (Using 'let' cant access variable outside block).



for(var i=1; i<6; i++){
    console.log(i)
  }
  console.log(i) // output will be number 1 to 6 (Using 'var' can access variable outside block).


function greet(){
    var say = 'Hello'
    return say
}
console.log(say) // will throw error -> say is not defined (Using 'var' cant access variable outside function).


/*
RULE 2: USE 'let' AS MINIMUM AS POSSIBLE ONLY WHEN NEEDED. Use 'const' by default everywhere because 'const' means constant so it prevents variable re-assignment.
-> value declared by 'var' & 'let' ,when its variable re-assigned, can changed, meanwhile using 'var' it won't change.
-> example */

var month = 'May'
month = 'June'
console.log(month) // output will be -> June (Using 'var' value can change).

let month = 'May'
month = 'June'
console.log(month) // output will be -> June (Using 'let' value also can change).

const month = 'May'
month = 'June'
console.log(month) // will throw error -> Assignment to constant variable ( Using 'const' value cant change).



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 'let' RE-ASSIGN VALUE EXAMPLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let x = 5;
let y = x;
x++;
console.log(x, y); // output will be -> 6, 5

const x = 5;
const y = x;
x++;
console.log(x, y); // will throw error -> Assignment to constant variable (Using 'const' cant re-assign variable).

let x = 7;
let y = 3;
let z = x + y;
console.log(z); // output will be -> 10

let x = 7;
x = 6; // re-assign value to variable 'x'
x = 9; // re-assign value to variable 'x'
x = 10; // LAST re-assign value to variable 'x'
let y = 3;
let z = x + y;
console.log(z); // output will be -> 13 (the last value re-assigned to 'x' equal to 10)

let x = 7;
x = 6; // re-assign value to variable 'x'
x = 9; // re-assign value to variable 'x'
x = 10; // re-assign value to variable 'x'
let x = 7; // re-declared variable 'x'
let y = 3;
let z = x + y;
console.log(z); // will throw error -> Identifier 'x' has already been declared ( Can re-assign the value as much as you want but can't declare the variable more than once).



/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ INITIALIZATION TECHNIQUE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

originally, 2 line of code */
let a; // declared the variable, if we debug here the output will be undefined since we haven't defined it or put a value into it. 
a = 5; // assign the value, if we debug here the output will be 5.

// Preferred, Initialized it into 1 line of code.
let a = 5;




/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ VARIABLE / IDENTIFIER NAME RULES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. HAS TO BEGIN WITH A LETTER / DOLLAR SIGN ($) / UNDERSCORE (_).

2. CAN CONTAIN LETTERS / NUMBERS / DOLLAR SIGN ($) / UNDERSCORE (_) BUT NO OTHER SPECIAL CHARACTERS AND NO SPACE.

3. CAN'T USE ANY KEYWORD ( 'let', 'const', 'var', etc)
   example */
let let = 5; // will throw error -> let is disallowed as a lexically bound name

/*
4. CASE SENSITIVE
   example*/
let a = 2;
let A = 8; // not re-declare nor re-assign variable 'a' but declare new variable 'A'
console.log(a); // output will be -> 2

/*
5. HAS TO BE DESCRIPTIVE, MEANINGFUL, WHAT MEANING DOES THIS VARIABLE HAVE ON THE APPLICATION
   letters only like the examples given before ( a, b, c, x, y, z) is wrong because its not descriptive enough.
   ideal descriptive variable/identifier name example #1 */
let orangePrice = 20;
let orangePriceTax = 2;
let orangeTotalPrice =  orangePrice + orangePriceTax;
console.log('Orange Total Price will be: $' + orangeTotalPrice); // output will be -> Orange Total Price will be: $22
//    ideal descriptive variable/identifier name example #2
let employeeName = 'Bob';
let employeeAddress = 'New York street 123';
console.log(employeeName + ' live in '  + employeeAddress); // output will be -> Bob live in New York street 123

/*
6. CAMEL CASING WHEN INTENDED TO USE MULTIPLE WORDS ( if not using something like underscore (_))
   first word has to be ALWAYS in lower case then the subsequent words using upper case
   NOT an IDEAL camel case example*/
let employeeAddress = 'New York street 123'; // intent to assign first employee address.
let EmployeeAddress = 'California street 222'; // intent to assign second employee address. Bad practice, will be pretty hard to notice the difference ( the difference only on first letter become capital).
// an IDEAL camel case example
let firstEmployeeAddress = 'New York'; // intent to assign first employee address.
let secondEmployeeAddress = 'California street 222'; // intent to assign second employee address. Better practice, will be easier to notice the difference.

