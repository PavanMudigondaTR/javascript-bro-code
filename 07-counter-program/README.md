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
<label id="countLabel">0</label><br>
<div id="buttonContainer">
    <button id="decreaseBtn">Decrease</button>
    <button id="resetBtn">Reset</button>
    <button id="increaseBtn">Increase</button>
</div>
```

## 💻 JavaScript Logic

```javascript
let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count--;
    document.getElementById("countLabel").textContent = count;
};

document.getElementById("resetBtn").onclick = function() {
    count = 0;
    document.getElementById("countLabel").textContent = count;
};

document.getElementById("increaseBtn").onclick = function() {
    count++;
    document.getElementById("countLabel").textContent = count;
};
```

## 🎨 CSS Styling

```css
#countLabel {
    display: block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica;
}

#buttonContainer {
    text-align: center;
}

button {
    font-size: 2em;
    margin: 10px;
    padding: 10px 20px;
}
```

## 📋 Practice Exercises

1. **Add color changes** - Make counter red when negative, green when positive
2. **Add limits** - Prevent counter from going below 0 or above 100
3. **Add step controls** - Buttons to add/subtract by 5 or 10
4. **Add keyboard support** - Use arrow keys to control counter

## 🎯 Key Takeaways

- Event handlers make buttons interactive
- Variables store application state
- DOM manipulation updates the display
- Increment (++) and decrement (--) operators
- Combining HTML, CSS, and JavaScript

## ⏭️ Next Lesson
[JavaScript MATH OBJECT](../08-math-object/)

---

**Duration:** 9:17  
**Difficulty:** Beginner  
**Project Type:** Interactive UI
