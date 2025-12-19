# HTML & CSS Basics 🎨

## 📝 Overview
A comprehensive reference guide for HTML elements and CSS properties used throughout the JavaScript course. Master these fundamentals before diving into JavaScript.

## 📋 Table of Contents
- [HTML Elements Reference](#html-elements-reference)
- [CSS Basics](#css-basics)
- [Form Elements](#form-elements)
- [Common Attributes](#common-attributes)
- [Practice Examples](#practice-examples)

---

## 🏗️ HTML Elements Reference

### Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Content goes here -->
    <script src="script.js"></script>
</body>
</html>
```

### Headings
```html
<h1>Main Heading (Largest)</h1>
<h2>Sub Heading</h2>
<h3>Section Heading</h3>
<h4>Subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

### Text Elements
```html
<p>Paragraph of text</p>
<span>Inline text</span>
<strong>Bold/Important text</strong>
<em>Italic/Emphasized text</em>
<mark>Highlighted text</mark>
<small>Small text</small>
<br> <!-- Line break -->
<hr> <!-- Horizontal line -->
```

### Containers
```html
<div>Block-level container</div>
<section>Document section</section>
<article>Independent content</article>
<header>Header section</header>
<footer>Footer section</footer>
<main>Main content</main>
<aside>Sidebar content</aside>
<nav>Navigation links</nav>
```

### Lists
```html
<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
```

### Links & Media
```html
<!-- Link -->
<a href="https://example.com" target="_blank">Click here</a>

<!-- Image -->
<img src="image.jpg" alt="Description">

<!-- Video -->
<video controls>
    <source src="video.mp4" type="video/mp4">
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
</audio>
```

---

## 📝 Form Elements

### Basic Form Structure
```html
<form id="myForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    
    <button type="submit">Submit</button>
</form>
```

### Input Types
```html
<!-- Text Input -->
<input type="text" placeholder="Enter text">

<!-- Password -->
<input type="password" placeholder="Enter password">

<!-- Email -->
<input type="email" placeholder="email@example.com">

<!-- Number -->
<input type="number" min="0" max="100" value="0">

<!-- Date -->
<input type="date">

<!-- Color Picker -->
<input type="color">

<!-- Range Slider -->
<input type="range" min="0" max="100" value="50">

<!-- Checkbox -->
<input type="checkbox" id="agree">
<label for="agree">I agree</label>

<!-- Radio Button -->
<input type="radio" name="choice" value="option1"> Option 1
<input type="radio" name="choice" value="option2"> Option 2

<!-- File Upload -->
<input type="file" accept="image/*">
```

### Other Form Elements
```html
<!-- Textarea -->
<textarea rows="4" cols="50" placeholder="Enter long text"></textarea>

<!-- Select Dropdown -->
<select id="country">
    <option value="">Choose...</option>
    <option value="usa">USA</option>
    <option value="uk">UK</option>
    <option value="canada">Canada</option>
</select>

<!-- Button -->
<button type="button">Click Me</button>
<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

### Labels
```html
<!-- Method 1: Using 'for' attribute -->
<label for="email">Email:</label>
<input type="email" id="email">

<!-- Method 2: Wrapping input -->
<label>
    Username:
    <input type="text" name="username">
</label>
```

---

## 🎯 Common HTML Attributes

### General Attributes
```html
<div id="uniqueId">Unique identifier</div>
<div class="className">CSS class</div>
<div style="color: red;">Inline CSS</div>
<div title="Tooltip text">Hover me</div>
<div hidden>Hidden element</div>
```

### Form Attributes
```html
<input type="text" 
       name="username"
       id="username"
       placeholder="Enter username"
       value="default value"
       required
       disabled
       readonly
       maxlength="20"
       minlength="3"
       pattern="[A-Za-z0-9]+">
```

### Link & Media Attributes
```html
<a href="page.html" target="_blank" rel="noopener">Link</a>
<img src="image.jpg" alt="Description" width="300" height="200">
```

---

## 🎨 CSS Basics

### Three Ways to Add CSS

#### 1. Inline CSS
```html
<p style="color: blue; font-size: 20px;">Blue text</p>
```

#### 2. Internal CSS
```html
<head>
    <style>
        p {
            color: blue;
            font-size: 20px;
        }
    </style>
</head>
```

#### 3. External CSS
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

### CSS Selectors
```css
/* Element Selector */
p {
    color: blue;
}

/* ID Selector */
#myId {
    color: red;
}

/* Class Selector */
.myClass {
    color: green;
}

/* Multiple Classes */
.class1.class2 {
    color: purple;
}

/* Descendant Selector */
div p {
    color: orange;
}

/* Child Selector */
div > p {
    color: pink;
}

/* Hover State */
button:hover {
    background-color: blue;
}

/* Focus State */
input:focus {
    border-color: green;
}
```

### Common CSS Properties

#### Text Styling
```css
.text-example {
    color: #333;
    font-size: 16px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 2px;
}
```

#### Box Model
```css
.box-example {
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 10px;
}
```

#### Background
```css
.background-example {
    background-color: #f0f0f0;
    background-image: url('image.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

#### Display & Layout
```css
.layout-example {
    display: block;        /* block, inline, inline-block, none */
    position: relative;    /* static, relative, absolute, fixed, sticky */
    top: 10px;
    left: 20px;
    z-index: 10;
    overflow: hidden;      /* visible, hidden, scroll, auto */
}
```

#### Flexbox
```css
.flex-container {
    display: flex;
    flex-direction: row;   /* row, column */
    justify-content: center; /* flex-start, flex-end, center, space-between */
    align-items: center;   /* flex-start, flex-end, center, stretch */
    gap: 10px;
}
```

#### Grid
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}
```

---

## 🎯 JavaScript Interaction with HTML

### Selecting Elements
```javascript
// By ID
const element = document.getElementById("myId");

// By Class
const elements = document.getElementsByClassName("myClass");

// By Tag
const paragraphs = document.getElementsByTagName("p");

// Query Selector (CSS selector)
const element = document.querySelector(".myClass");
const elements = document.querySelectorAll("p");
```

### Modifying Content
```javascript
// Change text content
element.textContent = "New text";

// Change HTML content
element.innerHTML = "<strong>Bold text</strong>";

// Change input value
inputElement.value = "New value";
```

### Modifying Styles
```javascript
// Inline style
element.style.color = "red";
element.style.fontSize = "20px";
element.style.backgroundColor = "blue";

// Add/remove classes
element.classList.add("active");
element.classList.remove("inactive");
element.classList.toggle("highlight");
```

### Event Listeners
```javascript
// Click event
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Input event
input.addEventListener("input", function() {
    console.log(input.value);
});

// Submit event
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted!");
});
```

---

## 📋 Practice Examples

See the example files:
- [basic-elements.html](basic-elements.html) - All HTML elements
- [form-examples.html](form-examples.html) - Form elements and inputs
- [css-examples.html](css-examples.html) - CSS styling examples
- [js-dom-examples.html](js-dom-examples.html) - JavaScript DOM manipulation

---

## 🎯 Key Takeaways

- **HTML** provides structure and content
- **CSS** provides styling and layout
- **JavaScript** provides interactivity
- Always use **semantic HTML** (header, nav, main, footer)
- Use **IDs** for unique elements
- Use **classes** for reusable styles
- **Labels** improve form accessibility
- **Placeholders** provide input hints
- **Forms** collect user data
- **Buttons** trigger actions
- **Scripts** go at end of `<body>` or use `defer`

---

## ⏭️ Next Step
[JavaScript Tutorial for Beginners](../01-tutorial-for-beginners/)

---

**Category:** HTML & CSS Fundamentals  
**Prerequisite:** None  
**Difficulty:** Beginner
