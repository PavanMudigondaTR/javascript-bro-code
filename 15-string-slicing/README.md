# Learn JavaScript String Slicing ✂️

## 📺 Video
[Learn JavaScript STRING SLICING in 8 minutes!](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=15) (8:02)

## 📝 Description
String slicing is the process of creating a substring from a portion of another string. Learn how to extract parts of strings using the slice() method without modifying the original string.

## 🎯 What You'll Learn

- Using the slice() method
- Understanding string indices
- Extracting substrings
- Working with positive indices
- Using negative indices
- Creating first name, last name from full name
- Extracting first and last characters
- Combining slice() with indexOf()
- Extracting username and extension from email

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
    <script src="index.js"></script>
</body>
</html>
```

**Note:** This chapter focuses on JavaScript console examples. There is no interactive UI.

## 💻 Complete Code Example (from index.js)

```javascript
// string slicing = creating a substring
//                  from a portion of another string
//                  string.slice(start,end)

// Example 1: Full Name (commented out examples)
// const fullName = "Bro Code"

// firstName = fullName.slice(0, fullName.indexOf(" "))
// console.log(firstName)  // "Bro"

// lastName = fullName.slice(fullName.indexOf(" ")+1,)
// console.log(lastName)  // "Code"

// let firstChar = fullName.slice(0,1)
// console.log(firstChar)  // "B"

// let lastChar = fullName.slice(-1)
// console.log(lastChar)  // "e"

// Example 2: Email (active code)
const email = "Bro1@gmail.com"

let username = email.slice(0,email.indexOf("@"))
let extension = email.slice(email.indexOf("@")+1,)
console.log(username)   // "Bro1"
console.log(extension)  // "gmail.com"
```

## 💻 Basic Syntax

```javascript
string.slice(startIndex, endIndex)
```

- **startIndex** - Where to begin extraction (inclusive)
- **endIndex** - Where to end extraction (**exclusive**)
- **Returns** - A new substring
- **Original string** remains unchanged (won't alter the original string)

**From transcript:** "The ending index is actually exclusive. In my full name we're ending at 'o' but we don't include it within our substring because the ending index is exclusive."

```javascript
const text = "Bro";
text.slice(0, 2);  // "Br" (indices 0, 1 - NOT 2)
text.slice(0, 3);  // "Bro" (indices 0, 1, 2 - NOT 3)
```

## 📝 Core Examples

### Extract First Name

**Method 1: Using exact indices**
```javascript
const fullName = "Bro Code";
let firstName = fullName.slice(0, 3);
console.log(firstName);  // "Bro"

// Note: Index 3 is exclusive, so we get indices 0, 1, 2
```

**Method 2: Using indexOf() - More Dynamic (from transcript)**
```javascript
const fullName = "Broseph Code";  // Works with any name!
let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);  // "Broseph"
```

**From transcript:** "To make this program more dynamic we can combine string slicing with the indexOf method. We'll search the string for the first instance of a space, then depending on where that space is we'll take the first part of our full name and create a substring."

### Extract Last Name

**Method 1: With ending index**
```javascript
const fullName = "Bro Code";
let lastName = fullName.slice(4, 8);
console.log(lastName);  // "Code"
```

**Method 2: Without ending index (to end of string)**
```javascript
const fullName = "Bro Code";
let lastName = fullName.slice(4);
console.log(lastName);  // "Code"
```

**Method 3: Using indexOf() + 1 (from transcript)**
```javascript
const fullName = "Bro Code";
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);  // "Code" (no space!)
```

**From transcript:** "Find the first index of a space then start in the position after. That's why we're adding plus one, then give me every letter that comes after."

### Extract First Character

```javascript
const fullName = "Bro Code";
let firstChar = fullName.slice(0, 1);
console.log(firstChar);  // "B"
```

### Extract Last Character (Using Negative Index)

```javascript
const fullName = "Bro Code";
let lastChar = fullName.slice(-1);
console.log(lastChar);  // "e"
```

**From transcript:** "For the last character we can use a negative index. Even if you're using a negative index you'll begin at the end, then by decreasing the number you'll work your way towards the beginning."

```javascript
const fullName = "Bro Code";
fullName.slice(-1);  // "e" (last character)
fullName.slice(-2);  // "de" (last 2 characters)  
fullName.slice(-3);  // "ode"
fullName.slice(-4);  // "Code"
```

## 🔢 Understanding Indices

### Positive Indices (Count from Start)
```javascript
const name = "Bro Code";
//             0123456 (indices)

name.slice(0, 3);   // "Bro"
name.slice(4, 8);   // "Code"
```

### Negative Indices (Count from End)
```javascript
const name = "Bro Code";
//             -8-7-6-5-4-3-2-1 (negative indices)

name.slice(-1);     // "e" (last character)
name.slice(-2);     // "de" (last 2 characters)
name.slice(-4);     // "Code" (last 4 characters)
name.slice(-8, -5); // "Bro" (from -8 to -5)
```

## 💡 Practical Examples

### Extract Email Username and Extension (from actual code)

```javascript
const email = "Bro1@gmail.com";

// Extract username (everything before @)
let username = email.slice(0, email.indexOf("@"));
console.log(username);  // "Bro1"

// Extract extension (everything after @)
let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);  // "gmail.com"
```

**How it works:**
1. `email.indexOf("@")` finds the position of the @ symbol
2. First slice: from beginning (0) to @ position (exclusive)
3. Second slice: from position after @ to the end (no ending index needed)
4. Adding `+ 1` skips the @ symbol itself

**From transcript:** "I'll extract the first part of my email to be stored as a username... we'll end wherever the at symbol is... I would like to begin after this index, I will add plus one."

### Extract File Extension

```javascript
const fileName = "document.pdf";
let extension = fileName.slice(fileName.lastIndexOf("."));
console.log(extension);  // ".pdf"

// Or without the dot
extension = fileName.slice(fileName.lastIndexOf(".") + 1);
console.log(extension);  // "pdf"
```

### Extract Domain from URL

```javascript
const url = "https://www.example.com/page";
let domain = url.slice(url.indexOf("www"), url.indexOf(".com") + 4);
console.log(domain);  // "www.example.com"
```

### Get Middle of String

```javascript
const text = "Hello World";
let middle = text.slice(2, -2);
console.log(middle);  // "llo Wor"
```

## 📊 Index Reference

```javascript
const str = "JavaScript";
//          0123456789 (positive)
//          -10-9-8-7-6-5-4-3-2-1 (negative)

str.slice(0, 4);    // "Java"
str.slice(4);       // "Script"
str.slice(-6);      // "Script"
str.slice(0, -6);   // "Java"
str.slice(-10, -6); // "Java"
str.slice(4, -2);   // "Scri"
```

## 📋 Practice Exercises

### Exercise 1: Full Name Parser
```javascript
const fullName = "John Michael Smith";
// Extract first, middle, and last names
```

### Exercise 2: Phone Number Parser
```javascript
const phone = "(123) 456-7890";
// Extract area code, prefix, and line number
```

### Exercise 3: Date Parser
```javascript
const date = "2025-12-19";
// Extract year, month, and day
```

### Exercise 4: File Name Cleaner
```javascript
const file = "report_2025_final.pdf";
// Extract just "report" (everything before first underscore)
```

## 🔍 Important Notes

### Ending Index is Exclusive

```javascript
const text = "Hello";
text.slice(0, 3);  // "Hel" (indices 0, 1, 2 - NOT 3)
```

**From transcript:** "The ending index is actually exclusive. In my full name we're ending at 'o' but we don't include it within our substring because the ending index is exclusive."

### Original String Unchanged

```javascript
const original = "JavaScript";
const sliced = original.slice(0, 4);

console.log(sliced);     // "Java"
console.log(original);   // "JavaScript" (unchanged!)
```

**From transcript:** "This won't alter the original string... I've proven that by setting this string to be a constant. You can't change a constant."

### Omitting End Index

```javascript
const text = "Hello World";
text.slice(6);     // "World" (from index 6 to end)
text.slice(-5);    // "World" (last 5 characters)
```

## 🔄 slice() vs substring() vs substr()

```javascript
const str = "JavaScript";

// slice() - Recommended
str.slice(0, 4);       // "Java"
str.slice(-6);         // "Script"

// substring() - Similar but doesn't support negative indices
str.substring(0, 4);   // "Java"
str.substring(-6);     // "JavaScript" (treats negative as 0)

// substr() - DEPRECATED, don't use
str.substr(0, 4);      // "Java" (second param is length, not end index)
```

**Best Practice:** Use `slice()` - it's most flexible and consistent!

## 🎯 Key Takeaways

- **String slicing** = creating a substring from a portion of another string
- **slice()** extracts a portion of a string without altering the original
- **startIndex** is inclusive, **endIndex** is exclusive
- **Negative indices** count from the end (begin at the end, work towards beginning)
- **Original string** is never modified (can use const)
- Omit **endIndex** to slice to end of string
- **Combine with indexOf()** for dynamic slicing (more flexible than hardcoded indices)
- Add **+ 1** to start position to skip delimiter characters (like spaces or @)
- **slice()** is the recommended method (over substring/substr)
- Returns **empty string** if startIndex >= endIndex

**From transcript:** "String slicing is the process of creating a substring from a portion of another string. When you create a substring you won't alter the original."

## ⏭️ Next Lesson
[JavaScript METHOD CHAINING](../16-method-chaining/)

---

**Duration:** 8:02  
**Difficulty:** Beginner  
**Category:** Strings
