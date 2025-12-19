# Learn JavaScript Type Conversion 💱

## 📺 Video
[Learn JavaScript TYPE CONVERSION in 5 minutes!](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=5) (5:40)

## 📝 Description
Type conversion (also called type casting) is the process of changing a value's data type to another. Learn how to convert between strings, numbers, and booleans - an essential skill when working with user input and performing calculations.

## 🎯 What You'll Learn

### Core Concepts
- What type conversion is and why it's important
- Converting strings to numbers
- Converting values to booleans
- Converting values to strings
- Understanding `NaN` (Not a Number)
- Using `typeof` to check data types

### Built-in Conversion Functions
- `Number()` - Convert to number
- `String()` - Convert to string
- `Boolean()` - Convert to boolean
- `typeof` - Check data type

## 💻 Code Examples

### The Problem: User Input is Always a String

```javascript
let age = window.prompt("How old are you?");
age += 1;  // String concatenation instead of addition!
console.log(age);  // If input was 25, shows "251"
console.log(typeof age);  // "string"
```

### Solution: Convert to Number

```javascript
let age = window.prompt("How old are you?");
age = Number(age);  // Convert string to number
age += 1;  // Now this adds correctly
console.log(age);  // Shows 26
console.log(typeof age);  // "number"
```

### Using HTML Form with Type Conversion

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <label for="age">Enter your age:</label>
    <input type="text" id="age" placeholder="25">
    <button id="mySubmit">Submit</button>
    <script src="index.js"></script>
</body>
</html>
```

**JavaScript:**
```javascript
let age;

document.getElementById("mySubmit").onclick = function() {
    age = document.getElementById("age").value;
    console.log("Original age input:", age, "| Type:", typeof age);
    
    age = Number(age);  // Convert to number
    console.log("Converted age:", age, "| Type:", typeof age);
    
    age += 1;  // Now this adds correctly
    console.log(`Next year, you will be ${age} years old!`);
}
```

## 🔄 Type Conversion Functions

### Converting to Number

```javascript
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);  // NaN (Not a Number)
y = String(y);  // "pizza" (already a string)
z = Boolean(z); // true (non-empty string)

console.log(x, typeof x);  // NaN "number"
console.log(y, typeof y);  // "pizza" "string"
console.log(z, typeof z);  // true "boolean"
```

**Examples of Number Conversion:**
```javascript
let a = "42";
let b = "Pizza";
let c = "";
let d;  // undefined

a = Number(a);  // 42
b = Number(b);  // NaN (Not a Number)
c = Number(c);  // 0
d = Number(d);  // NaN

console.log(a, typeof a);  // 42 "number"
console.log(b, typeof b);  // NaN "number"
console.log(c, typeof c);  // 0 "number"
console.log(d, typeof d);  // NaN "number"
```

### Converting to String

```javascript
let x = "Pizza";
let y = 0;
let z = true;
let a;  // undefined
pizza";
let y = 0;
let z = "";
let a;  // undefined

x = Boolean(x);  // true (any non-empty string)
y = Boolean(y);  // false (0 is falsy)
z = Boolean(z);  // false (empty string is falsy)
a = Boolean(a);  // false (undefined is falsy)

console.log(x, typeof x);  // true "boolean"
console.log(y, typeof y);  // false "boolean"
console.log(z, typeof z);  // false "boolean"
console.log(a, typeof a);  // false "boolean"
```

## 🔍 Understanding the Examples

### Main Example from index.js
```javascript
// Demonstrating all three conversion types
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);   // Try to convert to number → NaN
y = String(y);   // Keep as string → "pizza"
z = Boolean(z);  // Convert to boolean → true

console.log(x, typeof x);  // NaN "number"
console.log(y, typeof y);  // "pizza" "string"
console.log(z, typeof z);  // true "boolean"
```

**Key Observations:**
- Converting "pizza" to a number gives `NaN` (Not a Number)
- Converting "pizza" to string keeps it as "pizza" (already a string)
- Converting "pizza" to boolean gives `true` (non-empty string is truthy)javascript
let x = "Pizza";
let y = 0;
let z = "";
let a;  // undefined

x = Boolean(x);  // true (any non-empty string)
y = Boolean(y);  // false (0 is falsy)
z = Boolean(z);  // false (empty string is falsy)
a = Boolean(a);  // false (undefined is falsy)

console.log(x, typeof x);  // true "boolean"
console.log(y, typeof y);  // false "boolean"
console.log(z, typeof z);  // false "boolean"
console.log(a, typeof a);  // false "boolean"
```

## 📊 Conversion Results Table

### To Number

| Original Value | Result | Type    |
|---------------|--------|---------|
| `"42"`        | `42`   | number  |
| `"Pizza"`     | `Calculator with Type Conversion

```javascript
let age;

document.getElementById("mySubmit").onclick = function() {
    age = document.getElementById("age").value;
    console.log("Original age input:", age, "| Type:", typeof age);
    
    age = Number(age);  // Convert to number
    console.log("Converted age:", age, "| Type:", typeof age);
    
    age += 1;  // Now this adds correctly
    console.3: All Three Conversions

```javascript
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);   // NaN (can't convert "pizza" to number)
y = String(y);   // "pizza" (already a string)
z = Boolean(z);  // true (non-empty string is truthy)

console.log(x, typeof x);  // NaN "number"
console.log(y, typeof y);  // "pizza" "string"
console.log(z, typeof z);  // true "boolean"
```

### Example 4: Age Verification

```javascript
let age = window.prompt("How old are you?");
age = Number(age);  // Convert to number

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

### Example 5og(`Next year, you will be ${age} years old!`);
}
```

### Example 2: Understanding NaN (Not a Number)

```javascript
let value = "pizza";
let converted = Number(value);

console.log(converted);        // NaN
console.log(typeof converted); // "number" (NaN is still type "number"!)
console.log(isNaN(converted)); // true (checks if value is NaN)
```
6
### Example 3: All Three Conversionser  |
| `""`          | `0`    | number  |
| `true`        | `1`    | number  |
| `false`       | `0`    | number  |
| `undefined`   | `NaN`  | number  |
| `null`        | `0`    | number  |

### To Boolean (Falsy vs Truthy)

**Falsy Values (convert to `false`):**
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy Values (convert to `true`):**
- Any non-zero number
- Any non-empty string
- Objects and arrays

## 🔍 Detailed Examples

### Example 1: Age Verification

```javascript
let age = window.prompt("How old are you?");
age = Number(age);  // Convert to number

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

### Example 2: Checking for Empty Input

```javascript
let username = window.prompt("Enter your username:");

// Convert to boolean to check if empty
if (Boolean(username)) {
    console.log(`Welcome, ${username}!`);
} else {
    console.log("You didn't enter a username!");
}

// Shorter version (implicit conversion)
if (username) {
    console.log(`Welcome, ${username}!`);
} else {
    console.log("You didn't enter a username!");
}
```

### Example 3: String Concatenation vs Addition

```javascript
let num1 = "5";
let num2 = "3";

// Without conversion (concatenation)
console.log(num1 + num2);  // "53"

// With conversion (addition)
console.log(Number(num1) + Number(num2));  // 8
```

## 🎓 Real-World Use Cases

### Calculator Application
```javascript
let num1 = window.prompt("Enter first number:");
let num2 = window.prompt("Enter second number:");

// Must convert to numbers for math operations
num1 = Number(num1);
num2 = Number(num2);

let sum = num1 + num2;
console.log(`Sum: ${sum}`);
```

### Form Validation
```javascript
let email = document.getElementById("email").value;

// Check if email was entered
if (Boolean(email)) {
    console.log("Email submitted!");
} else {
    alert("Please enter your email");
}
```

## 📋 Practice Exercises

### Exercise 1: Simple Calculator
Create a calculator that asks for two numbers and displays their sum, difference, product, and quotient.

### Exercise 2: Temperature Converter
Ask for a temperature in Celsius and convert it to Fahrenheit. Remember to convert the input to a number!

### Exercise 3: Discount Calculator
Ask for a price and discount percentage, then calculate and display the final price.

### Exercise 4: Input Validator
Create a form that checks if all fields are filled using boolean conversion.

## 💡 Common Mistakes

1. **Forgetting to convert user input**
   ```javascript
   // ❌ Wrong - string concatenation
   let age = window.prompt("Age?");
   console.log(age + 1);  // "251" if user entered 25
   
   // ✅ Correct - numeric addition
   let age = window.prompt("Age?");
   age = Number(age);
   console.log(age + 1);  // 26
   ```

2. **Not checking for NaN**
   ```javascript
   let num = Number("abc");
   console.log(num + 5);  // NaN
   
   // Better approach
   if (isNaN(num)) {
       console.log("Invalid number!");
   }
   ```

3. **Assuming empty strings are falsy in all contexts**
   ```javascript
   Number("");  // 0 (not NaN!)
   Boolean("");  // false
   ```

## 🎯 Key Takeaways

- **User input is always a string** - convert it before doing math
- **`Number()`** converts values to numbers (returns `NaN` if impossible)
- **`String()`** converts any value to a string representation
- **`Boolean()`** converts values to true/false
- **`typeof`** operator checks the data type of a value
- **Empty strings and 0 are falsy** when converted to boolean
- **Most values are truthy** (non-zero numbers, non-empty strings)
- **Type conversion prevents bugs** especially with user input

## ⏭️ Next Lesson
[JavaScript CONSTANTS](../06-constants/) - Learn about values that never change!

## 📚 Additional Resources

- [MDN - Type Conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_conversion)
- [MDN - Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN - Boolean()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [MDN - typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

---

**Duration:** 5:40  
**Difficulty:** Beginner  
**Prerequisites:** Variables, user input