# How to Accept JavaScript User Input 💬

## 📺 Video
[How to accept JavaScript USER INPUT in 5 minutes](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=4) (5:22)

## 📝 Description
Learn two different methods to accept user input in JavaScript - using window prompts (the easy way) and HTML text boxes with buttons (the professional way). This lesson covers how to capture, store, and use user input in your JavaScript applications.

## 🎯 What You'll Learn

### Two Methods of User Input
1. **Window Prompt** - Quick and easy method using built-in browser dialogs
2. **HTML Text Box** - Professional approach with custom UI elements

### Key Concepts
- Declaring and assigning variables
- Using `window.prompt()` for simple input
- Creating HTML form elements (input, label, button)
- Using `getElementById()` to access DOM elements
- Handling click events with `onclick`
- Getting values from input fields
- Updating page content dynamically

## 💻 Code Examples

### Method 1: Window Prompt (Easy Way)

```javascript
// Declare variable
let username;

// Assign using window prompt
username = window.prompt("What's your username?");

// Display the result
console.log(username);
```

**Alternative - Combined declaration and assignment:**
```javascript
let username = window.prompt("What's your username?");
console.log(username);
```

### Method 2: HTML Text Box (Professional Way)

**HTML Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Input</title>
</head>
<body>
    <h1 id="myH1">Welcome</h1>
    
    <label>Username:</label><br>
    <input type="text" id="myText"><br><br>
    <button id="mySubmit">Submit</button>
    
    <script src="index.js"></script>
</body>
</html>
```

**JavaScript:**
```javascript
// Declare username variable
let username;

// Select the submit button and add click event
document.getElementById("mySubmit").onclick = function() {
    // Get value from text box
    username = document.getElementById("myText").value;
    
    // Update H1 element with greeting
    document.getElementById("myH1").textContent = `Hello ${username}`;
};
```

## 🔍 Detailed Explanation

### Window Prompt Method
- **Pros:** Quick and easy to implement, no HTML needed
- **Cons:** Basic appearance, can't be styled, blocks page interaction
- **Best for:** Quick tests, simple scripts, learning

### HTML Text Box Method
- **Pros:** Full control over styling, better user experience, non-blocking
- **Cons:** Requires more code, need HTML structure
- **Best for:** Professional applications, production code

### onclick Event Handler
```javascript
document.getElementById("mySubmit").onclick = function() {
    // Code here runs when button is clicked
};
```
This creates an anonymous function that executes when the button is clicked.

### Getting Input Value
```javascript
document.getElementById("myText").value
```
The `.value` property retrieves the current text in an input field.

### Template Literals
```javascript
`Hello ${username}`
```
Use backticks (`) and `${}` to embed variables in strings.

## 📋 Practice Exercises

### Exercise 1: Age Calculator
Create a program that asks for the user's birth year and displays their age.

### Exercise 2: Greeting Generator
Ask for first name and last name separately, then display a full greeting.

### Exercise 3: Mad Libs
Create a simple Mad Libs game that asks for a noun, verb, and adjective, then creates a funny sentence.

### Exercise 4: Form Validation
Add a check to ensure the username isn't empty before displaying the greeting.

## 💡 Common Mistakes

1. **Forgetting to get the value**
   ```javascript
   // ❌ Wrong - gets the element, not the value
   username = document.getElementById("myText");
   
   // ✅ Correct - gets the actual text
   username = document.getElementById("myText").value;
   ```

2. **Wrong ID**
   ```javascript
   // Make sure IDs match exactly (case-sensitive)
   <input id="myText">  // HTML
   document.getElementById("myText")  // JavaScript - must match!
   ```

3. **Script placement**
   ```html
   <!-- Put <script> tag at end of body -->
   <body>
       <!-- HTML elements here -->
       <script src="index.js"></script>
   </body>
   ```

## 🎯 Key Takeaways

- `window.prompt()` is the quickest way to get user input
- HTML text boxes provide better user experience
- Use `getElementById()` to access HTML elements
- The `.value` property gets text from input fields
- The `onclick` property assigns functions to button clicks
- Template literals make string formatting easier
- Always declare variables before using them

## ⏭️ Next Lesson
[JavaScript TYPE CONVERSION](../05-type-conversion/) - Learn how to convert user input (strings) to numbers and other data types!

## 📚 Additional Resources

- [MDN - Window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [MDN - HTMLElement.onclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
- [MDN - HTMLInputElement.value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)

---

**Duration:** 5:22  
**Difficulty:** Beginner  
**Prerequisites:** Variables, basic HTML