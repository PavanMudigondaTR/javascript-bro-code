// ========================================
// JavaScript Constants
// ========================================

// Constants are variables that cannot be changed
// Use 'const' instead of 'let' for values that should never change

// ========================================
// Basic Example: Circle Circumference
// ========================================

const PI = 3.14159;  // Constants for numbers should be UPPERCASE
let radius;
let circumference;

// Get radius from user
radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);

// Calculate circumference (formula: 2 * π * r)
circumference = 2 * PI * radius;

console.log(`The circumference is: ${circumference}`);

// Try to change PI - this will cause an error!
// Uncomment the line below to see:
// PI = 3.14;  // TypeError: Assignment to constant variable

// ========================================
// Why Use Constants?
// ========================================

// 1. Prevent Accidental Changes
const DAYS_IN_WEEK = 7;
// DAYS_IN_WEEK = 8;  // Error! Can't change

// 2. Security - Prevent Malicious Changes
const MAX_LOGIN_ATTEMPTS = 3;
const API_KEY = "abc123xyz";  // Strings use camelCase

// 3. Self-Documenting Code
const TAX_RATE = 0.07;
let price = 100;
let tax = price * TAX_RATE;  // Clear what 0.07 represents!

console.log("\n=== Constant Examples ===");
console.log(`Days in week: ${DAYS_IN_WEEK}`);
console.log(`Tax rate: ${TAX_RATE * 100}%`);

// ========================================
// Naming Conventions
// ========================================

// ✅ UPPERCASE for primitive types (numbers, booleans)
const MAX_SIZE = 100;
const MIN_AGE = 18;
const IS_PRODUCTION = true;

// ✅ camelCase for reference types (strings, objects, arrays)
const appName = "My Application";
const defaultMessage = "Welcome!";

console.log("\n=== Naming Conventions ===");
console.log(`Max size: ${MAX_SIZE}`);
console.log(`App name: ${appName}`);

// ========================================
// Practice Exercises
// ========================================

// Exercise 1: Area of Circle (π * r²)
/*
const radius2 = 5;
const area = PI * Math.pow(radius2, 2);
console.log(`Area: ${area}`);
*/

// Exercise 2: Temperature Conversion
// Formula: C = (F - 32) * 5/9
/*
const FAHRENHEIT = 98.6;
const celsius = (FAHRENHEIT - 32) * 5/9;
console.log(`${FAHRENHEIT}°F = ${celsius.toFixed(1)}°C`);
*/

// Exercise 3: Sales Tax Calculator
/*
const ITEM_PRICE = 50;
const SALES_TAX = 0.08;  // 8%
const total = ITEM_PRICE + (ITEM_PRICE * SALES_TAX);
console.log(`Total with tax: $${total.toFixed(2)}`);
*/

// Exercise 4: Time Converter (hours to seconds)
/*
const HOURS = 2;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const totalSeconds = HOURS * MINUTES_PER_HOUR * SECONDS_PER_MINUTE;
console.log(`${HOURS} hours = ${totalSeconds} seconds`);
*/
