# JavaScript Ternary Operator ❓

## 📺 Video
[JavaScript TERNARY OPERATOR in 6 minutes!](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=12) (6:46)

## 📝 Description
The ternary operator is a shortcut for if-else statements. It helps you write cleaner, more concise code when assigning variables based on conditions. Think of it as asking a question with your code.

## 🎯 What You'll Learn

- Ternary operator syntax
- Shorthand for if-else statements
- Assigning variables based on conditions
- Writing cleaner, more concise code
- When to use ternary vs if-else

## 💻 Syntax

```javascript
condition ? codeIfTrue : codeIfFalse
```

Like asking a question: "Is this true? If yes, do this. If no, do that."

## 📝 Basic Examples

### Example 1: Age Check

**Traditional if-else:**
```javascript
let age = 21;
let message;

if (age >= 18) {
    message = "You're an adult";
} else {
    message = "You're a minor";
}
```

**Ternary operator:**
```javascript
let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor";
```

### Example 2: Time-based Greeting

**Traditional if-else:**
```javascript
let time = 16;
let greeting;

if (time < 12) {
    greeting = "Good morning";
} else {
    greeting = "Good afternoon";
}
```

**Ternary operator:**
```javascript
let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
```

### Example 3: Win/Loss Message

```javascript
let isWinner = true;
let message = isWinner ? "YOU WIN!" : "You lose :(";
console.log(message);  // "YOU WIN!"
```

## 🔄 Comparison: If-Else vs Ternary

### If-Else Statement
```javascript
let status;
if (isOnline) {
    status = "Online";
} else {
    status = "Offline";
}
```

### Ternary Operator
```javascript
let status = isOnline ? "Online" : "Offline";
```

**The ternary is more concise when:**
- Assigning a variable
- Choosing between two values
- Condition is simple and clear

## 📋 More Examples

### Purchase Eligibility
```javascript
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 20 : 0;
console.log(`Discount: ${discount}%`);
```

### Even or Odd
```javascript
let num = 7;
let type = num % 2 === 0 ? "even" : "odd";
console.log(`${num} is ${type}`);
```

### Pass/Fail
```javascript
let score = 75;
let result = score >= 60 ? "Pass" : "Fail";
console.log(result);
```

### Price with Tax
```javascript
let isMember = true;
let price = 100;
let finalPrice = isMember ? price * 0.9 : price;  // 10% discount for members
```

## 🎯 Nested Ternary (Use Sparingly)

```javascript
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
```

**Warning:** Nested ternaries can become hard to read. Use if-else for complex logic!

## ✅ When to Use Ternary

**Good Use Cases:**
- Simple condition with two outcomes
- Assigning variables based on condition
- Short, readable expressions
- JSX/React rendering

```javascript
// ✅ Good: Simple and clear
let access = age >= 18 ? "granted" : "denied";

// ✅ Good: Concise value assignment
let price = isMember ? 9.99 : 14.99;
```

## ❌ When NOT to Use Ternary

**Bad Use Cases:**
- Complex conditions
- Multiple lines of code to execute
- Deeply nested ternaries

```javascript
// ❌ Bad: Too complex
let result = (age >= 18 && hasLicense && !isSuspended) 
    ? (hasVehicle ? "Can drive own car" : "Can rent a car") 
    : "Cannot drive";

// ✅ Better: Use if-else
let result;
if (age >= 18 && hasLicense && !isSuspended) {
    result = hasVehicle ? "Can drive own car" : "Can rent a car";
} else {
    result = "Cannot drive";
}
```

## 📋 Practice Exercises

### Exercise 1: Temperature
```javascript
let temp = 25;
// Use ternary: "Hot" if >= 30, "Cool" if < 30
```

### Exercise 2: Login Status
```javascript
let isLoggedIn = false;
// Use ternary: "Welcome back!" or "Please log in"
```

### Exercise 3: Stock Status
```javascript
let quantity = 5;
// Use ternary: "In Stock" if > 0, "Out of Stock" if 0
```

### Exercise 4: Discount Eligible
```javascript
let cartTotal = 150;
// Use ternary: true if >= 100, false otherwise
```

## 🎯 Key Takeaways

- **Ternary syntax:** `condition ? true : false`
- **Shortcut for if-else** when assigning variables
- More **concise and readable** for simple conditions
- **Question-like syntax:** "Is this true? Yes : No"
- Don't overuse - **if-else is better** for complex logic
- Perfect for **React/JSX** conditional rendering
- **Returns a value** (unlike if-else statement)

## 💡 Pro Tips

1. Use ternary for **simple assignments**
2. Use if-else for **complex logic**
3. Don't nest too deeply (max 1-2 levels)
4. Add spaces for readability
5. Use parentheses for complex conditions

## ⏭️ Next Lesson
[JavaScript SWITCHES](../13-switches/)

---

**Duration:** 6:46  
**Difficulty:** Beginner  
**Category:** Operators & Control Flow
