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
let pi = 3.14159;
pi = 420.69;  // This works but is wrong!

// Using const (cannot be changed)
const PI = 3.14159;
PI = 420.69;  // TypeError: Assignment to constant variable
```

### Circle Circumference Calculator

```javascript
// Define constants
const PI = 3.14159;

// Get user input
let radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);

// Calculate circumference
let circumference = 2 * PI * radius;

console.log(`Circumference: ${circumference}`);
```

### Complete Working Example

```javascript
const PI = 3.14159;
let radius;
let circumference;

// Get radius from user
radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);

// Calculate circumference (2 * π * r)
circumference = 2 * PI * radius;

console.log(`The circumference is: ${circumference}`);
```

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
let x = price * 0.07;

// ✅ Clear and readable
const TAX_RATE = 0.07;
let tax = price * TAX_RATE;
```

### 3. **Security**
```javascript
// Prevents malicious code from changing critical values
const API_KEY = "abc123xyz";
const MAX_LOGIN_ATTEMPTS = 3;
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

## 📋 Practice Exercises

### Exercise 1: Temperature Converter
Create a program that converts Fahrenheit to Celsius using the conversion formula as a constant.

### Exercise 2: Area Calculator
Calculate the area of a circle using PI as a constant. Formula: π * r²

### Exercise 3: Sales Tax Calculator
Calculate total price with tax using TAX_RATE as a constant.

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