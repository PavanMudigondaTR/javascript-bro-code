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
- Try not to repeat yourself in programming

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
    <label for="purchaseAmount">Enter purchase amount:</label>
    <input id="purchaseAmount" name="purchaseAmount" type="text">
    <button type="button" id="submitBtn">Submit</button>
    <p id="result"></p>
    <script src="index.js"></script>
</body>
</html>
```

## 💻 Syntax

```javascript
// ternary operator = a shortcut to if() and else() statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse
```

**Think of it as asking a question:**  
You write a condition, then add a question mark (?) - kind of like you're asking a question.  
"Is this condition true? If yes, do this. If no, do that."

## 📝 Basic Examples

### Example 1: Age Check

**Traditional if-else:**
```javascript
let age = 21;
let message;

if (age >= 18) {
    message = "You are an adult"
} else {
    message = "You are a minor"
}
```

**Ternary operator (more condensed and easier to read):**
```javascript
let age = 21;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);  // "You are an adult"
```

**Why use ternary?** With programming we try not to repeat ourselves if we don't have to. Here we're assigning `message` to be either this string or that one. The ternary operator is more condensed.

### Example 2: Time-based Greeting

```javascript
let time = 16;  // 4 PM (24-hour format)
let greeting = time < 12 ? "Good Morning !" : "Good Afternoon !";
console.log(greeting);  // "Good Afternoon !"
```

If time was 9: "Good Morning !"

### Example 3: Student Status (Boolean Variables)

```javascript
let isStudent = false;
let message = isStudent ? "You are a student !" : "You are not a student !";
console.log(message);  // "You are not a student !"
```

**Easy to read with Boolean variables:** You just write the Boolean variable then add a question mark.

### Example 4: Purchase Discount Challenge

```javascript
let purchaseAmount = 101;
let discount = (purchaseAmount >= 100) ? 10 : 0;
console.log(`discount: ${discount}`);  // "discount: 10"
console.log(`You total is: ${purchaseAmount - (purchaseAmount * discount)/100}`);
// "You total is: 90.9"
```

**Logic:** If someone's purchase amount is over $100, they get a 10% discount. Otherwise, no discount.

### Example 5: Complete Interactive Implementation

```javascript
purchaseAmount = document.getElementById("purchaseAmount")
submitBtn = document.getElementById("submitBtn")
result = document.getElementById("result")

submitBtn.onclick = function() {
    let amount = Number(purchaseAmount.value);
    let discount = (amount >= 100) ? 10 : 0;
    result.textContent = `Discount: ${discount}%. Your total is: $${amount - (amount * discount)/100}`;
}
```

**How it works:**
1. Get the purchase amount from the input field
2. Convert to a number
3. Use ternary operator: 10% discount if ≥ $100, otherwise 0%
4. Calculate final price and display result

## 🔄 Comparison: If-Else vs Ternary

### If-Else Statement
```javascript
let message;
if (isOnline) {
    message = "Online";
} else {
    message = "Offline";
}
```

### Ternary Operator (More Concise)
```javascript
let message = isOnline ? "Online" : "Offline";
```

**It's a shortcut if you choose to use it.** The ternary is more concise and easier to read when:
- Assigning a variable based on a condition
- Choosing between two values
- Condition is simple and clear
- You're trying not to repeat yourself

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
