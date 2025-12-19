# Learn JavaScript Arithmetic Operators ➕➖✖️➗

## 📺 Video
[Learn JavaScript ARITHMETIC OPERATORS in 8 minutes!](https://www.youtube.com/watch?v=2Hku-cJUuSI&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=3) (8:24)

## 📝 Description
Learn how to perform mathematical operations in JavaScript using arithmetic operators. Master addition, subtraction, multiplication, division, exponents, modulus, and understand operator precedence for solving complex equations.

## 🎯 What You'll Learn

- Basic arithmetic operators (+, -, *, /, **)
- Modulus operator (%) for remainders
- Augmented assignment operators (+=, -=, *=, /=, **=, %=)
- Increment (++) and decrement (--) operators
- Operator precedence (order of operations)
- Solving complex mathematical equations

## 📚 Key Terminology

**Operands:** Values, variables, etc. used in an expression
```javascript
11 + x - 5
// 11, x, and 5 are all operands
```

**Operators:** Symbols that perform operations
```javascript
11 + x - 5
// + and - are operators
```

## ➕ Basic Arithmetic Operators

### Addition (+)
```javascript
let students = 30;

students = students + 1;
console.log(students);  // 31

// Adding multiple values
let total = 10 + 5 + 3;
console.log(total);  // 18
```

### Subtraction (-)
```javascript
let students = 30;

students = students - 1;
console.log(students);  // 29

// Subtracting values
let remaining = 100 - 25;
console.log(remaining);  // 75
```

### Multiplication (*)
```javascript
let students = 30;

students = students * 2;
console.log(students);  // 60

// Multiply values
let area = 5 * 10;
console.log(area);  // 50
```

### Division (/)
```javascript
let students = 30;

students = students / 2;
console.log(students);  // 15

// Divide values
let half = 100 / 2;
console.log(half);  // 50
```

### Exponents (**)
```javascript
let students = 30;

students = students ** 2;
console.log(students);  // 900

students = 30 ** 3;
console.log(students);  // 27000

// Examples
console.log(2 ** 3);   // 8 (2 × 2 × 2)
console.log(5 ** 2);   // 25 (5 × 5)
console.log(10 ** 4);  // 10000
```

### Modulus (%) - Remainder
```javascript
let students = 30;

// Divide by 2, get remainder
students = students % 2;
console.log(students);  // 0 (30 divides evenly by 2)

// 31 students divided by 2
students = 31 % 2;
console.log(students);  // 1 (one student remaining)

// Divide by 3
students = 31 % 3;
console.log(students);  // 1 (one student remaining)
```

**Practical Use:** Check if number is even or odd
```javascript
let num = 30;
console.log(num % 2);  // 0 = even

num = 31;
console.log(num % 2);  // 1 = odd
```

## 🔧 Augmented Assignment Operators

Shortcuts for reassigning variables!

### Addition Assignment (+=)
```javascript
let students = 30;

// Long way
students = students + 1;

// Short way
students += 1;  // 31
students += 2;  // 33
```

### Subtraction Assignment (-=)
```javascript
let students = 30;

students -= 1;  // 29
students -= 5;  // 24
```

### Multiplication Assignment (*=)
```javascript
let students = 30;

students *= 2;  // 60
students *= 3;  // 180
```

### Division Assignment (/=)
```javascript
let students = 30;

students /= 2;  // 15
students /= 3;  // 5
```

### Exponent Assignment (**=)
```javascript
let students = 30;

students **= 2;  // 900
```

### Modulus Assignment (%=)
```javascript
let students = 30;

students %= 2;  // 0
```

## 🔼🔽 Increment & Decrement Operators

### Increment (++)
Add 1 to a variable:

```javascript
let students = 30;

students++;  // Same as students += 1
console.log(students);  // 31
```

### Decrement (--)
Subtract 1 from a variable:

```javascript
let students = 30;

students--;  // Same as students -= 1
console.log(students);  // 29
```

### Three Ways to Add 1
```javascript
let count = 10;

// Method 1: Basic
count = count + 1;

// Method 2: Augmented assignment
count += 1;

// Method 3: Increment operator
count++;
```

## 📐 Operator Precedence

Order of operations: **PEMDAS**

1. **P**arentheses `()`
2. **E**xponents `**`
3. **M**ultiplication `*`, **D**ivision `/`, **M**odulus `%`
4. **A**ddition `+`, **S**ubtraction `-`

### Example 1: Basic Precedence
```javascript
let result = 1 + 2 * 3 + 4 ** 2;

// Step by step:
// 1. No parentheses
// 2. Exponents: 4 ** 2 = 16
//    → 1 + 2 * 3 + 16
// 3. Multiplication: 2 * 3 = 6
//    → 1 + 6 + 16
// 4. Addition (left to right): 1 + 6 = 7, then 7 + 16 = 23

console.log(result);  // 23
```

### Example 2: With Modulus
```javascript
let result = 12 % 5 + 8 / 2;

// Step by step:
// 1. No parentheses
// 2. No exponents
// 3. Modulus: 12 % 5 = 2
//    Division: 8 / 2 = 4
//    → 2 + 4
// 4. Addition: 2 + 4 = 6

console.log(result);  // 6
```

### Example 3: Challenge Round
```javascript
let result = 6 / (2 + 5) ** 2;

// Step by step:
// 1. Parentheses: 2 + 5 = 7
//    → 6 / 7 ** 2
// 2. Exponents: 7 ** 2 = 49
//    → 6 / 49
// 3. Division: 6 / 49 = 0.122448...
// 4. No addition/subtraction

console.log(result);  // 0.12244897959183673
```

### Using Parentheses to Override Precedence
```javascript
// Without parentheses
let result1 = 2 + 3 * 4;
console.log(result1);  // 14 (3 * 4 first)

// With parentheses
let result2 = (2 + 3) * 4;
console.log(result2);  // 20 (2 + 3 first)
```

## 💡 Practical Examples

### Example 1: Calculate Circle Area
```javascript
let radius = 5;
let area = 3.14159 * radius ** 2;

console.log(`Area: ${area}`);  // Area: 78.53975
```

### Example 2: Convert Temperature
```javascript
let fahrenheit = 32;
let celsius = (fahrenheit - 32) * 5 / 9;

console.log(`${fahrenheit}°F = ${celsius}°C`);  // 32°F = 0°C
```

### Example 3: Calculate Total Price
```javascript
let price = 10.99;
let quantity = 3;
let taxRate = 0.08;

let subtotal = price * quantity;
let tax = subtotal * taxRate;
let total = subtotal + tax;

console.log(`Total: $${total.toFixed(2)}`);  // Total: $35.60
```

### Example 4: Split Bill
```javascript
let totalBill = 75.50;
let people = 4;

let perPerson = totalBill / people;
console.log(`Each person pays: $${perPerson.toFixed(2)}`);
// Each person pays: $18.88
```

## 📋 Practice Exercises

### Exercise 1: Basic Operators
```javascript
let x = 10;
let y = 3;

// Calculate:
// - Sum
// - Difference
// - Product
// - Quotient
// - Remainder
// - x to the power of y
```

### Exercise 2: Augmented Assignments
```javascript
let score = 100;

// Using augmented operators:
// - Add 50 points
// - Subtract 20 points
// - Double the score
// - Divide by 2
```

### Exercise 3: Operator Precedence
```javascript
// Solve these without running code, then verify:
let result1 = 5 + 3 * 2;
let result2 = (5 + 3) * 2;
let result3 = 10 - 2 ** 3;
let result4 = 15 % 4 + 2 * 3;
```

### Exercise 4: Real-World Calculation
```javascript
// You buy 5 items at $12.99 each
// Tax is 7%
// Calculate the total cost
```

## 🆚 Operator Comparison Table

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `15 / 3` | `5` |
| `**` | Exponent | `5 ** 2` | `25` |
| `%` | Modulus | `5 % 2` | `1` |
| `++` | Increment | `x++` | `x + 1` |
| `--` | Decrement | `x--` | `x - 1` |

## 🆚 Augmented Operators Table

| Long Form | Augmented | Meaning |
|-----------|-----------|---------|
| `x = x + 5` | `x += 5` | Add 5 to x |
| `x = x - 3` | `x -= 3` | Subtract 3 from x |
| `x = x * 2` | `x *= 2` | Multiply x by 2 |
| `x = x / 4` | `x /= 4` | Divide x by 4 |
| `x = x ** 2` | `x **= 2` | Square x |
| `x = x % 3` | `x %= 3` | x modulus 3 |

## 🚨 Common Mistakes

### Mistake 1: Forgetting Operator Precedence
```javascript
// ❌ Wrong assumption
let result = 5 + 3 * 2;  // Might think: (5 + 3) * 2 = 16

// ✅ Actual result
console.log(result);  // 11 (multiplication first: 5 + 6)

// ✅ Use parentheses if needed
let correct = (5 + 3) * 2;  // 16
```

### Mistake 2: Integer Division
```javascript
// Be aware of decimals
let result = 5 / 2;
console.log(result);  // 2.5 (not 2)

// Use Math.floor() for integer division
console.log(Math.floor(5 / 2));  // 2
```

### Mistake 3: Modulus with Negatives
```javascript
console.log(-10 % 3);   // -1 (not 2)
console.log(10 % -3);   // 1
console.log(-10 % -3);  // -1
```

### Mistake 4: Increment in Expressions
```javascript
let x = 5;
let y = x++;  // y gets 5, then x becomes 6

let a = 5;
let b = ++a;  // a becomes 6, then b gets 6

// Prefer clarity over cleverness
```

## 💡 Pro Tips

### Tip 1: Use Parentheses for Clarity
```javascript
// Less clear
let result = a + b * c / d;

// More clear
let result = a + ((b * c) / d);
```

### Tip 2: Separate Complex Calculations
```javascript
// ❌ Hard to read
let total = price * quantity * (1 + taxRate) + shippingCost;

// ✅ Easier to understand
let subtotal = price * quantity;
let withTax = subtotal * (1 + taxRate);
let total = withTax + shippingCost;
```

### Tip 3: Use Meaningful Variable Names
```javascript
// ❌ Unclear
let x = 10.99;
let y = 3;
let z = x * y;

// ✅ Clear
let pricePerItem = 10.99;
let quantity = 3;
let totalCost = pricePerItem * quantity;
```

## 🎯 Key Takeaways

- **Operands** are values/variables, **operators** are symbols (+, -, etc.)
- **Six basic operators:** +, -, *, /, **, %
- **Modulus (%)** gives the remainder of division
- **Augmented operators** (+=, -=, etc.) are shortcuts for reassignment
- **Increment (++)** adds 1, **decrement (--)** subtracts 1
- **Operator precedence:** Parentheses → Exponents → Multiply/Divide/Modulus → Add/Subtract
- Use **parentheses** to control order of operations
- JavaScript always follows **PEMDAS** rules
- Break down **complex equations** into smaller steps
- Use **meaningful variable names** for clarity

## ⏭️ Next Lesson
[JavaScript USER INPUT](../04-user-input/)

---

**Duration:** 8:24  
**Difficulty:** Beginner  
**Category:** Fundamentals
