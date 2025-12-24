# Learn JavaScript For Loops 🔂

## 📺 Video
[Learn JavaScript FOR LOOPS in 5 minutes!](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=20) (5:45)

## 📝 Description
For loops repeat some code a **limited** amount of times. Unlike while loops which can repeat code infinitely, for loops allow you to do something a certain or limited number of times. Learn counter initialization, conditions, increment/decrement operations, and the continue/break keywords.

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

### Example 1: Print "Hello" 3 Times
```javascript
for (let i = 0; i <= 2; i++) {
    console.log("Hello");
}
// Output: Hello (3 times)
```

**Understanding the three statements:**
- `let i = 0` - Create temporary counter, start at 0
- `i <= 2` - Continue while i is less than or equal to 2 (0, 1, 2 = 3 times)
- `i++` - Increment counter by 1 after each iteration

### Example 2: See Counter Values
```javascript
for (let i = 0; i <= 2; i++) {
    console.log(i);
}
// Output: 0, 1, 2
```

### Example 3: Count 1 to 10
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

### Example 4: Count 0 to 9
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

## 🔢 Counting Variations

### Count by 2s (Increment by 2)
```javascript
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

**Start at 2 for even numbers:**
```javascript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
// Output: 2, 4, 6, 8, 10
```

### Count Backwards - New Year's Countdown
```javascript
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("HAPPY NEW YEAR!");
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, HAPPY NEW YEAR!
```

**It's like counting down to midnight on New Year's Eve!**

### Count Down by 2
```javascript
for (let i = 10; i > 0; i -= 2) {
    console.log(i);
}
console.log("HAPPY NEW YEAR!");
// Output: 10, 8, 6, 4, 2, HAPPY NEW YEAR!
```

### Count Down by 3
```javascript
for (let i = 10; i >= 1; i -= 3) {
    console.log(i);
}
console.log("HAPPY NEW YEAR!");
// Output: 10, 7, 4, 1, HAPPY NEW YEAR!
```

## � Continue and Break Keywords

### Continue - Skip Unlucky 13

```javascript
for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue;  // skip iteration when i == 13
    }
    else {
        console.log(i);
    }
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20
```

**What happens:**
- Loop counts from 1 to 20
- When `i` equals 13 (unlucky number!), `continue` is executed
- `continue` skips the rest of the current iteration
- Jumps from 12 directly to 14
- Notice 13 is missing from the output

**Use continue when:** You need to skip an iteration based on a condition

### Break - Exit Loop Entirely

```javascript
for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        break;  // exit loop entirely when i == 13
    }
    console.log(i);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
```

**What happens:**
- Loop counts from 1 to 20
- When `i` equals 13, `break` is executed
- `break` exits the for loop **entirely**
- No more iterations happen
- We count up to 12, then stop completely

**Use break when:** You need to exit the loop early before all iterations complete

### Continue vs Break Comparison

| Keyword | Action | Use Case |
|---------|--------|----------|
| `continue` | Skip current iteration, continue loop | Skip specific values |
| `break` | Exit loop entirely | Stop when condition met |

**Recap from Switches:**
- We've seen `break` before in switch statements to break out of the switch
- Same concept here - `break` exits the for loop entirely

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

### Example 3: Skip Even Numbers
```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9 (odd numbers only)
```

### Example 4: Find First Match and Stop
```javascript
let numbers = [3, 7, 2, 9, 4, 8, 1];
let target = 9;

for (let i = 0; i < numbers.length; i++) {
    console.log(`Checking ${numbers[i]}...`);
    if (numbers[i] === target) {
        console.log(`Found ${target} at index ${i}!`);
        break;  // Stop searching once found
    }
}
// Output:
// Checking 3...
// Checking 7...
// Checking 2...
// Checking 9...
// Found 9 at index 3!
```

## 🔄 Break and Continue Summary

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

- **For loops** repeat code a **limited** number of times (unlike while loops)
- **Three statements:** 
  1. Create temporary counter variable (e.g., `let i = 0`)
  2. Condition to continue (`i < 10`)
  3. Increment or decrement counter (`i++` or `i--`)
- **i** is a common naming convention meaning "index"
- **i++** increments by 1, **i--** decrements by 1
- **i += n** increments by n, **i -= n** decrements by n
- **continue** skips current iteration, continues with next
- **break** exits the loop entirely (also seen in switch statements)
- Perfect for when you know **exactly how many times** to iterate
- Common counter pattern: start at 0 or 1, increment by 1 each time
- Watch for **off-by-one errors** (< vs <=)

## ⏭️ Next Lesson
[JavaScript NUMBER GUESSING GAME](../21-number-guessing-game/)

---

**Duration:** 5:45  
**Difficulty:** Beginner  
**Category:** Loops & Iteration
