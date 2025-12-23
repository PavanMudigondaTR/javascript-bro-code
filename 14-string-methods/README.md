# Useful JavaScript String Methods 🧵

## 📺 Video
[Useful JavaScript STRING METHODS](https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=14) (8:03)

## 📝 Description
String methods allow you to manipulate and work with text (strings) in JavaScript. Learn essential built-in methods for searching, modifying, and transforming strings without writing complex algorithms.

## 🎯 What You'll Learn

- charAt() - Get character at index
- indexOf() / lastIndexOf() - Find character position
- length - Get string length
- trim() - Remove whitespace
- toUpperCase() / toLowerCase() - Change case
- repeat() - Repeat strings
- startsWith() / endsWith() - Check beginning/end
- includes() - Check if contains substring
- replaceAll() - Replace text
- padStart() / padEnd() - Add padding

## � HTML Structure

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
// STRING METHODS = allow you to manipulate and work with text (strings)

let userName = "BroCode    "

// charAt() - Get character at specific index
// console.log(userName.charAt(1))  // "r"

// indexOf() - Find first occurrence
// console.log(userName.indexOf("o"))  // 2

// lastIndexOf() - Find last occurrence
console.log(userName.lastIndexOf("o"))  // 5

// trim() - Remove whitespace from both ends
console.log(userName.trim())  // "BroCode"

// toUpperCase() - Convert to uppercase
console.log(userName.toUpperCase())  // "BROCODE    "

// toLowerCase() - Convert to lowercase
console.log(userName.toLowerCase())  // "brocode    "

// startsWith() - Check if starts with specific character(s)
console.log(userName.startsWith(" "))  // false

if(userName.startsWith(" ")){
    console.log("your user name can't begin with white space")
}
else{
    console.log(userName)
}

let phoneNumber = "123-456-7890"

// replaceAll() - Replace all occurrences
console.log(phoneNumber.replaceAll("-",""))  // "1234567890"

// padStart() - Pad beginning until specified length
console.log(phoneNumber.padStart(15,"0"))  // "000123-456-7890"

// padEnd() - Pad end until specified length
console.log(phoneNumber.padEnd(15,"0"))  // "123-456-7890000"
```

## �💻 String Method Examples

### charAt() - Get Character at Index

```javascript
let userName = "BroCode";

console.log(userName.charAt(0));  // "B"
console.log(userName.charAt(1));  // "r" (from actual code)
console.log(userName.charAt(6));  // "e"
```

**How it works:** By adding a dot (`.`) we are accessing any properties or methods that the string has. `charAt()` returns the character at a specific index (0-based).

### indexOf() - Find First Occurrence

```javascript
let userName = "BroCode";

console.log(userName.indexOf("o"));  // 2 (first 'o')
console.log(userName.indexOf("C"));  // 3
console.log(userName.indexOf("z"));  // -1 (not found)
```

**How it works:** Returns the index of the first occurrence of a character. Returns -1 if not found.

### lastIndexOf() - Find Last Occurrence

```javascript
let userName = "BroCode";

console.log(userName.lastIndexOf("o"));  // 5 (last 'o' at position 0,1,2,3,4,5)
```

**How it works:** Returns the index of the last occurrence of a character. In "BroCode", the first 'o' is at index 2, the last 'o' is at index 5 (in "Code").

### length - Get String Length

```javascript
let username = "BroCode";

console.log(username.length);  // 7
```

### trim() - Remove Whitespace

```javascript
let userName = "BroCode    ";  // Trailing spaces

console.log(userName.trim());  // "BroCode"
console.log(userName.length);  // 11 (7 + 4 spaces)
console.log(userName.trim().length);  // 7
```

**How it works:** Trim removes whitespace from both the beginning and end of a string. The length of "BroCode    " is 11 characters (1,2,3,4,5,6,7 + 4 trailing spaces).

### toUpperCase() / toLowerCase() - Change Case

```javascript
let userName = "BroCode    ";

console.log(userName.toUpperCase());  // "BROCODE    " (spaces preserved)
console.log(userName.toLowerCase());  // "brocode    " (spaces preserved)
```

**Note:** These methods convert the case but preserve whitespace.

### repeat() - Repeat String

```javascript
let message = "Hello";

console.log(message.repeat(3));  // "HelloHelloHello"
```

### startsWith() - Check if Starts With

```javascript
let userName = "BroCode    ";

console.log(userName.startsWith(" "));   // false
console.log(userName.startsWith("Bro"));   // true
console.log(userName.startsWith("bro"));   // false (case-sensitive)
```

**Real-world use case (from actual code):**

```javascript
if(userName.startsWith(" ")){
    console.log("your user name can't begin with white space")
}
else{
    console.log(userName)
}
```

**How it works:** This returns a Boolean (true/false). Useful in if statements to validate user input.

### endsWith() - Check if Ends With

```javascript
let username = "BroCode";

console.log(username.endsWith("Code"));  // true
console.log(username.endsWith("Bro"));   // false
```

### includes() - Check if Contains

```javascript
let username = "BroCode";

console.log(username.includes("Bro"));   // true
console.log(username.includes("Code"));  // true
console.log(username.includes("bro"));   // false (case-sensitive)
console.log(username.includes("xyz"));   // false
```

### replaceAll() - Replace All Occurrences

```javascript
let phoneNumber = "123-456-7890";

// Replace all dashes with nothing (remove them)
console.log(phoneNumber.replaceAll("-",""));  // "1234567890"

// Or replace with a different character
console.log(phoneNumber.replaceAll("-","/"));  // "123/456/7890"
```

**How it works:** Replace all occurrences of the first character/string with the second character/string. Note: `replace()` only replaces the first occurrence, `replaceAll()` replaces all.

### padStart() / padEnd() - Add Padding

```javascript
let phoneNumber = "123-456-7890";

// padStart(length, character) - Pad at beginning
console.log(phoneNumber.padStart(15,"0"));  // "000123-456-7890"

// padEnd(length, character) - Pad at end
console.log(phoneNumber.padEnd(15,"0"));    // "123-456-7890000"
```

**How it works:** The first value is the specified length (how many characters should the string be). Pad the string with the given character until it reaches that length. If already longer, no padding is added.

## 📊 Quick Reference Table

| Method | Purpose | Returns |
|--------|---------|---------|
| charAt(index) | Get character at position | String |
| indexOf(char) | Find first occurrence | Number |
| lastIndexOf(char) | Find last occurrence | Number |
| length | Get string length | Number |
| trim() | Remove whitespace | String |
| toUpperCase() | Convert to uppercase | String |
| toLowerCase() | Convert to lowercase | String |
| repeat(n) | Repeat string n times | String |
| startsWith(str) | Check if starts with | Boolean |
| endsWith(str) | Check if ends with | Boolean |
| includes(str) | Check if contains | Boolean |
| replaceAll(old, new) | Replace all matches | String |
| padStart(len, char) | Pad at beginning | String |
| padEnd(len, char) | Pad at end | String |

## 📋 Practice Exercises

### Exercise 1: Email Validator
```javascript
let email = "  USER@EXAMPLE.COM  ";
// Trim, convert to lowercase, check if includes "@"
```

### Exercise 2: Phone Formatter
```javascript
let phone = "1234567890";
// Format to (123) 456-7890
```

### Exercise 3: Password Checker
```javascript
let password = "MyPass123";
// Check length, if includes number, contains uppercase
```

### Exercise 4: Name Formatter
```javascript
let name = "  john DOE  ";
// Trim, capitalize first letter of each word
```

## 💡 Common Patterns

### Check Empty String (After Trim)
```javascript
let input = "   ";
if (input.trim().length === 0) {
    console.log("Input is empty!");
}
```

### Case-Insensitive Comparison
```javascript
let answer = "PIZZA";
if (answer.toLowerCase() === "pizza") {
    console.log("Correct!");
}
```

### Clean Phone Number
```javascript
let phone = "(123) 456-7890";
phone = phone.replaceAll("(", "")
             .replaceAll(")", "")
             .replaceAll(" ", "")
             .replaceAll("-", "");
// "1234567890"
```

### Count Occurrences
```javascript
let text = "hello world hello";
let count = text.split("hello").length - 1;  // 2
```

## 🔍 Important Notes

### Strings are Immutable
```javascript
let name = "Bro";
name.toUpperCase();  // Returns "BRO" but doesn't change name
console.log(name);   // Still "Bro"

// Must reassign to change (reassignment pattern from actual code)
let userName = "BroCode    ";
userName = userName.trim();  // Reassign to save trimmed version
console.log(userName);  // "BroCode"
```

### Methods are Case-Sensitive
```javascript
let text = "Hello";
text.includes("hello");  // false
text.toLowerCase().includes("hello");  // true

// From transcript: startsWith is case-sensitive
let userName = "BroCode";
userName.startsWith("Bro");  // true
userName.startsWith("bro");  // false
```

### Accessing Properties and Methods with Dot Notation
From the transcript: "By adding a dot (`.`) we are accessing any properties or methods that the string has."

```javascript
let userName = "BroCode";
userName.length        // Property (no parentheses)
userName.charAt(0)     // Method (with parentheses)
userName.toUpperCase() // Method (with parentheses)
```

## 🎯 Key Takeaways

- String methods **don't modify original string** (immutable)
- Must **reassign** to save changes
- Many methods are **case-sensitive**
- **Chain methods** for complex operations
- **indexOf() returns -1** if not found
- **trim()** is essential for user input
- Use **includes()** for simple searching
- **replaceAll()** replaces all matches (replace() only replaces first)

## ⏭️ Next Lesson
[JavaScript STRING SLICING](../15-string-slicing/)

---

**Duration:** 8:03  
**Difficulty:** Beginner  
**Category:** Strings
