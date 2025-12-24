# Learn JavaScript While Loops 🔁

## 📺 Video
[Learn JavaScript WHILE LOOPS in 8 minutes!](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=19) (8:12)

## 📝 Description
While loops repeat code while a condition is true. Learn how to create loops that continue indefinitely until a specific condition is met, validate user input, and avoid common pitfalls like infinite loops.

## 🎯 What You'll Learn

- While loop syntax and structure
- Creating loops that repeat until a condition changes
- Input validation with while loops
- Avoiding infinite loops
- When to use while vs for loops
- Break and continue statements

## 💻 Basic While Loop Syntax

```javascript
while (condition) {
    // Code to repeat while condition is true
}
```

**How it works:**
1. Check if condition is true
2. If true, execute code block
3. Repeat from step 1
4. If false, skip loop and continue

## 📝 Simple Example

### Without While Loop
```javascript
let username = "";

if (username === "") {
    console.log("You didn't enter your name");
} else {
    console.log(`Hello ${username}`);
}
// Runs once, no retry if empty
```

### With While Loop
```javascript
let username = "";

while (username === "") {
    username = window.prompt("Enter your name:");
}

console.log(`Hello ${username}`);
// Keeps asking until user enters something
```

## 💡 Practical Examples

### Example 1: Basic Username Input Validation

```javascript
let userName = "";

while (userName === "" || userName === null) {
    userName = window.prompt("Enter your name:");
}

console.log(`Hello ${userName}!`);
```

**How it works:**
- Loop continues while username is empty OR null
- Keeps prompting until valid input
- Prevents empty submissions

### Example 2: Do-While Alternative

```javascript
let userName = "";

do {
    userName = window.prompt("Enter your name:");
} while (userName === "" || userName === null);

console.log(`Hello ${userName}!`);
```

**Difference:**
- **While loop**: Checks condition first, may not run at all
- **Do-while loop**: Runs at least once, then checks condition
- Both achieve same result for input validation

### Example 3: Login System with Continue Statement

```javascript
let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter your username:");
    password = window.prompt("Enter your password:");
    
    // Check for empty or cancelled input
    if (username === null || username === "") {
        console.log("Username cannot be empty.");
        continue;  // Skip to next iteration
    }
    
    if (password === null || password === "") {
        console.log("Password cannot be empty.");
        continue;  // Skip to next iteration
    }
    
    // Validate credentials
    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("Login successful!");
    } else {
        console.log("Incorrect username or password. Try again.");
    }
}

console.log("You are now logged in!");
```

**How it works:**
- Loop runs while `!loggedIn` is true
- **Continue statement** skips rest of iteration and starts next one
- Validates for empty inputs first
- Then checks credentials
- Only sets `loggedIn = true` on successful match
- Provides clear feedback for each error type

### Example 4: Countdown

```javascript
let count = 10;

while (count > 0) {
    console.log(count);
    count--;
}

console.log("Happy New Year!");
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Happy New Year!
```

## 🔑 Understanding the Continue Statement

The **continue** statement is crucial in the login example above:

```javascript
if (username === null || username === "") {
    console.log("Username cannot be empty.");
    continue;  // Jumps back to while condition check
}
// Code here is skipped when continue executes
```

**What continue does:**
1. Immediately stops current iteration
2. Jumps back to the while condition check
3. If condition is still true, starts next iteration
4. Skips any code below it in the loop

**Without continue:**
```javascript
// Would need nested if statements
if (username !== null && username !== "") {
    if (password !== null && password !== "") {
        // Validate credentials
    }
}
```

**With continue:**
```javascript
// Cleaner, easier to read
if (username === null || username === "") {
    console.log("Error");
    continue;
}
if (password === null || password === "") {
    console.log("Error");
    continue;
}
// Validate credentials
```

### Example 5: Login Attempts (Extended)

```javascript
const correctPassword = "password123";
let userPassword = "";
let attempts = 0;
const maxAttempts = 3;

while (userPassword !== correctPassword && attempts < maxAttempts) {
    userPassword = window.prompt("Enter password:");
    attempts++;
    
    if (userPassword !== correctPassword) {
        console.log(`Incorrect. ${maxAttempts - attempts} attempts remaining.`);
    }
}

if (userPassword === correctPassword) {
    console.log("Login successful!");
} else {
    console.log("Account locked!");
}
```

## ⚠️ Infinite Loops

### The Danger
```javascript
// ❌ INFINITE LOOP - WILL CRASH!
let username = "";

while (username === "") {
    console.log("You didn't enter your name");
    // username never changes - loops forever!
}
```

### How to Avoid
```javascript
// ✅ Condition can become false
let username = "";

while (username === "") {
    username = window.prompt("Enter your name:");
    // username can change, allowing loop to exit
}
```

## 🔄 Break and Continue

### Break Statement
**Exits the loop immediately**

```javascript
let count = 1;

while (count <= 10) {
    if (count === 5) {
        break;  // Exit loop when count is 5
    }
    console.log(count);
    count++;
}
// Output: 1, 2, 3, 4
```

### Continue Statement
**Skips current iteration, continues loop**

```javascript
let count = 0;

while (count < 10) {
    count++;
    
    if (count === 5) {
        continue;  // Skip 5, continue with 6
    }
    
    console.log(count);
}
// Output: 1, 2, 3, 4, 6, 7, 8, 9, 10 (skips 5)
```

## 🔄 While vs Do-While

### While Loop
**Checks condition first**

```javascript
let num = 10;

while (num < 10) {
    console.log(num);  // Never runs
}
```

### Do-While Loop
**Runs at least once, then checks condition**

```javascript
let num = 10;

do {
    console.log(num);  // Runs once: prints 10
} while (num < 10);
```

## 📋 Practice Exercises

### Exercise 1: Email Validator
```javascript
// Keep asking until user enters an email with '@'
let email = "";
// Your code here
```

### Exercise 2: Positive Number Only
```javascript
// Keep asking until user enters a positive number
let number = -1;
// Your code here
```

### Exercise 3: Menu System
```javascript
// Display menu until user selects 'quit'
let choice = "";
// Your code here
```

### Exercise 4: Sum Calculator
```javascript
// Keep accepting numbers until user enters 0, then show sum
let sum = 0;
// Your code here
```

## 💡 Common Patterns

### Pattern 1: Input Until Valid
```javascript
let input;

while (!isValid(input)) {
    input = getInput();
}
```

### Pattern 2: Counter Loop
```javascript
let count = 0;

while (count < max) {
    // Do something
    count++;
}
```

### Pattern 3: Search Loop
```javascript
let found = false;
let index = 0;

while (!found && index < array.length) {
    if (array[index] === target) {
        found = true;
    }
    index++;
}
```

### Pattern 4: Retry Logic
```javascript
let success = false;
let attempts = 0;

while (!success && attempts < maxAttempts) {
    success = tryOperation();
    attempts++;
}
```

## 🎮 Real-World Example: Game Loop

```javascript
let isPlaying = true;
let health = 100;

while (isPlaying && health > 0) {
    let action = window.prompt("What do you do? (attack/defend/quit)");
    
    if (action === "attack") {
        console.log("You attack the enemy!");
        health -= 10;  // Take damage
    } else if (action === "defend") {
        console.log("You defend!");
        health += 5;   // Heal a bit
    } else if (action === "quit") {
        isPlaying = false;
    }
    
    console.log(`Health: ${health}`);
}

console.log("Game Over!");
```

## 🚨 Common Mistakes

### Mistake 1: Forgetting to Update Condition
```javascript
// ❌ Infinite loop
let count = 0;
while (count < 10) {
    console.log(count);
    // Forgot to increment count!
}

// ✅ Correct
let count = 0;
while (count < 10) {
    console.log(count);
    count++;  // Updates condition
}
```

### Mistake 2: Wrong Comparison Operator
```javascript
// ❌ Uses assignment instead of comparison
while (x = 10) { }  // Always true!

// ✅ Correct
while (x === 10) { }
```

### Mistake 3: Off-by-One Errors
```javascript
// ❌ Runs 11 times (0 through 10)
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// ✅ Runs 10 times (0 through 9)
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

## 🎯 Key Takeaways

- **While loops** repeat code while condition is true
- Check condition **before** each iteration
- **Must have a way** for condition to become false
- Perfect for **input validation**
- **Infinite loops** occur when condition never changes
- Use **break** to exit loop early
- Use **continue** to skip current iteration
- **Do-while** runs at least once
- While loops great for **unknown iterations**
- For loops better for **known iterations**

## ⏭️ Next Lesson
[JavaScript FOR LOOPS](../20-for-loops/)

---

**Duration:** 8:12  
**Difficulty:** Beginner  
**Category:** Loops & Control Flow
