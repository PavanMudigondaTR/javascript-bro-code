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

## 💻 String Method Examples

### charAt() - Get Character at Index

```javascript
let username = "BroCode";

console.log(username.charAt(0));  // "B"
console.log(username.charAt(1));  // "r"
console.log(username.charAt(6));  // "e"
```

### indexOf() - Find First Occurrence

```javascript
let username = "BroCode";

console.log(username.indexOf("o"));  // 2 (first 'o')
console.log(username.indexOf("C"));  // 3
console.log(username.indexOf("z"));  // -1 (not found)
```

### lastIndexOf() - Find Last Occurrence

```javascript
let username = "BroCode";

console.log(username.lastIndexOf("o"));  // 5 (last 'o')
```

### length - Get String Length

```javascript
let username = "BroCode";

console.log(username.length);  // 7
```

### trim() - Remove Whitespace

```javascript
let username = "   BroCode   ";

console.log(username.trim());  // "BroCode"
console.log(username.length);  // 13
console.log(username.trim().length);  // 7
```

### toUpperCase() / toLowerCase() - Change Case

```javascript
let username = "BroCode";

console.log(username.toUpperCase());  // "BROCODE"
console.log(username.toLowerCase());  // "brocode"
```

### repeat() - Repeat String

```javascript
let message = "Hello";

console.log(message.repeat(3));  // "HelloHelloHello"
```

### startsWith() - Check if Starts With

```javascript
let username = "BroCode";

console.log(username.startsWith("Bro"));   // true
console.log(username.startsWith("bro"));   // false (case-sensitive)
console.log(username.startsWith("Code"));  // false
```

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
let phoneNum = "123-456-7890";

phoneNum = phoneNum.replaceAll("-", "");
console.log(phoneNum);  // "1234567890"

phoneNum = phoneNum.replaceAll("-", "/");
console.log(phoneNum);  // "123/456/7890"
```

### padStart() / padEnd() - Add Padding

```javascript
let text = "pizza";

console.log(text.padStart(10, "x"));  // "xxxxxpizza"
console.log(text.padEnd(10, "x"));    // "pizzaxxxxx"
```

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

// Must reassign to change
name = name.toUpperCase();
console.log(name);  // "BRO"
```

### Methods are Case-Sensitive
```javascript
let text = "Hello";
text.includes("hello");  // false
text.toLowerCase().includes("hello");  // true
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
