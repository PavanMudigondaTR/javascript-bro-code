# Learn JavaScript Strict Equality 🟰

## 📺 Video
[Learn JavaScript STRICT EQUALITY in 3 minutes!](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=18) (3:58)

## 📝 Description
Learn the difference between comparison operators and strict equality operators in JavaScript. Understand why comparing both values AND data types is important, especially when working with user input.

## 🎯 What You'll Learn

- Assignment operator (=)
- Comparison operator (==)
- Strict equality operator (===)
- Inequality operator (!=)
- Strict inequality operator (!==)
- Why strict equality matters
- Type coercion issues

## 🔤 The Three Types of Equality

### 1. Assignment Operator (=)
**Assigns a value to a variable**

```javascript
let pi = 3.14;  // Assigns 3.14 to pi
```

### 2. Comparison Operator (==)
**Compares values only (ignores data type)**

```javascript
const pi = 3.14;  // number

if (pi == "3.14") {  // Comparing number to string
    console.log("That is pi");  // This prints!
}
// true - values are equal, types ignored
```

### 3. Strict Equality Operator (===)
**Compares values AND data types**

```javascript
const pi = 3.14;  // number

if (pi === "3.14") {  // Comparing number to string
    console.log("That is pi");
} else {
    console.log("That is NOT pi");  // This prints!
}
// false - values equal but types different
```

## 📊 Comparison Table

| Comparison | == Result | === Result | Why? |
|------------|-----------|------------|------|
| `3.14 == "3.14"` | true | false | Different types |
| `3.14 === 3.14` | true | true | Same value & type |
| `0 == false` | true | false | Different types |
| `0 === false` | false | false | Different types |
| `"" == false` | true | false | Different types |
| `null == undefined` | true | false | Different types |

## 💻 Code Examples

### Example 1: Number vs String

```javascript
const PI = 3.14;

// Comparison operator (==)
if (PI == "3.14") {
    console.log("That is pi");  // Prints!
}

// Strict equality operator (===)
if (PI === "3.14") {
    console.log("That is pi");
} else {
    console.log("That is NOT pi");  // Prints!
}
```

### Example 2: User Input Validation

```javascript
// User input is always a string!
let age = window.prompt("Enter your age:");  // Returns string

// This works but not type-safe
if (age == 18) {
    console.log("You are 18");  // Works for "18" (string)
}

// This is more reliable
if (age === "18") {  // Comparing string to string
    console.log("You are 18");
}

// Best practice: Convert then compare
age = Number(age);
if (age === 18) {  // Comparing number to number
    console.log("You are 18");
}
```

### Example 3: Type Coercion Issues

```javascript
// Unexpected comparisons with ==
console.log(0 == false);      // true (type coercion)
console.log("" == false);     // true (type coercion)
console.log(null == undefined); // true (type coercion)

// Strict equality avoids surprises
console.log(0 === false);     // false (different types)
console.log("" === false);    // false (different types)
console.log(null === undefined); // false (different types)
```

## ❌ Inequality Operators

### Inequality Operator (!=)
**Values are not equal (ignores type)**

```javascript
const PI = 3.14;

if (PI != "3.14") {
    console.log("That is NOT pi");
} else {
    console.log("That is pi");  // Prints! (values are equal)
}
```

### Strict Inequality Operator (!==)
**Values OR types are different**

```javascript
const PI = 3.14;

if (PI !== "3.14") {
    console.log("That is NOT pi");  // Prints! (types different)
} else {
    console.log("That is pi");
}
```

## 🔍 Complete Comparison

```javascript
const num = 5;
const str = "5";

// Comparison (==) - only values
console.log(num == str);   // true
console.log(num != str);   // false

// Strict equality (===) - values AND types
console.log(num === str);  // false
console.log(num !== str);  // true
```

## 💡 Why Strict Equality Matters

### Problem with == (Type Coercion)

```javascript
// Unexpected behaviors with ==
if (0 == false) { }       // true - might not be intended
if ("" == 0) { }          // true - confusing
if ("0" == false) { }     // true - unexpected
if (null == undefined) { } // true - different types!

// ✅ Use === to avoid confusion
if (0 === false) { }      // false - clear
if ("" === 0) { }         // false - clear
if ("0" === false) { }    // false - clear
if (null === undefined) { } // false - clear
```

### User Input Validation

```javascript
let userInput = window.prompt("Enter 'yes' or 'no':");

// ❌ Potential issues
if (userInput == "yes") { }  // Works but not type-safe

// ✅ Better - explicit type comparison
if (userInput === "yes") { }  // String compared to string
```

## 📋 Practice Exercises

### Exercise 1: Type Checking
```javascript
let value1 = 10;
let value2 = "10";
// Compare using both == and ===, explain results
```

### Exercise 2: User Age Validation
```javascript
let age = window.prompt("Enter your age:");
// Convert to number and use strict equality to check if 21
```

### Exercise 3: Boolean Comparisons
```javascript
let isActive = true;
// Test: isActive == 1 vs isActive === 1
```

### Exercise 4: Null vs Undefined
```javascript
let value1 = null;
let value2 = undefined;
// Compare using both == and !==
```

## 🚨 Common Mistakes

### Mistake 1: Using = Instead of ==
```javascript
// ❌ Assignment, not comparison
if (age = 18) { }  // Sets age to 18, always true!

// ✅ Comparison
if (age == 18) { }
if (age === 18) { }  // Even better
```

### Mistake 2: Not Converting User Input
```javascript
let age = window.prompt("Age?");  // Returns string

// ❌ Comparing string to number with ==
if (age == 18) { }  // Works but not type-safe

// ✅ Convert first, then strict equality
age = Number(age);
if (age === 18) { }
```

### Mistake 3: Trusting Type Coercion
```javascript
// ❌ Relies on type coercion
if (userInput == true) { }

// ✅ Explicit comparison
if (userInput === "true") { }
// Or convert to boolean first
if (Boolean(userInput) === true) { }
```

## 💡 Best Practices

### 1. Default to Strict Equality
```javascript
// ✅ Always use === by default
if (value === 10) { }
if (name === "John") { }
```

### 2. Convert Types Explicitly
```javascript
// ✅ Convert then compare
let num = Number(userInput);
if (num === 42) { }
```

### 3. Use Strict Inequality Too
```javascript
// ✅ Use !== instead of !=
if (status !== "active") { }
if (count !== 0) { }
```

## 🎯 Key Takeaways

- **=** assigns values (assignment operator)
- **==** compares values only (loose equality)
- **===** compares values AND types (strict equality)
- **!=** checks if values are not equal (loose)
- **!==** checks if values OR types differ (strict)
- **Always use ===** unless you specifically need type coercion
- **User input is always strings** - convert before comparing
- **Strict equality prevents bugs** from unexpected type coercion
- **Type coercion** can cause unexpected results with ==
- **Explicit is better than implicit** - be clear about types

## ⏭️ Next Lesson
[JavaScript WHILE LOOPS](../19-while-loops/)

---

**Duration:** 3:58  
**Difficulty:** Beginner  
**Category:** Operators & Comparison
