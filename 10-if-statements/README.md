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
- Comparison operators
- Creating conditional logic

## 💻 Code Examples

### Basic If Statement

```javascript
let age = 25;

if (age >= 18) {
    console.log("You are old enough to enter this site");
}
```

### If-Else Statement

```javascript
let age = 13;

if (age >= 18) {
    console.log("You are old enough to enter this site");
} else {
    console.log("You must be 18+ to enter this site");
}
```

### Else If (Multiple Conditions)

```javascript
let time = 14;  // 24-hour format

if (time < 12) {
    console.log("Good morning!");
} else if (time < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```

### Boolean Conditions

```javascript
let isStudent = true;

if (isStudent) {
    console.log("You are a student");
} else {
    console.log("You are not a student");
}
```

### Nested If Statements

```javascript
let age = 20;
let hasLicense = true;

if (age >= 16) {
    console.log("You are old enough to drive");
    
    if (hasLicense) {
        console.log("You have your license!");
    } else {
        console.log("You do not have your license yet");
    }
} else {
    console.log("You must be at least 16 years old");
}
```

## 🔍 Comparison Operators

```javascript
age >= 18   // Greater than or equal to
age > 18    // Greater than
age <= 18   // Less than or equal to
age < 18    // Less than
age == 18   // Equal to (loose comparison)
age === 18  // Equal to (strict comparison)
age != 18   // Not equal to (loose)
age !== 18  // Not equal to (strict)
```

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

- If statements execute code **only if condition is true**
- Else provides **alternative code** when condition is false
- Else if allows **multiple conditions** to be checked
- Conditions evaluate to **true or false**
- **Boolean variables** can be used directly in conditions
- **Nested if statements** allow complex decision-making
- Use **comparison operators** to create conditions
- Proper **indentation** makes code readable

## ⏭️ Next Lesson
[JavaScript CHECKED PROPERTY](../11-checked-property/)

---

**Duration:** 15:58  
**Difficulty:** Beginner  
**Category:** Control Flow
