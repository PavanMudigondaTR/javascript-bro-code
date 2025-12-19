# JavaScript Constants 🚫

## 📺 Video
[JavaScript CONSTANTS are easy](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=6) (7:42)

## 📝 Description
Learn about constants in JavaScript - variables that cannot be changed once assigned. Understand why constants are important for protecting data integrity and preventing accidental or malicious changes to critical values in your programs.

## 🎯 What You'll Learn

### Core Concepts
- What constants are and why they're important
- Difference between `let` and `const`
- Naming conventions for constants
- Protecting values from modification
- When to use constants vs variables

### Practical Application
- Creating a circle circumference calculator
- Using mathematical constants (PI)
- Type safety and data protection

## 💻 Code Examples

### Basic Constant Declaration

```javascript
// Using let (can be changed)
let PI = 3.14159;
PI = 420.69;  // This works but is wrong!

// Using const (cannot be changed)
const PI = 3.14159;
PI = 420.69;  // TypeError: Assignment to constant variable
```

### Circle Circumference Calculator

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
    <h1 id="myH1">Enter the radius of the circle</h1>
    <label for="radiusInput">Radius:</label>
    <input type="text" id="radiusInput">
    <button type="button" id="submitButton">Submit</button>
    <h4 id="myH3">Circumference: </h4>
    <script src="index.js"></script>
</body>
</html>
```

**JavaScript:**
```javascript
let circumference;
let PI = 3.14159;

document.getElementById("submitButton").onclick = function() {
    radius = document.getElementById("radiusInput").value;
    console.log(`radius: ${radius}`);
    
    radius = Number(radius);  // Convert to number
    circumference = 2 * PI * radius;
    
    console.log(`circumference: ${circumference}`);
    document.getElementById("myH3").textContent = "Circumference: " + circumference + "cm";
}
```

**Note:** In this example, PI should be declared as `const PI = 3.14159` to prevent accidental changes!

## 📋 Naming Conventions

### Constants with Primitive Types
```javascript
// ✅ UPPERCASE for primitive constants (numbers, booleans)
const PI = 3.14159;
const MAX_USERS = 100;
const IS_ADMIN = true;
const TAX_RATE = 0.07;
```

### Constants with Reference Types
```javascript
// ✅ camelCase for strings and objects (typically)
const appName = "My Application";
const config = { theme: "dark" };
```

## 🔍 Why Use Constants?

### 1. **Prevent Accidental Changes**
```javascript
const DAYS_IN_WEEK = 7;
// Later in code...
// DAYS_IN_WEEK = 8;  // Error! Prevents mistakes
```

### 2. **Self-Documenting Code**
```javascript
// ❌ Hard to understand
let radius = 5;
let result = 2 * 3.14159 * radius;

// ✅ Clear and readable
const PI = 3.14159;
let radius = 5;
let circumference = 2 * PI * radius;
```

### 3. **The Problem with Using let**
```javascript
// Current implementation (not ideal)
let PI = 3.14159;
let circumference;
let radius;

document.getElementById("submitButton").onclick = function() {
    radius = document.getElementById("radiusInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = "Circumference: " + circumference + "cm";
}

// Problem: PI can be accidentally changed!
PI = 100;  // No error, but mathematically wrong!
```

// ✅ Good naming
const PI = 3.14159;
```

### 3. **Using let Instead of const for Fixed Values**
```javascript
// ❌ Current example uses let (can be changed)
let PI = 3.14159;
PI = 100;  // Oops! No error, but wrong

// ✅ Should use const (cannot be changed)
const PI = 3.14159;
// PI = 100;  // TypeError: Assignment to constant variabl PI * radius;
    document.getElementById("myH3").textContent = "Circumference: " + circumference + "cm";
}

// PI = 100;  // TypeError: Assignment to constant variable
```

## 🚨 Common Mistakes

### 1. **Trying to Reassign Constants**
```javascript
const PI = 3.14159;
PI = 3.14;  // ❌ TypeError: Assignment to constant variable
```

### 2. **Not Using Proper Naming**
```javascript
// ❌ Poor naming for constants
const pi = 3.14159;  // Should be uppercase for numbers
const APPNAME = "MyApp";  // Should be camelCase for strings
```

### 3. **Using const for Values That Change**
```javascript
// ❌ Wrong - age will change
const age = 25;
age = 26;  // Error!

// ✅ Correct - use let
let age = 25;
age = 26;  // Works fine
```

## 📊 let vs const Comparison

| Feature | let | const |
|---------|-----|-------|
| Can reassign | ✅ Yes | ❌ No |
| Must initialize | ❌ No | ✅ Yes |
| Block scoped | ✅ Yes | ✅ Yes |
| Best for | Changing values | Fixed values |

## 📋 Practice EFix the Example Code
Update the current code to use `const` for PI instead of `let`:
```javascript
// Change this:
let PI = 3.14159;

// To this:
const PI = 3.14159;
```

### Exercise 2: Area Calculator
Calculate the area of a circle using PI as a constant. Formula: π * r²
```javascript
const PI = 3.14159;
let radius;
let area;

document.getElementById("submitButton").onclick = function() {
    radius = document.getElementById("radiusInput").value;
    radius = Number(radius);
    area = PI * radius * radius;  // or PI * radius ** 2
    console.log(`Area: ${area}`);
}
```

### Exercise 3: Multiple Mathematical Constants
```javascript
const PI = 3.14159;
const E = 2.71828;  // Euler's number
const GOLDEN_RATIO = 1.61803;
```

### Exercise 4: Sales Tax Calculator
Calculate total price with tax using TAX_RATE as a constant.
```javascript
const TAX_RATE = 0.07;
let price = 100;
let total = price + (price * TAX_RATE);
console.log(`Total with tax: $${total}`);
```
### Exercise 4: Time Converter
Convert hours to seconds using constants for MINUTES_PER_HOUR and SECONDS_PER_MINUTE.

## 💡 Best Practices

1. **Use const by default** - Only use `let` when you know the value will change
2. **UPPERCASE primitive constants** - Numbers and booleans
3. **camelCase reference types** - Strings, objects, arrays
4. **Group related constants** - Keep them organized at the top of files
5. **Meaningful names** - Make it clear what the constant represents

## 🎯 Key Takeaways

- **Constants cannot be reassigned** after initial assignment
- **Use `const` for protection** against accidental or malicious changes
- **UPPERCASE naming** for primitive type constants (numbers, booleans)
- **camelCase naming** for reference type constants (strings, objects)
- **Better code quality** - Makes code more readable and maintainable
- **Type safety** - Prevents runtime errors from value changes
- **Default to const** - Use `let` only when you need to reassign

## ⏭️ Next Lesson
[JavaScript COUNTER PROGRAM](../07-counter-program/) - Build a practical counter with increment, decrement, and reset!

## 📚 Additional Resources

- [MDN - const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [JavaScript Naming Conventions](https://www.robinwieruch.de/javascript-naming-conventions/)

---

**Duration:** 7:42  
**Difficulty:** Beginner  
**Prerequisites:** Variables, data types