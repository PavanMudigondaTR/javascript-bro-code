// ===================================
// JavaScript Type Conversion
// ===================================

// THE PROBLEM: User input is always a string
// -------------------------------------------
/*
let age = window.prompt("How old are you?");
age += 1;  // String concatenation instead of addition!
console.log(age);  // If input was 25, shows "251"
console.log(typeof age);  // "string"
*/

// THE SOLUTION: Convert to number
// -------------------------------------------
let age = window.prompt("How old are you?");
age = Number(age);  // Convert string to number
age += 1;  // Now this adds correctly
console.log(age);  // Shows 26
console.log(typeof age);  // "number"


// ===================================
// Converting to Number
// ===================================

let x = "Pizza";
let y = "0";
let z = "";
let a;  // undefined

console.log("\n--- Converting to Number ---");
console.log("Original:", x, "| Converted:", Number(x), "| Type:", typeof Number(x));
console.log("Original:", y, "| Converted:", Number(y), "| Type:", typeof Number(y));
console.log("Original:", z, "| Converted:", Number(z), "| Type:", typeof Number(z));
console.log("Original:", a, "| Converted:", Number(a), "| Type:", typeof Number(a));


// ===================================
// Converting to String
// ===================================

let num = 42;
let bool = true;
let undef;

console.log("\n--- Converting to String ---");
console.log("Original:", num, "| Converted:", String(num), "| Type:", typeof String(num));
console.log("Original:", bool, "| Converted:", String(bool), "| Type:", typeof String(bool));
console.log("Original:", undef, "| Converted:", String(undef), "| Type:", typeof String(undef));


// ===================================
// Converting to Boolean
// ===================================

console.log("\n--- Converting to Boolean ---");
console.log("Boolean('Pizza'):", Boolean("Pizza"));  // true (non-empty string)
console.log("Boolean(0):", Boolean(0));              // false (zero is falsy)
console.log("Boolean(''):", Boolean(""));            // false (empty string is falsy)
console.log("Boolean(undefined):", Boolean(undefined)); // false (undefined is falsy)
console.log("Boolean(42):", Boolean(42));            // true (non-zero number)
console.log("Boolean('0'):", Boolean("0"));          // true (non-empty string!)


// ===================================
// Practical Examples
// ===================================

// Example 1: Simple Calculator
console.log("\n--- Calculator Example ---");
/*
let num1 = window.prompt("Enter first number:");
let num2 = window.prompt("Enter second number:");

num1 = Number(num1);
num2 = Number(num2);

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
*/

// Example 2: Checking for empty input
console.log("\n--- Input Validation Example ---");
let userInput = "";  // Simulate empty input

if (Boolean(userInput)) {
    console.log("Input received:", userInput);
} else {
    console.log("No input provided!");
}

// Example 3: String concatenation vs addition
console.log("\n--- Concatenation vs Addition ---");
let str1 = "5";
let str2 = "3";
console.log("String concatenation:", str1 + str2);           // "53"
console.log("Numeric addition:", Number(str1) + Number(str2)); // 8


// ===================================
// Common Pitfalls
// ===================================

console.log("\n--- Common Pitfalls ---");
console.log("Number('') =", Number(""));        // 0 (not NaN!)
console.log("Number('abc') =", Number("abc"));  // NaN
console.log("Boolean('') =", Boolean(""));      // false
console.log("Boolean('0') =", Boolean("0"));    // true (string "0" is truthy!)


// ===================================
// Type Checking
// ===================================

console.log("\n--- Type Checking ---");
let myVar = "123";
console.log("Before conversion:", myVar, "- Type:", typeof myVar);
myVar = Number(myVar);
console.log("After conversion:", myVar, "- Type:", typeof myVar);
