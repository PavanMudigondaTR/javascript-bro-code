# Learn JavaScript Variables 📦

## 📺 Video
[Learn JavaScript VARIABLES in 13 minutes!](https://www.youtube.com/watch?v=W7KdGzGbW8Y&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=2) (12:45)

## 📝 Description
Variables are containers that store values in JavaScript. Learn how to declare and assign variables, understand different data types (numbers, strings, booleans), and display values in both the console and on web pages.

## 🎯 What You'll Learn

- Variable declaration and assignment
- The `let` keyword
- Three basic data types: numbers, strings, and booleans
- Using `typeof` to check data types
- Template literals for displaying variables
- Displaying variables in HTML elements
- Variable naming best practices

## 💻 Variable Basics

### What is a Variable?
A **variable** is a container that stores a value. The variable behaves as if it were the value it contains.

### Two Steps to Create a Variable

#### 1. Declaration
Use the `let` keyword to declare a variable:

```javascript
let x;
let y;
```

**Important:** Each variable name must be unique!

```javascript
let x;
let x;  // ❌ Error: identifier 'x' has already been declared
```

#### 2. Assignment
Assign a value to your variable using `=`:

```javascript
let x;
x = 100;
console.log(x);  // Output: 100
```

#### Combined Declaration & Assignment
```javascript
// Both steps at once
let x = 123;
console.log(x);  // Output: 123
```

## 📊 Data Type 1: Numbers

Numbers can be whole numbers or decimals.

### Examples

```javascript
// Age
let age = 25;
console.log(age);  // 25

// Price
let price = 10.99;
console.log(price);  // 10.99

// GPA (Grade Point Average)
let gpa = 2.1;
console.log(gpa);  // 2.1
```

### Template Literals
Use backticks `` ` `` and `${}` to insert variables into strings:

```javascript
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(`You are ${age} years old`);
// Output: You are 25 years old

console.log(`The price is $${price}`);
// Output: The price is $10.99

console.log(`Your GPA is: ${gpa}`);
// Output: Your GPA is: 2.1
```

### Check Data Type
Use `typeof` to check a variable's type:

```javascript
let age = 25;
console.log(typeof age);  // number

let price = 10.99;
console.log(typeof price);  // number
```

## 📝 Data Type 2: Strings

A **string** is a series of characters. Use double quotes `"` or single quotes `'`.

### Examples

```javascript
// First name
let firstName = "Bro";
console.log(typeof firstName);  // string
console.log(firstName);  // Bro

// Favorite food
let favoriteFood = "pizza";
console.log(`You like ${favoriteFood}`);
// Output: You like pizza

// Email
let email = "bro123@gmail.com";
console.log(`Your email is ${email}`);
// Output: Your email is bro123@gmail.com
```

### Strings Can Contain Numbers
```javascript
let username = "bro123";
console.log(username);  // bro123
console.log(typeof username);  // string
```

**Important:** Numbers inside strings are **text**, not numbers for math!

```javascript
let age = "25";  // String, not number
console.log(age + 5);  // "255" (concatenation, not addition)

let realAge = 25;  // Number
console.log(realAge + 5);  // 30 (actual addition)
```

## ✅ Data Type 3: Booleans

A **boolean** is either `true` or `false`. Typically used as flags in programs.

### Examples

```javascript
// Is someone online?
let online = true;
console.log(typeof online);  // boolean
console.log(`Bro is online: ${online}`);
// Output: Bro is online: true

// Is item for sale?
let forSale = true;
console.log(`Is this car for sale: ${forSale}`);
// Output: Is this car for sale: true

// Is student enrolled?
let isStudent = false;
console.log(`Enrolled: ${isStudent}`);
// Output: Enrolled: false
```

### When to Use Booleans
Booleans are typically used with **if statements** (covered later):

```javascript
let online = true;

if (online) {
    console.log("User is online");
} else {
    console.log("User is offline");
}
```

## 🌐 Displaying Variables in HTML

### HTML Setup
```html
<p id="p1"></p>
<p id="p2"></p>
<p id="p3"></p>
```

### JavaScript
```javascript
let fullName = "Bro Code";
let age = 25;
let isStudent = false;

// Simple assignment
document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = isStudent;
```

**Output on webpage:**
```
Bro Code
25
false
```

### Using Template Literals in HTML
```javascript
let fullName = "Bro Code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
```

**Output on webpage:**
```
Your name is Bro Code
You are 25 years old
Enrolled: false
```

## 📋 Complete Example

### JavaScript
```javascript
// Numbers
let age = 25;
let price = 10.99;
let gpa = 2.1;

// Strings
let firstName = "Bro";
let favoriteFood = "pizza";
let email = "bro@gmail.com";

// Booleans
let online = true;
let forSale = false;
let isStudent = true;

// Console output with template literals
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is: ${gpa}`);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);
console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
```

## 🔍 Checking Data Types

```javascript
let age = 25;
let name = "Bro";
let online = true;

console.log(typeof age);     // number
console.log(typeof name);    // string
console.log(typeof online);  // boolean
```

## 📋 Practice Exercises

### Exercise 1: Personal Info
Create variables for your personal information and display them:

```javascript
// Declare and assign variables
let fullName = "";     // Your full name
let age = 0;           // Your age
let city = "";         // Your city
let isStudent = false; // Are you a student?

// Display in console with template literals
// Your code here
```

### Exercise 2: Product Information
Create variables for a product:

```javascript
let productName = "";
let price = 0;
let inStock = false;

// Display: "Product: [name], Price: $[price], Available: [true/false]"
```

### Exercise 3: Data Types
Identify the data type:

```javascript
let a = 42;
let b = "42";
let c = true;
let d = "Hello";
let e = 3.14;

// Use typeof to check each one
```

### Exercise 4: HTML Display
Create variables and display them on a webpage:

```javascript
let userName = "Your Name";
let userAge = 0;
let isPremium = false;

// Display each in its own paragraph element
```

## 🎨 Variable Naming Best Practices

### ✅ Good Names
```javascript
let age = 25;
let firstName = "John";
let isStudent = true;
let totalPrice = 99.99;
let userEmail = "user@example.com";
```

### ❌ Bad Names
```javascript
let a = 25;           // Not descriptive
let x123 = "John";    // Meaningless
let thing = true;     // Too vague
let $ = 99.99;        // Confusing
```

### Rules for Variable Names
- ✅ Use camelCase: `firstName`, `totalPrice`
- ✅ Start with a letter, `_`, or `$`
- ✅ Can contain letters, numbers, `_`, `$`
- ❌ Cannot start with a number
- ❌ Cannot use reserved keywords (`let`, `if`, `true`, etc.)
- ❌ Cannot contain spaces or special characters

## 🆚 Data Type Comparison

| Type | Example | Use Case | typeof |
|------|---------|----------|--------|
| **Number** | `25`, `10.99`, `-5` | Math, calculations, age, price | `"number"` |
| **String** | `"Hello"`, `"Bro123"` | Text, names, messages, emails | `"string"` |
| **Boolean** | `true`, `false` | Flags, conditions, status | `"boolean"` |

## 🚨 Common Mistakes

### Mistake 1: Redeclaring Variables
```javascript
let age = 25;
let age = 30;  // ❌ Error: 'age' has already been declared

// ✅ Correct: Just reassign
let age = 25;
age = 30;  // Works!
```

### Mistake 2: String vs Number
```javascript
let age = "25";  // String!
console.log(age + 5);  // "255" (not 30!)

// ✅ Use number
let age = 25;
console.log(age + 5);  // 30
```

### Mistake 3: Forgetting Quotes for Strings
```javascript
let name = Bro;  // ❌ Error: Bro is not defined

// ✅ Correct
let name = "Bro";
```

## 💡 Key Concepts

### Declaration
Creating a variable with `let`:
```javascript
let age;
```

### Assignment
Giving the variable a value:
```javascript
age = 25;
```

### Both Together
```javascript
let age = 25;
```

### Template Literals
Embedding variables in strings:
```javascript
console.log(`I am ${age} years old`);
```

## 🎯 Key Takeaways

- **Variables** are containers that store values
- Use `let` to declare variables
- **Three basic data types:**
  - **Number:** 25, 10.99, -5
  - **String:** "text", "hello", "123"
  - **Boolean:** true, false
- **Declaration:** `let x;`
- **Assignment:** `x = 10;`
- **Both:** `let x = 10;`
- **Template literals** use backticks and `${variable}`
- Use `typeof` to check data type
- Variable names must be **unique**
- Use **camelCase** for multi-word names
- Variables behave **as if they were the value** they contain

## ⏭️ Next Lesson
[JavaScript ARITHMETIC OPERATORS](../03-arithmetic-operators/)

---

**Duration:** 12:45  
**Difficulty:** Beginner  
**Category:** Fundamentals
