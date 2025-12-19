// ===================================
// JavaScript Type Conversion
// ===================================

// THE PROBLEM: User input is always a string
// -------------------------------------------
// let age = window.prompt("How old are you?");
// age += 1;  // String concatenation instead of addition!
// console.log(age);  // If input was 25, shows "251"
// console.log(typeof age);  // "string"
// age = Number(age);  // Convert to number for correct addition
// console.log(typeof age);  // "number"
// THE SOLUTION: Convert to number
// -------------------------------------------
// let age = window.prompt("How old are you?");
// age = Number(age);  // Convert string to number
// age += 1;  // Now this adds correctly
// console.log(age);  // Shows 26
// console.log(typeof age);  // "number"

// let age;

// document.getElementById("mySubmit").onclick = function() {
//     age = document.getElementById("age").value;
//     console.log("Original age input:", age, "| Type:", typeof age);
    
//     age = Number(age);  // Convert to number
//     console.log("Converted age input:", age, "| Type:", typeof age);
    
//     age += 1;  // Now this adds correctly
//     console.log(`Next year, you will be ${age} years old!`);
// }

// ===================================
// Converting to Number
// ===================================

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// let x;
// let y;
// let z;

// x = Number(x);
// x = String(y);
// z = Boolean(z); // true since there is non empty string

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
