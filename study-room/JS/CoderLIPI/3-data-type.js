// // Only the value or the data have data types. The variables itself doesn't have data types

// // check data type examples
// const productQuantity = 35;
// console.log(typeof productQuantity); // output will be -> number (since the data we assign to variable 'productQuantity' is a number equal to 35).
// const isLowProductStock = true;
// console.log(typeof isLowProductStock); // output will be -> boolean
// const storeName = 'ABC Store';
// console.log(typeof storeName); // output will be -> string

// /*
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DATA TYPES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. NUMBER 
//    -> use number data type if you want to perform math or algebraic expressions.
//    -> values can be positive / negative / decimals.
//    -> number data type usage example:*/
// const productQuantity = 35;
// const productSold = 5;
// const productStock = productQuantity - productSold;
// console.log('Store remaining product stock is ' + productStock + ' products'); // output will be -> Store remaining product stock is 30 products

// /*
// 2. BOOLEAN
//    -> use boolean data type if you want to do yes or no, true or false kinda evaluation.
//    -> values only true / false.
//    -> boolean data type usage example if TRUE:*/
// const productQuantity = 35;
// const productSold = 25;
// const productStock = productQuantity - productSold;
// let isLowProductStock;
// (productStock < 15) ? isLowProductStock = true : isLowProductStock = false;
// console.log('is the product quantity on low stock? ' + isLowProductStock); // output will be -> is the product quantity on low stock? true
// isLowProductStock ? console.log('Stock is Low. Please Re-stock.') : console.log('Stock amount is normal.'); // output will be -> Stock is Low. Please Re-stock.
// //    boolean data type usage example if FALSE:
// const productQuantity = 35;
// const productSold = 5;
// const productStock = productQuantity - productSold;
// let isLowProductStock;
// (productStock < 15) ? isLowProductStock = true : isLowProductStock = false;
// console.log('is the product quantity on low stock? ' + isLowProductStock); // output will be -> is the product quantity on low stock? false'
// isLowProductStock ? console.log('Stock is Low. Please Re-stock.') : console.log('Stock amount is normal.'); // output will be -> Stock amount is normal.

// /*
// 3. STRING
//    -> short for string characters
//    -> anything inside a single quote ( '' or if theres any data use ``) will be read as string data type.
//    -> string data type usage example:*/
// const storeName = 'Welcome to ABC Store!';
// console.log(storeName); // output will be -> Welcome to ABC Store!


/*
4. UNDEFINED
   -> example*/
let storeAddress;
console.log(storeAddress); // output will be -> undefined
console.log(typeof storeAddress); // output will be -> undefined

