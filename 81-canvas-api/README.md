# JavaScript Canvas API 🎨

## 📺 Video
[JavaScript canvas API](https://www.youtube.com/watch?v=<VIDEO_ID>&list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1&index=81)

## 📝 Description
Learn how to use the HTML5 Canvas API to draw graphics, shapes, and animations directly on a webpage using JavaScript.

## 🎯 What You'll Learn

- Canvas element basics
- 2D rendering context
- Drawing shapes (rectangles, circles, lines)
- Colors and styles
- Paths and strokes
- Canvas animations

## 💻 Code Example

```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

// Draw a circle
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(250, 250, 50, 0, Math.PI * 2);
ctx.fill();
```

## 🎯 Key Takeaways

- Canvas provides a drawing surface for JavaScript
- Use `getContext('2d')` to get 2D rendering context
- Many methods available for shapes, text, images
- Great for games and visualizations

---

**Difficulty:** Intermediate  
**Category:** Canvas & Graphics
