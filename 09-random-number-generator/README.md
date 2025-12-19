# Random Number Generator in JavaScript ⁉

## 📺 Video
[Random number generator in JavaScript](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=9) (8:37)

## 📝 Description
Learn how to generate random numbers in JavaScript using Math.random(). Create a complete random number generator with customizable minimum and maximum values, and build three interactive dice rollers.

## 🎯 What You'll Learn

- Using Math.random() to generate random numbers
- Converting random decimals to integers
- Setting minimum and maximum ranges
- Building interactive number generators
- Creating visual dice rollers

## 💻 Basic Random Number Generation

### Random Decimal (0 to 1)
```javascript
let randomNum = Math.random();
console.log(randomNum);  // 0.something
```

### Random Integer (1 to 6) - Dice Roll
```javascript
let randomNum = Math.floor(Math.random() * 6) + 1;
// Math.random() * 6  → 0 to 5.999...
// Math.floor()       → 0 to 5
// + 1                → 1 to 6
```

### Random Integer (1 to 100)
```javascript
let randomNum = Math.floor(Math.random() * 100) + 1;
```

### Random Integer (Custom Range)
```javascript
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
```

## 🎲 Complete Random Number Generator

```javascript
const min = 1;
const max = 100;

document.getElementById("rollButton").onclick = function() {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("label").textContent = randomNum;
};
```

## 🎲 Triple Dice Roller

```javascript
document.getElementById("rollButton").onclick = function() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("label1").textContent = dice1;
    document.getElementById("label2").textContent = dice2;
    document.getElementById("label3").textContent = dice3;
};
```

## 🔢 Formula Breakdown

```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

**Why this formula works:**
1. `Math.random()` → generates 0 to 0.999...
2. `* (max - min + 1)` → scales to range size
3. `Math.floor()` → converts to integer
4. `+ min` → shifts to desired minimum

**Example (50 to 100):**
- Range size: 100 - 50 + 1 = 51 values
- Math.random() * 51 → 0 to 50.999
- Math.floor() → 0 to 50
- + 50 → 50 to 100 ✓

## 📋 Practice Exercises

1. **Lottery Number Generator** - Generate 6 unique numbers between 1-49
2. **Password Generator** - Random numbers for part of a password
3. **Game Probability** - Use random numbers for game mechanics
4. **Random Quote Selector** - Pick random index from array

## 💡 Common Patterns

### Random Boolean
```javascript
const randomBool = Math.random() < 0.5;  // true or false
```

### Random Array Element
```javascript
const colors = ["red", "blue", "green"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
```

### Random with Decimals
```javascript
// Random number between 0 and 10 with 2 decimals
const random = (Math.random() * 10).toFixed(2);
```

## 🎯 Key Takeaways

- `Math.random()` generates 0 (inclusive) to 1 (exclusive)
- Always use `Math.floor()` for integer randomness
- Formula: `Math.floor(Math.random() * (max - min + 1)) + min`
- Remember to add 1 to include the maximum value
- Useful for games, simulations, and testing

## ⏭️ Next Lesson
[JavaScript IF STATEMENTS](../10-if-statements/)

---

**Duration:** 8:37  
**Difficulty:** Beginner  
**Category:** Math & Random
