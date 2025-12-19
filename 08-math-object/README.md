# JavaScript Math Object 🧮

## 📺 Video
[Why the Math object in JavaScript is useful](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=8) (5:37)

## 📝 Description
The Math object is a built-in JavaScript object that provides a collection of mathematical properties and methods. Learn how to perform common mathematical operations without writing complex algorithms yourself.

## 🎯 What You'll Learn

- Math constants (PI, E)
- Rounding methods (round, floor, ceil, trunc)
- Power and square root functions
- Absolute value
- Trigonometric functions
- When to use each method

## 💻 Code Examples

### Math Constants

```javascript
console.log(Math.PI);  // 3.141592653589793
console.log(Math.E);   // 2.718281828459045 (Euler's number)
```

### Rounding Methods

```javascript
let x = 3.21;

Math.round(x);  // 3 - Rounds to nearest integer
Math.floor(x);  // 3 - Always rounds down
Math.ceil(x);   // 4 - Always rounds up
Math.trunc(x);  // 3 - Removes decimal portion
```

### Power and Root

```javascript
Math.pow(3, 2);    // 9 - 3 to the power of 2
Math.sqrt(81);     // 9 - Square root of 81
Math.cbrt(27);     // 3 - Cube root of 27
```

### Absolute Value

```javascript
Math.abs(-3.21);   // 3.21 - Removes negative sign
Math.abs(3.21);    // 3.21 - Positive stays positive
```

### Trigonometry

```javascript
// Input is in radians
Math.sin(45);      // Sine
Math.cos(45);      // Cosine  
Math.tan(45);      // Tangent
```

### Min and Max

```javascript
Math.min(5, 10, 2, 8);   // 2
Math.max(5, 10, 2, 8);   // 10
```

### Logarithm

```javascript
Math.log(10);      // 2.302... (natural logarithm)
Math.log10(100);   // 2 (base-10 logarithm)
```

## 📊 Rounding Methods Comparison

| Method | 3.21 | 3.99 | -3.21 | -3.99 |
|--------|------|------|-------|-------|
| round() | 3 | 4 | -3 | -4 |
| floor() | 3 | 3 | -4 | -4 |
| ceil() | 4 | 4 | -3 | -3 |
| trunc() | 3 | 3 | -3 | -3 |

## 📋 Practice Exercises

1. **Circle Calculator** - Calculate area and circumference using Math.PI
2. **Distance Formula** - Calculate distance between two points using Math.sqrt and Math.pow
3. **Random Dice** - Combine with Math.random() to roll dice
4. **Grade Rounder** - Round grades using different rounding methods

## 💡 Common Use Cases

```javascript
// Calculate area of circle
const radius = 5;
const area = Math.PI * Math.pow(radius, 2);

// Distance between two points
const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Round to 2 decimal places
const price = 19.456;
const rounded = Math.round(price * 100) / 100;  // 19.46
```

## 🎯 Key Takeaways

- Math is a built-in object (not a constructor)
- No need to create an instance - use Math directly
- All methods are static
- Math.PI and Math.E are constants
- Choose the right rounding method for your needs
- Trigonometric functions use radians, not degrees

## ⏭️ Next Lesson
[Random Number Generator](../09-random-number-generator/)

---

**Duration:** 5:37  
**Difficulty:** Beginner  
**Category:** Built-in Objects
