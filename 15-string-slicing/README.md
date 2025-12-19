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

## 💻 Basic Syntax

```javascript
string.slice(startIndex, endIndex)
```

- **startIndex** - Where to begin extraction (inclusive)
- **endIndex** - Where to end extraction (exclusive)
- **Returns** - A new substring
- **Original string** remains unchanged

## 📝 Core Examples

### Extract First Name

```javascript
const fullName = "Bro Code";
let firstName = fullName.slice(0, 3);
console.log(firstName);  // "Bro"

// Note: Index 3 is exclusive, so we get indices 0, 1, 2
```

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

### Extract Email Username

```javascript
const email = "bro@gmail.com";
let username = email.slice(0, email.indexOf("@"));
console.log(username);  // "bro"
```

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

### Original String Unchanged

```javascript
const original = "JavaScript";
const sliced = original.slice(0, 4);

console.log(sliced);     // "Java"
console.log(original);   // "JavaScript" (unchanged!)
```

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

- **slice()** extracts a portion of a string
- **startIndex** is inclusive, **endIndex** is exclusive
- **Negative indices** count from the end
- **Original string** is never modified
- Omit **endIndex** to slice to end of string
- Works great with **indexOf()** to find positions
- **slice()** is the recommended method (over substring/substr)
- Returns **empty string** if startIndex >= endIndex

## ⏭️ Next Lesson
[JavaScript METHOD CHAINING](../16-method-chaining/)

---

**Duration:** 8:02  
**Difficulty:** Beginner  
**Category:** Strings
