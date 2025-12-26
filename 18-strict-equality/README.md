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
- When to use strict vs loose equality

## 🔧 HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css"><>
</head>
<body>
    <script src="index.js"></script>
</body>
</html>
```

**Note:** This chapter focuses on JavaScript console examples. There is no interactive UI.

## 💻 Complete Code Example (from index.js)

```javascript
//      =  assignment operator
//     ==  comparison operator (compare if values are equal)
//    === strict equality operator (compare if values & datatype are equal)
//   !=   inequality operator
//   !=== strict inequality operator

const PI = 3.14; // number

// Example 1: Comparison operator (==) - doesn't validate data type
if(PI == "3.14"){ // "3.14" is string here
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi")
}
// Output: "That is Pi" (even though types are different!)

// Example 2: Strict equality operator (===) - validates data type
if(PI === "3.14"){ // "3.14" is string here
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi")
}
// Output: "That is NOT Pi" (types are different)

// Example 3: Strict inequality operator (!==)
if(PI !== "3.14"){ // "3.14" is string here
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi")
}
// Output: "That is NOT Pi" (types are different)
```

## 🔤 The Three Types of Equality

**From transcript:** "Let me make a few important distinctions: a single equal sign is the assignment operator you usually see it when you assign a value to a variable. The comparison operator (two equal signs) is used to compare two values to see if they're equal. Now the strict equality operator has a whopping three equal signs - it not only compares if two values are equal but if they have the same data type as well."

### 1. Assignment Operator (=)
**Assigns a value to a variable**

```javascript
let pi = 3.14;  // Assigns 3.14 to pi
const PI = 3.14; // Assigns 3.14 to PI (from actual code)
```

### 2. Comparison Operator (==)
**Compares values only (ignores data type)**

**From transcript:** "We don't care about the data type, we only care about the value. Are the values equal?"

```javascript
const PI = 3.14;  // number

if (PI == "3.14") {  // Comparing number to string
    console.log("That is Pi");  // This prints!
}
// true - values are equal, types ignored
```

**From actual code:** Data type is NOT validated with `==`. Even though PI is a number and "3.14" is a string, JavaScript says they're equal.

### 3. Strict Equality Operator (===)
**Compares values AND data types**

**From transcript:** "With the strict equality operator not only do we compare the values but we also compare the data types as well. These values are both 3.14 but this one is a number data type and we're comparing it to a string so they don't match technically."

```javascript
const PI = 3.14;  // number

if (PI === "3.14") {  // Comparing number to string
    console.log("That is Pi");
} else {
    console.log("That is NOT Pi");  // This prints!
}
// false - values equal but types different
```

**From actual code:** Data type IS validated with `===`. The number 3.14 does not strictly equal the string "3.14".

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

### Example 1: Number vs String (from actual code)

**From transcript:** "Is the number 3.14 equal to the string 3.14? Well according to JavaScript that is Pi. That's because we're using the comparison operator."

```javascript
const PI = 3.14; // number

// Comparison operator (==) - doesn't validate data type
if (PI == "3.14") {
    console.log("That is Pi");  // Prints! (even though types differ)
}

// Strict equality operator (===) - validates data type
if (PI === "3.14") {
    console.log("That is Pi");
} else {
    console.log("That is NOT Pi");  // Prints! (types are different)
}
```

**From transcript:** "If we were strictly comparing the number 3.14 to the number 3.14 well then we have a match - that is Pi."

```javascript
const PI = 3.14; // number

if (PI === 3.14) {  // Comparing number to number
    console.log("That is Pi");  // Prints! (same value AND type)
}
```

### Example 2: User Input Validation

**From transcript:** "One case where this is pretty helpful is when you accept user input because user input tends to be a string data type and then just as an extra measure you can use the strict equality operator and then be sure that the value is a number data type."

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

**From transcript:** "There's also the inequality operator. It will return true if two values are not equal."

```javascript
const PI = 3.14; // number

if (PI != "3.14") {  // Is number 3.14 not equal to string "3.14"?
    console.log("That is NOT Pi");
} else {
    console.log("That is Pi");  // Prints! (values are equal)
}
```

**From transcript:** "Using the inequality operator these values are still the same. The inequality operator will return false."

### Strict Inequality Operator (!==)
**Values OR types are different**

**From transcript:** "An exclamation point and two equal signs. Are the values or the data type different?"

```javascript
const PI = 3.14; // number

if (PI !== "3.14") {  // Comparing number to string
    console.log("That is NOT Pi");  // Prints! (types different)
} else {
    console.log("That is Pi");
}
```

**From transcript:** "That is NOT Pi. They have the same values but the data type is different."

**Testing with matching types:**

```javascript
const PI = "3.14"; // string (from transcript example)

if (PI !== "3.14") {
    console.log("That is NOT Pi");
} else {
    console.log("That is Pi");  // Prints! (same value AND type)
}
```

**From transcript:** "If I turned my variable Pi into a string, well that is Pi now. The string 3.14 stored within Pi does equal the string 3.14 so this condition turns out to be false so we execute the else statement."

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

**From transcript:** "It might take you a little bit of time to get used to this and that's okay, it is a little odd. But just in case you see these in the future you'll at least be familiar with them. From now on we will try and use the strict equality operator if we can."

- **=** assigns values (assignment operator)
- **==** compares values only ("we don't care about the data type" - transcript)
- **===** compares values AND types ("compares if two values are equal but if they have the same data type as well" - transcript)
- **!=** checks if values are not equal (loose)
- **!==** checks if values OR types differ (strict)
- **Always use ===** unless you specifically need type coercion
- **User input is always strings** - "user input tends to be a string data type" (transcript)
- **Strict equality prevents bugs** from unexpected type coercion
- **Type coercion** can cause unexpected results with ==
- **Explicit is better than implicit** - convert types, then compare strictly
- **From now on, try to use strict equality operator** (transcript recommendation)

## ⏭️ Next Lesson
[JavaScript WHILE LOOPS](../19-while-loops/)

---

**Duration:** 3:58  
**Difficulty:** Beginner  
**Category:** Operators & Comparison
