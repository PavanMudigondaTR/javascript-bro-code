// Canvas API - for drawing graphics on a webpage

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 500;
canvas.height = 500;

// Example: Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

// Example: Draw a circle
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(250, 250, 50, 0, Math.PI * 2);
ctx.fill();
