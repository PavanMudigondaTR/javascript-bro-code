# Learn JavaScript Logical Operators ❗

## 📺 Video
[Learn JavaScript LOGICAL OPERATORS in 5 minutes](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=17) (5:42)

## 📝 Description
Logical operators are used to combine or manipulate boolean values (true/false). Learn how to use AND (&&), OR (||), and NOT (!) operators to create complex conditions and make your code more powerful and flexible.

## 🎯 What You'll Learn

- Three logical operators: AND (&&), OR (||), NOT (!)
- Combining multiple conditions
- Checking ranges with AND
- Checking alternatives with OR
- Reversing boolean values with NOT
- Practical temperature and weather examples

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
    <script src="index.js"></script>
</body>
</html>
```

**Note:** This chapter focuses on JavaScript console examples. There is no interactive UI.

## 💻 Complete Code Example (from index.js)

```javascript
// logical operators = used to combine or manipulate boolean (true/false) values
//                    &&  (AND) both conditions must be true
//                    ||  (OR)  at least one condition must be true
//                    !   (NOT) reverses boolean value of condition

// Example 1: AND operator (commented out)
// const temp = 20;
// if(temp > 0 && temp <= 30){
//     console.log("The weather is good!")
// }
// else{
//     console.log("The weather is bad!")    
// }

// Example 2: OR operator (commented out)
// if(temp <= 0 || temp > 30){
//     console.log("The weather is bad!")
// }
// else{
//     console.log("The weather is good!")    
// }

// Example 3: NOT operator (active code)
const isSunny = true;

if(!isSunny){
    console.log("It is CLOUDY")
}
else{
    console.log("It is SUNNY!")    
}
// Output with isSunny = true: "It is SUNNY!"
// Output with isSunny = false: "It is CLOUDY"
```

## 💻 The Three Logical Operators

**From transcript:** "Logical operators are used to combine or manipulate Boolean values. Boolean values if you remember are true or false."

### 1. AND Operator (&&)
**Both conditions must be true**

**From transcript:** "In order for us to execute this if statement, both these conditions need to be true - this one AND this one."

```javascript
const temp = 25;

// Check if temperature falls within range (0 to 30)
if (temp > 0 && temp <= 30) {
    console.log("The weather is good!");
} else {
    console.log("The weather is bad!");
}
// Output: "The weather is good!"

// Test with temp = -100: "The weather is bad!"
// Test with temp = 200: "The weather is bad!"
```

**How it works:** To join two conditions you use double ampersand (`&&`) meaning AND. If one of these is false, we don't execute it at all - we'll skip over it.

### 2. OR Operator (||)
**At least one condition must be true**

**From transcript:** "With the OR logical operator at least one of these conditions needs to be true. This has to be true OR that has to be true."

```javascript
const temp = 250;

// Check if temperature is outside acceptable range
if (temp <= 0 || temp > 30) {
    console.log("The weather is bad!");
} else {
    console.log("The weather is good!");
}
// Output: "The weather is bad!"

// Test with temp = -250: "The weather is bad!"
// Test with temp = 20: "The weather is good!"
```

**How it works:** Double straight bars (`||`) represent OR. Is this true? Yes, 250 is greater than 30. Or is the other condition true? Since at least one of these is true, we will execute this code.

### 3. NOT Operator (!)
**Reverses the boolean value**

**From transcript:** "Using the NOT logical operator we can flip a Boolean from true to false or false to true."

```javascript
const isSunny = true;

// Check if it's NOT sunny
if (!isSunny) {
    console.log("It is CLOUDY");
} else {
    console.log("It is SUNNY!");
}
// Output with isSunny = true: "It is SUNNY!"
// Output with isSunny = false: "It is CLOUDY"
```

**How it works:** The NOT logical operator (exclamation point `!`) will change true to be false and false to be true. We're checking "if it's NOT sunny".

## 📊 AND (&&) Truth Table

| Condition A | Condition B | A && B |
|-------------|-------------|--------|
| true | true | **true** |
| true | false | false |
| false | true | false |
| false | false | false |

**From transcript:** "Both these conditions need to be true. This is true AND this is true, so we will execute this code. If one of these was false, we don't execute it at all - we'll skip over it."

**All conditions must be true for AND to return true**

## 📊 OR (||) Truth Table

| Condition A | Condition B | A \|\| B |
|-------------|-------------|--------|
| true | true | **true** |
| true | false | **true** |
| false | true | **true** |
| false | false | false |

**From transcript:** "With the OR logical operator we're checking more than one condition. Is this true? Yes it is, negative 250 is less than zero. Or is this condition true? This one is false. But since at least one of these is true, we will execute this code."

**At least one condition must be true for OR to return true**

## 📊 NOT (!) Truth Table

| Condition | !Condition |
|-----------|------------|
| true | **false** |
| false | **true** |

**From transcript:** "The NOT logical operator - it'll change true to be false and false to be true."

**NOT reverses the boolean value**

## 💡 Practical Examples

### Example 1: Temperature Range (from transcript)

**The Problem:** "I would like to output 'the weather is good' only if my temperature falls between the range of 0 and 30."

```javascript
const temp = 20;

// Good weather: between 0 and 30 (Celsius)
if (temp > 0 && temp <= 30) {
    console.log("The weather is good!");
} else {
    console.log("The weather is bad!");
}

// Test cases from transcript:
// temp = -100: "The weather is bad!" (maybe the sun disappeared)
// temp = 200: "The weather is bad!" (Earth probably got hit by an asteroid)
// temp = 25: "The weather is good!"
```

### Example 2: Bad Weather Detection (OR example)

```javascript
const temp = -250;

if (temp <= 0 || temp > 30) {
    console.log("The weather is bad!");
} else {
    console.log("The weather is good!");
}
// Output: "The weather is bad!"
```

### Example 3: Sunny Weather Check (NOT example from actual code)

```javascript
const isSunny = true;

if (!isSunny) {
    console.log("It is CLOUDY");
} else {
    console.log("It is SUNNY!");
}
// Output with isSunny = true: "It is SUNNY!"
```

### Example 2: Age Verification
```javascript
const age = 25;

// Adult: 18 or older
if (age >= 18) {
    console.log("You are an adult");
}

// Senior discount: 65 or older
if (age >= 65) {
    console.log("You qualify for senior discount");
}

// Child ticket: under 12 OR senior (65+)
if (age < 12 || age >= 65) {
    console.log("Discounted ticket available");
}
```

### Example 3: Login Validation
```javascript
const username = "admin";
const password = "pass123";
const isLoggedIn = false;

if (username === "admin" && password === "pass123") {
    console.log("Login successful!");
} else {
    console.log("Invalid credentials");
}

// Check if NOT logged in
if (!isLoggedIn) {
    console.log("Please log in");
}
```

### Example 4: Weekend Checker
```javascript
const day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else {
    console.log("It's a weekday");
}
```

### Example 5: Driving Eligibility
```javascript
const age = 20;
const hasLicense = true;

if (age >= 16 && hasLicense) {
    console.log("You can drive");
} else if (age >= 16 && !hasLicense) {
    console.log("You're old enough but need a license");
} else {
    console.log("You're not old enough to drive");
}
```

## 🔄 Combining Multiple Operators

### Complex Conditions
```javascript
const age = 25;
const hasLicense = true;
const hasCar = true;

// Can drive if: over 16 AND has license AND has car
if (age >= 16 && hasLicense && hasCar) {
    console.log("You can drive your car");
}

// Weekend OR holiday
const day = "Saturday";
const isHoliday = false;

if (day === "Saturday" || day === "Sunday" || isHoliday) {
    console.log("Day off!");
}
```

### Grouping with Parentheses
```javascript
const age = 25;
const isStudent = true;
const isSenior = false;

// Discount for students OR seniors (both under certain conditions)
if ((age < 26 && isStudent) || (age >= 65 && isSenior)) {
    console.log("You get a discount!");
}
```

## ⚡ Short-Circuit Evaluation

### AND (&&) Short-Circuit
```javascript
// If first is false, second is never checked
false && console.log("This won't print");

// If first is true, second is evaluated
true && console.log("This will print");
```

### OR (||) Short-Circuit
```javascript
// If first is true, second is never checked
true || console.log("This won't print");

// If first is false, second is evaluated
false || console.log("This will print");
```

### Practical Use: Default Values
```javascript
let username = "";
let displayName = username || "Guest";  // "Guest" (username is falsy)

username = "John";
displayName = username || "Guest";  // "John" (username is truthy)
```

## 📋 Practice Exercises

### Exercise 1: Grade Checker
```javascript
let grade = 85;
// Check if grade is between 60 and 100 (passing range)
```

### Exercise 2: Access Control
```javascript
let role = "admin";
let isAuthenticated = true;
// Grant access if authenticated AND (role is admin OR moderator)
```

### Exercise 3: Promotion Eligibility
```javascript
let yearsWorked = 5;
let performance = "excellent";
// Eligible if: 3+ years AND excellent performance
```

### Exercise 4: Ticket Pricing
```javascript
let age = 10;
let isStudent = true;
// Free if under 5, discounted if student OR senior (65+)
```

## 🚨 Common Mistakes

### 1. Incorrect Range Check
```javascript
// ❌ Wrong - doesn't work as expected
if (0 < temp < 30) { }

// ✅ Correct - use AND
if (temp > 0 && temp < 30) { }
```

### 2. Confusing AND with OR
```javascript
// Check if age is 18 OR 21
// ❌ Wrong
if (age === 18 && age === 21) { }  // Can't be both!

// ✅ Correct
if (age === 18 || age === 21) { }
```

### 3. Multiple OR Checks
```javascript
const color = "red";

// ❌ Doesn't work
if (color === "red" || "blue" || "green") { }

// ✅ Correct
if (color === "red" || color === "blue" || color === "green") { }
```

## 💡 Practical Patterns

### Range Checking
```javascript
// Between two values
if (score >= 0 && score <= 100) { }

// Outside a range
if (temp < 0 || temp > 100) { }
```

### Multiple Conditions
```javascript
// All must be true
if (cond1 && cond2 && cond3) { }

// At least one must be true
if (cond1 || cond2 || cond3) { }
```

### Negation
```javascript
// NOT equal to
if (status !== "active") { }

// NOT in list
if (!(color === "red" || color === "blue")) { }
```

## 🎯 Key Takeaways

**From transcript:** "Logical operators - they're used to combine or manipulate Boolean values."

- **&&** (AND) - "Use AND to check to see if at least two conditions are true" (from transcript)
  - Both conditions must be true
  - Double ampersand
  - If one is false, entire condition is false
  
- **||** (OR) - "At least one condition needs to be true" (from transcript)
  - At least one condition must be true
  - Double straight bars
  - Only false when all conditions are false
  
- **!** (NOT) - "NOT will do the opposite" (from transcript)
  - Reverses boolean value
  - Exclamation point
  - Changes true to false and false to true
  
- Use **AND** for range checking (e.g., temp > 0 && temp <= 30)
- Use **OR** for multiple acceptable options
- Use **NOT** to flip a boolean condition
- Use **parentheses** for complex conditions
- Test each condition **individually** when debugging

## ⏭️ Next Lesson
[JavaScript STRICT EQUALITY](../18-strict-equality/)

---

**Duration:** 5:42  
**Difficulty:** Beginner  
**Category:** Operators & Logic
