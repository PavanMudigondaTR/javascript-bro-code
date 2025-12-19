# Learn JavaScript Logical Operators ❗

## 📺 Video
[Learn JavaScript LOGICAL OPERATORS in 5 minutes](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=17) (5:42)

## 📝 Description
Logical operators are used to combine or manipulate boolean values (true/false). Learn how to use AND (&&), OR (||), and NOT (!) operators to create complex conditions and make your code more powerful and flexible.

## 🎯 What You'll Learn

- Three logical operators: AND, OR, NOT
- Combining multiple conditions
- Truth tables for each operator
- Short-circuit evaluation
- Practical examples with ranges and validation

## 💻 The Three Logical Operators

### 1. AND Operator (&&)
**Both conditions must be true**

```javascript
const temp = 25;

if (temp > 0 && temp <= 30) {
    console.log("The weather is GOOD");
} else {
    console.log("The weather is BAD");
}
// Output: "The weather is GOOD"
```

### 2. OR Operator (||)
**At least one condition must be true**

```javascript
const temp = -5;

if (temp <= 0 || temp > 30) {
    console.log("The weather is BAD");
} else {
    console.log("The weather is GOOD");
}
// Output: "The weather is BAD"
```

### 3. NOT Operator (!)
**Reverses the boolean value**

```javascript
const isSunny = false;

if (!isSunny) {
    console.log("It is CLOUDY");
} else {
    console.log("It is SUNNY");
}
// Output: "It is CLOUDY"
```

## 📊 AND (&&) Truth Table

| Condition A | Condition B | A && B |
|-------------|-------------|--------|
| true | true | **true** |
| true | false | false |
| false | true | false |
| false | false | false |

**All conditions must be true for AND to return true**

## 📊 OR (||) Truth Table

| Condition A | Condition B | A \|\| B |
|-------------|-------------|--------|
| true | true | **true** |
| true | false | **true** |
| false | true | **true** |
| false | false | false |

**At least one condition must be true for OR to return true**

## 📊 NOT (!) Truth Table

| Condition | !Condition |
|-----------|------------|
| true | **false** |
| false | **true** |

**NOT reverses the boolean value**

## 💡 Practical Examples

### Example 1: Temperature Range
```javascript
const temp = 20;

// Good weather: between 0 and 30
if (temp > 0 && temp <= 30) {
    console.log("The weather is GOOD");
}
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

- **&&** (AND) - All conditions must be true
- **||** (OR) - At least one condition must be true
- **!** (NOT) - Reverses boolean value
- Use **parentheses** for complex conditions
- **Short-circuit evaluation** stops early when result is known
- **Range checking** requires AND operator
- **Multiple options** use OR operator
- Test each condition **individually** when debugging

## ⏭️ Next Lesson
[JavaScript STRICT EQUALITY](../18-strict-equality/)

---

**Duration:** 5:42  
**Difficulty:** Beginner  
**Category:** Operators & Logic
