# JavaScript Tutorial for Beginners 🌐

## 📺 Video
[JavaScript tutorial for beginners](https://www.youtube.com/watch?v=...) (12:03)

## 📝 Description
This is the first lesson in the JavaScript tutorial series. Learn everything you need to know to get started working with JavaScript as a beginner. JavaScript is a programming language used to create dynamic and interactive web pages that run on web browsers like Google Chrome, Safari, and Edge.

## 🎯 What You'll Learn

### JavaScript Basics
- What JavaScript is and why it's used
- How JavaScript adds interactivity to web pages
- The relationship between HTML (structure), CSS (style), and JavaScript (actions)

### Development Setup
- Using VS Code as your text editor
- Creating a project folder structure
- Setting up HTML, CSS, and JavaScript files
- Installing and using the Live Server extension

### Basic Output Methods
1. **console.log()** - Output text to the browser console
2. **window.alert()** - Create alert popup boxes
3. **document.getElementById()** - Select and modify HTML elements

### Working with HTML Elements
- Creating H1 headers and paragraph elements
- Setting unique IDs for elements
- Using JavaScript to modify text content dynamically

### Additional Concepts
- Adding comments (single-line `//` and multi-line `/* */`)
- Linking JavaScript files to HTML using `<script>` tags
- Proper placement of script tags (at the bottom of body)
- Using template literals with backticks

## 📁 Files
- `index.html` - Main HTML file (home page)
- `style.css` - CSS stylesheet for styling
- `index.js` - JavaScript file for interactivity

## 💻 Code Examples

### Basic Console Output
```javascript
console.log("Hello");
console.log("I like pizza");
```

### Alert Boxes
```javascript
window.alert("This is an alert");
window.alert("I like pizza");
```

### Modifying HTML Elements
```javascript
// Change H1 element text
document.getElementById("myH1").textContent = "Hello";

// Change paragraph element text
document.getElementById("myP").textContent = "I like pizza";
```

### HTML Setup
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
    <h1 id="myH1"></h1>
    <p id="myP"></p>
    
    <!-- Script tag at bottom of body -->
    <script src="index.js"></script>
</body>
</html>
```

### CSS Styling
```css
body {
    font-family: Verdana;
    font-size: 2em;
}
```

## 📋 Prerequisites
- Basic understanding of HTML and CSS (recommended)
- VS Code installed
- Live Server extension installed

## 🔑 Key Takeaways
- JavaScript makes web pages interactive and dynamic
- Use `console.log()` for debugging and testing
- Use `window.alert()` for user notifications
- Use `document.getElementById()` to select and modify HTML elements
- Comments help document your code for yourself and others
- Template literals (backticks) are useful for text output

## ⏭️ Next Lesson
[JavaScript VARIABLES](../02-variables/)

## 🔗 Resources
- [VS Code Download](https://code.visualstudio.com/)
- [Full JavaScript Playlist](https://www.youtube.com/playlist?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv)

---

**Duration:** 12:03  
**Topic:** JavaScript for Beginners  
**Difficulty:** Beginner