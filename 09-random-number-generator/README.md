# Random Number Generator in JavaScript ⁉

## 📺 Video
[Random number generator in JavaScript](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=9) (8:37)

## 📝 Description
Learn how to generate random numbers in JavaScript using Math.random(). Create a complete random number generator with customizable minimum and maximum values, and build three interactive dice rollers.

## 🎯 What You'll Learn

- Using Math.random() to generate random numbers
- Converting random decimals to integers with Math.floor()
- Setting minimum and maximum ranges
- Building interactive dice rollers
- Using onclick event handlers
- Updating multiple labels dynamically

## � HTML Structure

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
    <div id="buttonContainer">
        <br>
        <button type="Button" id="rollBtn">roll</button><br><br>
    </div>
    <div id="labelContainer">
        <label id="label1"></label><br><br>
        <label id="label2"></label><br><br>
        <label id="label3"></label><br><br>        
    </div>
    <script src="index.js"></script>
</body>
</html>
```

## 🎨 CSS Styling

```css
#buttonContainer{
    text-align: center;
    font-family: sans-serif;
    font-size: x-large;
}
#labelContainer{
        text-align: center;
}
```

## �💻 Basic Random Number Generation

### Random Decimal (0 to 1)
```javascript
let randomNum = Math.random();
console.log(randomNum);  // Generates a random number between 0 and 1
                          // Will give a number with a long decimal portion
```

### Random Integer (1 to 6) - Dice Roll
```javascript
// Step-by-step explanation:
let randomNum = Math.floor(Math.random() * 6) + 1;

// Math.random()        → 0 to 0.999...
// Math.random() * 6    → 0 to 5.999... (between 0 and 6, exclusive)
// Math.floor()         → 0 to 5 (removes decimal portion)
// + 1                  → 1 to 6 (increases minimum to 1)
```

### Random Integer (1 to 100)
```javascript
let randomNum = Math.floor(Math.random() * 100) + 1;
// Random number between 1 and 100
```

### Random Integer (Custom Range - 50 to 100)
```javascript
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// We subtract min from max to get the proper range
// Then add min back to shift to desired minimum
```

## 🎲 Complete Implementation - Triple Dice Roller

### JavaScript (index.js)

```javascript
const rollBtn = document.getElementById('rollBtn');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const min = 1;
const max = 6;

rollBtn.onclick = function() {
    label1.textContent = Math.floor(Math.random() * max + min)
    label2.textContent = Math.floor(Math.random() * max + min)
    label3.textContent = Math.floor(Math.random() * max + min)
}
```

### How It Works

1. Get references to the button and three labels using `getElementById()`
2. Set constants for minimum (1) and maximum (6) values
3. When button is clicked, generate three random numbers
4. Each random number is between 1 and 6 (standard six-sided dice)
5. Update the text content of each label to display the rolled values

## 🔢 Formula Breakdown

### For Custom Range (50 to 100)

```javascript
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
```

**Why this formula works:**
1. `Math.random()` → generates 0 to 0.999...
2. `(max - min + 1)` → calculate range size (100 - 50 + 1 = 51)
3. `Math.random() * 51` → 0 to 50.999...
4. `Math.floor()` → converts to integer (0 to 50)
5. `+ min` → shifts to desired minimum (50 to 100)

**Important:** We need to subtract min from max to prevent getting numbers outside our range. For example, if we just did `Math.random() * 100 + 50`, we could get 139 (89 * 1 + 50 = 139), which is outside our desired range!

### For Simple 1 to 6 (Dice)

```javascript
Math.floor(Math.random() * 6) + 1
// Simpler formula when min is 1
```

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

- `Math.random()` generates a random number between 0 (inclusive) and 1 (exclusive)
- Returns a number with a long decimal portion
- Use `Math.floor()` to remove the decimal portion and get whole integers
- For simple dice (1-6): `Math.floor(Math.random() * 6) + 1`
- For custom range: `Math.floor(Math.random() * (max - min + 1)) + min`
- Must subtract min from max to prevent values outside desired range
- Store DOM elements in constants for better performance
- Multiple random numbers need separate Math.random() calls

## ⏭️ Next Lesson
[JavaScript IF STATEMENTS](../10-if-statements/)

---

**Duration:** 8:37  
**Difficulty:** Beginner  
**Category:** Math & Random
