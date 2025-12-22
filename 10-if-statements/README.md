# If Statements in JavaScript 🤔

## 📺 Video
[If statements in JavaScript are easy](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=10) (15:58)

## 📝 Description
Learn how to make decisions in your code using if statements. Execute different code based on conditions, create branching logic, and build programs that respond dynamically to different inputs.

## 🎯 What You'll Learn

- Basic if statement syntax
- if-else statements
- else if for multiple conditions
- Nested if statements
- Working with boolean variables
- Comparison operators (==, >=, <=, <, >)
- Creating conditional logic
- Order of conditions matters

## 🔧 HTML Structure

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
    <label for="ageInput">Enter your age:</label>
    <input type="text" id="ageInput">
    <button type"button" id="submitBtn">Submit</button>
    <p id="resultElement"></p>
    <script src="index.js"></script>
</body>
</html>
```

## 🎨 CSS Styling

```css
#ageLabel{
    font-size: x-large;
}
```

## 💻 Code Examples

### Example 1: Basic If Statement

```javascript
let age = 25;

if (age >= 18) {
    console.log("you are old enough to enter this site");
}
```
**Explanation:** If condition is true, execute code inside curly braces. If not true, skip over it entirely.

### Example 2: If-Else Statement (Time Greeting)

```javascript
let time = 14;  // Military time (24-hour format)

if (time < 12) {
    console.log("Good Morning!");
} else {
    console.log("Good Afternoon!");
}
```
**Explanation:** Like a fork in the road - which path are we going to take? If condition is true, do this. Else if not, do this instead.

### Example 3: Boolean Conditions

```javascript
let isStudent = false;

if (isStudent) {
    console.log("you are a student");
} else {
    console.log("you are not a student");
}
```
**Explanation:** With Boolean variables, place the variable directly in the condition. It evaluates to true or false.

### Example 4: Nested If Statements

```javascript
let age = 25;
let hasLicense = false;

if (age >= 16) {
    console.log("you are old enough to drive");
    
    if (hasLicense) {
        console.log("you have a license");
    } else {
        console.log("you don't have a license");
    }
} else {
    console.log("you must be 16 plus to have a license");
}
```
**Explanation:** Pay attention to indentation! If outer condition is false, skip everything inside entirely. If true, enter and check the nested if statement.

### Example 5: Complete Interactive Age Verification

```javascript
const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");
const resultElement = document.getElementById("resultElement");

submitBtn.onclick = function() {
    let age = Number(ageInput.value);

    if (age >= 100) {
        resultElement.textContent = "you are too old to enter this site";
    } else if (age == 0) {
        resultElement.textContent = "your can not enter, you are just born";
    } else if (age < 0) {
        resultElement.textContent = "your age can't be below 0";
    } else if (age >= 18) {
        resultElement.textContent = "you are old enough to enter this site";
    } else {
        resultElement.textContent = "you must be 18+ to enter this site";
    }
}
```

**How it works:**
1. Get references to input, button, and result paragraph
2. When button is clicked, execute function
3. Get value from text box (it's a string)
4. Use `Number()` to typecast it to a number
5. Check conditions from most specific to least specific

## ⚠️ Important: Order of Conditions Matters!

```javascript
// ❌ BAD - Wrong order
if (age >= 18) {  // This executes first for age 101!
    console.log("old enough");
} else if (age >= 100) {  // This never executes!
    console.log("too old");
}

// ✅ GOOD - Correct order
if (age >= 100) {  // Check most specific first
    console.log("too old");
} else if (age >= 18) {  // Then less specific
    console.log("old enough");
}
```

**Why?** We start at the top and work our way down. Once a condition is true, we execute that clause and skip everything else that comes after, even if other conditions are also true!

## 🔍 Comparison Operators

```javascript
// Two equal signs (==) for comparison
age == 18   // Equal to (comparison operator)
age = 18    // Assignment operator (NOT for comparison!)

age >= 18   // Greater than or equal to
age > 18    // Greater than
age <= 18   // Less than or equal to
age < 18    // Less than
age != 18   // Not equal to
```

**Important:** Use `==` (two equal signs) to check if two values are equal. One equal sign `=` is for assignment only!

## 📊 Control Flow Diagram

```
START
  ↓
[Condition?] → false → [else code]
  ↓ true               ↓
[if code]              ↓
  ↓                    ↓
END ←------------------┘
```

## 📋 Practice Exercises

### Exercise 1: Grade Checker
```javascript
let grade = 85;
// Display "Pass" if >= 60, "Fail" if < 60
```

### Exercise 2: Temperature Advisory
```javascript
let temp = 30;
// Hot (>= 30), Warm (20-29), Cool (10-19), Cold (< 10)
```

### Exercise 3: Login System
```javascript
let username = "admin";
let password = "1234";
// Check if both are correct
```

### Exercise 4: Discount Calculator
```javascript
let totalPrice = 150;
// 20% off if >= 100, 10% off if >= 50, no discount otherwise
```

## 💡 Best Practices

### ✅ DO
```javascript
// Clear, readable conditions
if (age >= 18) {
    console.log("Adult");
}

// Use brackets even for single statements
if (isStudent) {
    console.log("Student");
}
```

### ❌ DON'T
```javascript
// Avoid redundant comparisons
if (isStudent == true) {  // Bad
if (isStudent) {          // Good

// Avoid complex nested conditions
if (a) { if (b) { if (c) { ... } } }
```

## 🔄 Common Patterns

### Range Checking
```javascript
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}
```

### Multiple Conditions (AND)
```javascript
if (age >= 18 && hasLicense) {
    console.log("Can drive");
}
```

### Multiple Conditions (OR)
```javascript
if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
}
```

## 🎯 Key Takeaways

- **If statement:** If condition is true, execute code. If not true, skip over it entirely
- **Else clause:** Provides alternative code when if condition is false ("fork in the road")
- **Else if:** Allows multiple conditions before reaching else statement
- **Order matters:** Start at top, work down. Once a condition is true, skip everything after
- **Check most specific conditions first**, then less specific ones
- **Boolean variables** can be used directly in conditions (evaluates to true/false)
- **Use `==` for comparison**, not `=` (which is assignment)
- **Nested if statements:** Pay attention to indentation and curly braces
- **Text box values** come as strings - use `Number()` to convert to numbers
- Once one clause executes, it's not necessary to check remaining conditions
- **Nested if statements** allow complex decision-making
- Use **comparison operators** to create conditions
- Proper **indentation** makes code readable

## ⏭️ Next Lesson
[JavaScript CHECKED PROPERTY](../11-checked-property/)

---

**Duration:** 15:58  
**Difficulty:** Beginner  
**Category:** Control Flow
