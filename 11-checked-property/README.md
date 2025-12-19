# JavaScript Checked Property ✅

## 📺 Video
[The JavaScript checked property is easy](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=11) (10:07)

## 📝 Description
Learn how to work with checkboxes and radio buttons using the checked property. Determine if a checkbox is checked or which radio button is selected, and respond accordingly in your JavaScript code.

## 🎯 What You'll Learn

- Creating HTML checkboxes and radio buttons
- Using the `.checked` property
- Grouping radio buttons
- Reading checkbox/radio button state
- Building interactive forms
- Validating user selections

## 💻 HTML Setup

### Checkbox
```html
<input type="checkbox" id="myCheckbox">
<label for="myCheckbox">Subscribe</label>
```

### Radio Buttons
```html
<input type="radio" id="visaBtn" name="card" value="Visa">
<label for="visaBtn">Visa</label>

<input type="radio" id="mastercardBtn" name="card" value="Mastercard">
<label for="mastercardBtn">Mastercard</label>

<input type="radio" id="paypalBtn" name="card" value="Paypal">
<label for="paypalBtn">Paypal</label>
```

**Note:** Radio buttons must have the same `name` attribute to be grouped!

## 💻 JavaScript Examples

### Checking a Checkbox

```javascript
const myCheckbox = document.getElementById("myCheckbox");
const subResult = document.getElementById("subResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function() {
    if (myCheckbox.checked) {
        subResult.textContent = "You are subscribed!";
    } else {
        subResult.textContent = "You are NOT subscribed";
    }
};
```

### Checking Radio Buttons

```javascript
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const paymentResult = document.getElementById("paymentResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function() {
    if (visaBtn.checked) {
        paymentResult.textContent = "You are paying with Visa";
    } else if (mastercardBtn.checked) {
        paymentResult.textContent = "You are paying with Mastercard";
    } else if (paypalBtn.checked) {
        paymentResult.textContent = "You are paying with Paypal";
    } else {
        paymentResult.textContent = "Please select a payment method";
    }
};
```

## 🎨 Complete Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Form Example</title>
</head>
<body>
    <!-- Checkbox -->
    <input type="checkbox" id="myCheckbox">
    <label for="myCheckbox">Subscribe</label><br><br>
    
    <!-- Radio Buttons -->
    <input type="radio" id="visaBtn" name="card">
    <label for="visaBtn">Visa</label><br>
    
    <input type="radio" id="mastercardBtn" name="card">
    <label for="mastercardBtn">Mastercard</label><br>
    
    <input type="radio" id="paypalBtn" name="card">
    <label for="paypalBtn">Paypal</label><br><br>
    
    <!-- Submit Button -->
    <button id="mySubmit">Submit</button>
    
    <!-- Results -->
    <p id="subResult"></p>
    <p id="paymentResult"></p>
    
    <script src="index.js"></script>
</body>
</html>
```

## 🔍 Key Concepts

### The .checked Property

```javascript
// Returns true if checked, false if not
element.checked  // boolean

// Set checked state programmatically
element.checked = true;   // Check it
element.checked = false;  // Uncheck it
```

### Radio Button Groups

Radio buttons with the **same name** attribute are automatically grouped:
```html
<input type="radio" name="card" value="Visa">
<input type="radio" name="card" value="Mastercard">
<!-- Only ONE can be selected at a time -->
```

## 📋 Practice Exercises

### Exercise 1: Terms and Conditions
Create a checkbox for "I agree to terms" and disable the submit button until it's checked.

### Exercise 2: Multiple Choice Quiz
Create a quiz question with 4 radio button answers. Check if the correct one is selected.

### Exercise 3: Pizza Order Form
Checkboxes for toppings, radio buttons for size. Calculate total price.

### Exercise 4: Survey Form
Multiple questions with radio buttons. Collect and display all answers.

## 💡 Common Patterns

### Require Checkbox Before Submit
```javascript
submitBtn.onclick = function() {
    if (!agreeCheckbox.checked) {
        alert("You must agree to terms");
        return;
    }
    // Process form...
};
```

### Get Selected Radio Button Value
```javascript
function getSelectedPayment() {
    if (visaBtn.checked) return "Visa";
    if (mastercardBtn.checked) return "Mastercard";
    if (paypalBtn.checked) return "Paypal";
    return null;
}
```

### Toggle Checkbox
```javascript
checkbox.checked = !checkbox.checked;  // Flip state
```

## 🎯 Key Takeaways

- **`.checked` property** returns true/false
- Use for **checkboxes** (can check multiple) and **radio buttons** (select one)
- **Radio buttons** need the same `name` to be grouped
- **`<label for="id">`** makes clicking label check the input
- Check state **before processing** form data
- Can **set .checked programmatically** in JavaScript
- Always validate **radio button selection** (user might not select any)

## ⏭️ Next Lesson
[JavaScript TERNARY OPERATOR](../12-ternary-operator/)

---

**Duration:** 10:07  
**Difficulty:** Beginner  
**Category:** DOM & Forms
