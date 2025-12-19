# Learn JavaScript For Loops 🔂

## 📺 Video
[Learn JavaScript FOR LOOPS in 5 minutes!](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=20) (5:45)

## 📝 Description
For loops repeat code a specific number of times. Learn how to use for loops to iterate through sequences, count up or down, and perform repetitive tasks efficiently when you know exactly how many iterations you need.

## 🎯 What You'll Learn

- For loop syntax and structure
- Counter initialization
- Increment and decrement
- Loop conditions
- Counting up and down
- Stepping by different amounts
- When to use for vs while loops

## 💻 For Loop Syntax

```javascript
for (initialization; condition; increment/decrement) {
    // Code to repeat
}
```

**Three parts:**
1. **Initialization** - Set starting value (runs once)
2. **Condition** - Continue while true (checked each iteration)
3. **Increment/Decrement** - Update counter (after each iteration)

## 📝 Basic Examples

### Example 1: Count to 10
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

### Example 2: Count from 0 to 9
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

### Example 3: Print "Hello" 3 Times
```javascript
for (let i = 0; i < 3; i++) {
    console.log("Hello");
}
// Output: Hello (3 times)
```

## 🔢 Counting Variations

### Count by 2s
```javascript
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
```

### Count Backwards (Countdown)
```javascript
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year!");
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Happy New Year!
```

### Count by 5s
```javascript
for (let i = 0; i <= 50; i += 5) {
    console.log(i);
}
// Output: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
```

### Even Numbers Only
```javascript
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
// Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
```

### Odd Numbers Only
```javascript
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}
// Output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
```

## 💡 Practical Examples

### Example 1: Multiplication Table
```javascript
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// ... up to 5 x 10 = 50
```

### Example 2: Sum of Numbers
```javascript
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(`Sum of 1 to 100: ${sum}`);
// Output: Sum of 1 to 100: 5050
```

### Example 3: Factorial
```javascript
let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(`${num}! = ${factorial}`);
// Output: 5! = 120
```

### Example 4: Print Pattern
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
// Output:
// *
// **
// ***
// ****
// *****
```

### Example 5: FizzBuzz
```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

## 🔄 Nested For Loops

### Example 1: Multiplication Table (Full)
```javascript
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---");
}
```

### Example 2: Grid Pattern
```javascript
for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 3; col++) {
        line += "* ";
    }
    console.log(line);
}
// Output:
// * * *
// * * *
// * * *
```

## 🔄 Break and Continue in For Loops

### Break - Exit Loop Early
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Stop at 5
    }
    console.log(i);
}
// Output: 1, 2, 3, 4
```

### Continue - Skip Iteration
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;  // Skip 5
    }
    console.log(i);
}
// Output: 1, 2, 3, 4, 6, 7, 8, 9, 10
```

## 📋 Practice Exercises

### Exercise 1: Sum of Even Numbers
```javascript
// Calculate sum of all even numbers from 1 to 100
```

### Exercise 2: Reverse String
```javascript
let str = "Hello";
// Use for loop to print string in reverse
```

### Exercise 3: Find Prime Numbers
```javascript
// Print all prime numbers from 1 to 50
```

### Exercise 4: Array Sum
```javascript
let numbers = [10, 20, 30, 40, 50];
// Calculate sum using for loop
```

### Exercise 5: Pyramid Pattern
```javascript
// Print:
//     *
//    ***
//   *****
//  *******
// *********
```

## 🔄 For Loop Variations

### Standard For Loop
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### For...of Loop (Arrays)
```javascript
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

### For...in Loop (Objects)
```javascript
let person = {name: "John", age: 30, city: "NYC"};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

## 🎯 For vs While Loops

### Use For Loop When:
- ✅ Know exact number of iterations
- ✅ Counting/iterating with counter
- ✅ Going through arrays (with index)
- ✅ Defined start and end

```javascript
// ✅ Good use of for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

### Use While Loop When:
- ✅ Unknown number of iterations
- ✅ Condition-based looping
- ✅ User input validation
- ✅ Loop until specific event

```javascript
// ✅ Good use of while loop
let password = "";
while (password.length < 8) {
    password = prompt("Enter password:");
}
```

## 🚨 Common Mistakes

### Mistake 1: Infinite Loop
```javascript
// ❌ Infinite loop
for (let i = 0; i < 10; ) {  // Forgot i++
    console.log(i);
}

// ✅ Correct
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

### Mistake 2: Off-by-One Error
```javascript
// ❌ Runs 11 times (0-10)
for (let i = 0; i <= 10; i++) { }

// ✅ Runs 10 times (0-9)
for (let i = 0; i < 10; i++) { }
```

### Mistake 3: Wrong Increment Direction
```javascript
// ❌ Infinite loop (counting up forever)
for (let i = 10; i > 0; i++) { }

// ✅ Correct countdown
for (let i = 10; i > 0; i--) { }
```

## 💡 Pro Tips

### Tip 1: Use Descriptive Names
```javascript
// ❌ Unclear
for (let i = 0; i < users.length; i++) { }

// ✅ Better
for (let userIndex = 0; userIndex < users.length; userIndex++) { }
```

### Tip 2: Extract Magic Numbers
```javascript
// ❌ Magic number
for (let i = 0; i < 100; i++) { }

// ✅ Named constant
const MAX_ITEMS = 100;
for (let i = 0; i < MAX_ITEMS; i++) { }
```

## 🎯 Key Takeaways

- **For loops** repeat code a specific number of times
- **Three parts:** initialization, condition, increment
- Perfect for **counting** and **iterating with index**
- **i++** increments by 1, **i--** decrements by 1
- **i += n** increments by n
- Use **break** to exit early
- Use **continue** to skip iterations
- **Nested loops** for multi-dimensional iteration
- **For loops** for known iterations, **while loops** for unknown
- Watch for **off-by-one errors** (< vs <=)

## ⏭️ Next Lesson
[JavaScript NUMBER GUESSING GAME](../21-number-guessing-game/)

---

**Duration:** 5:45  
**Difficulty:** Beginner  
**Category:** Loops & Iteration
