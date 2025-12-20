# JavaScript Math Object 🧮

## 📺 Video
[Why the Math object in JavaScript is useful](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=8) (5:37)

## 📝 Description
The Math object is a built-in JavaScript object that provides a collection of mathematical properties and methods. Learn how to perform common mathematical operations without writing complex algorithms yourself.

## 🎯 What You'll Learn

- Math constants (PI, E)
- Rounding methods (round, floor, ceil, trunc)
- Power and square root functions
- Absolute value and sign
- Trigonometric functions (sin, cos, tan)
- Min and max functions
- When to use each method

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
    <script src="index.js"></script>
</body>
</html>
```

## 🎨 CSS Styling

```css
body{
    text-align: center;
    font-size: x-large;
}
```

## 💻 Code Examples

### Complete Example from index.js

```javascript
// Math = built-in object that provides a
//        collection of properties and methods

let x = 0;
let y = 2;
let z = 3;

// Try uncommenting different methods to see results:

// z = Math.round(x);
// z = Math.ceil(x);
// z = Math.floor(x);
// z = Math.trunc(x);
// z = Math.pow(x,y)
// z = Math.sqrt(x);
// z = Math.sin(x)
// z = Math.cos(x)
// z = Math.tan(x)
// z = Math.abs(x)
// z = Math.sign(x)
// z = Math.min(x,y,z)
z = Math.max(x,y,z)

console.log(z);
```

### Math Constants

```javascript
let PI = Math.PI
console.log(`PI: ${PI}`)  // PI: 3.141592653589793
```

### Rounding Methods

```javascript
let x = 3.21;
// let x = 3.99;

Math.round(x);  // 3 - Rounds to nearest integer
Math.floor(x);  // 3 - Always rounds down
Math.ceil(x);   // 4 - Always rounds up
Math.trunc(x);  // 3 - Removes decimal portion
```

### Power and Root

```javascript
let x = 81;
let y = 2;

Math.pow(x, y);    // 6561 - 81 to the power of 2
Math.sqrt(x);      // 9 - Square root of 81
```

### Absolute Value and Sign

```javascript
let x = -10;

Math.abs(x);   // 10 - Removes negative sign
Math.sign(x);  // -1 - Returns -1, 0, or 1 based on sign
```

### Trigonometry

```javascript
let x = 45;
// Input is in radians
Math.sin(x);      // Sine
Math.cos(x);      // Cosine  
Math.tan(x);      // Tangent
```

### Min and Max

```javascript
let x = 0;
let y = 2;
let z = 3;

Math.min(x, y, z);   // 0 - Returns smallest value
Math.max(x, y, z);   // 3 - Returns largest value
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
- Math.PI is a useful constant for circle calculations
- Choose the right rounding method for your needs:
  - `round()` - nearest integer
  - `floor()` - always down
  - `ceil()` - always up
  - `trunc()` - remove decimals
- `Math.sign()` returns -1, 0, or 1 based on number's sign
- Trigonometric functions (sin, cos, tan) use radians, not degrees
- `Math.min()` and `Math.max()` can accept multiple arguments

## ⏭️ Next Lesson
[Random Number Generator](../09-random-number-generator/)

---

**Duration:** 5:37  
**Difficulty:** Beginner  
**Category:** Built-in Objects
