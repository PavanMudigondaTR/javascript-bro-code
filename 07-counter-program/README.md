# JavaScript Counter Program 🔢

## 📺 Video
[JavaScript COUNTER PROGRAM](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=7) (9:17)

## 📝 Description
Build a complete counter program using JavaScript, HTML, and CSS. Learn how to create interactive buttons that increase, decrease, and reset a counter value while updating the display in real-time.

## 🎯 What You'll Learn

- Creating interactive HTML buttons
- Using onclick event handlers
- Updating DOM elements dynamically
- Managing state with variables
- Styling with CSS
- Building a complete mini-project

## 💻 Final Result

A counter with three buttons:
- **Decrease** - Subtract 1 from counter
- **Reset** - Set counter back to 0
- **Increase** - Add 1 to counter

## 🔧 HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="calculatorHdg">Calculator</h1>
    <label id="countLabel">0</label><br>
    <div id="buttonContainer"">
        <button type="button" id="decreaseBtn" class="buttons">Decrease</button>
        <button type="button" id="increaseBtn" class="buttons">Increase</button>
        <button type="button" id="resetBtn" class="buttons">Reset</button>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

## 💻 JavaScript Logic

```javascript
// counter program

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
```

## 🎨 CSS Styling

```css
#calculatorHdg{
    text-align: center;
}
#countLabel{
    display: block;
    text-align: center;
    font-size: xx-large;
    font-family: Helvetica;
}

#buttonContainer{
    text-align: center;
}
.buttons{
    padding: 10px 20px;
    font-size: large;
    color: white;
    background-color: hsl(214, 100%, 74%);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;
}
.buttons:hover{
    background-color: hsl(214, 100%, 56%);
}
```

## 📋 Practice Exercises

1. **Add color changes** - Make counter red when negative, green when positive
2. **Add limits** - Prevent counter from going below 0 or above 100
3. **Add step controls** - Buttons to add/subtract by 5 or 10
4. **Add keyboard support** - Use arrow keys to control counter

## 🎯 Key Takeaways

- Use `const` to store DOM element references that won't change
- Event handlers (onclick) make buttons interactive
- Variables (`let`) store application state
- DOM manipulation (textContent) updates the display
- Increment (++) and decrement (--) operators
- CSS classes for styling multiple elements
- Hover effects and transitions enhance user experience
- Combining HTML, CSS, and JavaScript creates interactive applications

## ⏭️ Next Lesson
[JavaScript MATH OBJECT](../08-math-object/)

---

**Duration:** 9:17  
**Difficulty:** Beginner  
**Project Type:** Interactive UI
