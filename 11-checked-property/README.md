# JavaScript Checked Property ✅

## 📺 Video
[The JavaScript checked property is easy](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=11) (10:07)

## 📝 Description
Learn how to work with checkboxes and radio buttons using the checked property. Determine if a checkbox is checked or which radio button is selected, and respond accordingly in your JavaScript code.

## 🎯 What You'll Learn

- Creating HTML checkboxes and radio buttons
- Using the `.checked` property to determine checked state
- Grouping radio buttons with the `name` attribute
- Reading checkbox/radio button state
- Building interactive forms with onclick events
- Validating user selections
- Using the `for` attribute in labels

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
    <input type="checkbox" id="subscribeCheckBox" name="card">
    <label for="subscribeCheckBox">Subscribe</label><br><br>
    <input type="radio" id="visaRadioBtn" name="card">
    <label for="visaRadioBtn">Visa</label><br>
    <input type="radio" id="masterRadioBtn" name="card">
    <label for="masterRadioBtn">Master</label><br>
    <input type="radio" id="americanExpressRadioBtn" name="card">
    <label for="americanExpressRadioBtn">American Express</label><br>
    <input type="radio" id="paypalRadioBtn" name="card">
    <label for="paypalRadioBtn">PayPal</label><br><br>    
    <button type="button" id="submitBtn">Submit</button>
    <p id="subscriptionConfirmationMessage"></p>
    <p id="selectedPaymentMethodConfirmationMessage"></p>
    <script src="index.js"></script>
</body>
</html>
```

**Important:** 
- Radio buttons all have `name="card"` to group them together
- Only one radio button can be selected at a time from the same group
- Using `for` attribute in labels - clicking the label selects the input

## 💻 Complete JavaScript Implementation

```javascript
subscribeCheckBox = document.getElementById("subscribeCheckBox");
visaRadioBtn = document.getElementById("visaRadioBtn");
masterRadioBtn = document.getElementById("masterRadioBtn");
americanExpressRadioBtn = document.getElementById("americanExpressRadioBtn");
paypalRadioBtn = document.getElementById("paypalRadioBtn");
submitBtn = document.getElementById("submitBtn");
subscriptionConfirmationMessage = document.getElementById("subscriptionConfirmationMessage");
selectedPaymentMethodConfirmationMessage = document.getElementById("selectedPaymentMethodConfirmationMessage");

submitBtn.onclick = function() {
    // Check if the checkbox is checked
    if (subscribeCheckBox.checked) {
        subscriptionConfirmationMessage.textContent = "You are subscribed to the newsletter.";
    } else {
        subscriptionConfirmationMessage.textContent = "You are not subscribed to the newsletter.";
    }

    // Determine which radio button is selected
    let selectedPaymentMethod = "";
    if (visaRadioBtn.checked) {
        selectedPaymentMethod = "Visa";
    } else if (masterRadioBtn.checked) {
        selectedPaymentMethod = "MasterCard";
    } else if (americanExpressRadioBtn.checked) {
        selectedPaymentMethod = "American Express";
    } else if (paypalRadioBtn.checked) {
        selectedPaymentMethod = "PayPal";
    } else {
        selectedPaymentMethod = "No payment method selected.";
    }

    selectedPaymentMethodConfirmationMessage.textContent = `Selected Payment Method: ${selectedPaymentMethod}`;
};
```

### How It Works

1. **Get all elements** by their ID and store in variables
2. **Attach onclick event** to the submit button
3. **Check checkbox state:** Use `subscribeCheckBox.checked` (returns true/false)
4. **Check radio buttons:** Use if/else if statements to determine which is checked
5. **Update paragraph text content** based on selections
6. **Handle no selection:** Else clause for when no radio button is selected

## � Understanding the `.checked` Property

The **checked property** determines the checked state of an HTML checkbox or radio button element. By examining this property, we can determine if a checkbox is checked or a radio button is selected.

### Checkbox Example

```javascript
const myCheckbox = document.getElementById("myCheckbox");
const subResult = document.getElementById("subResult");

if (myCheckbox.checked) {
    subResult.textContent = "You are subscribed";
} else {
    subResult.textContent = "You are not subscribed";
}
```

**Explanation:** The `.checked` property evaluates to `true` or `false`. If true, execute the if block. If not, do something else.

### Radio Button Example (from transcript)

```javascript
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const paymentResult = document.getElementById("paymentResult");

if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with Visa";
} else if (mastercardBtn.checked) {
    paymentResult.textContent = "You are paying with Mastercard";
} else if (paypalBtn.checked) {
    paymentResult.textContent = "You are paying with Paypal";
} else {
    paymentResult.textContent = "You must select a payment type";
}
```

**Explanation:** Check each radio button's `.checked` property. The else clause handles when no radio button is selected.

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

- **Checked property** determines the checked state of HTML checkbox or radio button elements
- **`.checked`** returns `true` if checked, `false` if not
- Use for **checkboxes** (can check multiple) and **radio buttons** (select one from group)
- **Radio buttons** must have same `name` attribute to be grouped - only one can be selected
- **`<label for="id">`** connects label to input - clicking label selects/deselects input
- **Check state before processing** - radio buttons might not have any selection
- Always **handle the else case** for radio buttons (no selection)
- By examining the checked property, we can determine if elements are checked or not

## ⏭️ Next Lesson
[JavaScript TERNARY OPERATOR](../12-ternary-operator/)

---

**Duration:** 10:07  
**Difficulty:** Beginner  
**Category:** DOM & Forms
