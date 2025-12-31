// Pong Game

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const player1ScoreText = document.getElementById('player1Score');
const player2ScoreText = document.getElementById('player2Score');
const restartBtn = document.getElementById('restartBtn');

// Game objects
const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;

let player1 = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 0,
    score: 0
};

let player2 = {
    x: canvas.width - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 0,
    score: 0
};

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: ballSize,
    dx: 4,
    dy: 4
};

const keys = {};

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawBall(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

function draw() {
    // Clear canvas
    drawRect(0, 0, canvas.width, canvas.height, '#000');
    
    // Draw center line
    ctx.setLineDash([5, 15]);
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Draw paddles
    drawRect(player1.x, player1.y, player1.width, player1.height, '#fff');
    drawRect(player2.x, player2.y, player2.width, player2.height, '#fff');
    
    // Draw ball
    drawBall(ball.x, ball.y, ball.size, '#fff');
}

function update() {
    // Move paddles
    player1.y += player1.dy;
    player2.y += player2.dy;
    
    // Paddle boundaries
    if (player1.y < 0) player1.y = 0;
    if (player1.y + player1.height > canvas.height) player1.y = canvas.height - player1.height;
    if (player2.y < 0) player2.y = 0;
    if (player2.y + player2.height > canvas.height) player2.y = canvas.height - player2.height;
    
    // Move ball
    ball.x += ball.dx;
    ball.y += ball.dy;
    
    // Ball collision with top/bottom
    if (ball.y - ball.size < 0 || ball.y + ball.size > canvas.height) {
        ball.dy *= -1;
    }
    
    // Ball collision with paddles
    if (ball.x - ball.size < player1.x + player1.width &&
        ball.y > player1.y && ball.y < player1.y + player1.height) {
        ball.dx *= -1;
    }
    
    if (ball.x + ball.size > player2.x &&
        ball.y > player2.y && ball.y < player2.y + player2.height) {
        ball.dx *= -1;
    }
    
    // Score
    if (ball.x - ball.size < 0) {
        player2.score++;
        player2ScoreText.textContent = player2.score;
        resetBall();
    }
    
    if (ball.x + ball.size > canvas.width) {
        player1.score++;
        player1ScoreText.textContent = player1.score;
        resetBall();
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = (Math.random() > 0.5 ? 1 : -1) * 4;
    ball.dy = (Math.random() > 0.5 ? 1 : -1) * 4;
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function handleKeyDown(e) {
    keys[e.key] = true;
    
    if (keys['w'] || keys['W']) player1.dy = -5;
    if (keys['s'] || keys['S']) player1.dy = 5;
    if (keys['ArrowUp']) player2.dy = -5;
    if (keys['ArrowDown']) player2.dy = 5;
}

function handleKeyUp(e) {
    keys[e.key] = false;
    
    if (!keys['w'] && !keys['W'] && !keys['s'] && !keys['S']) player1.dy = 0;
    if (!keys['ArrowUp'] && !keys['ArrowDown']) player2.dy = 0;
}

function restartGame() {
    player1.score = 0;
    player2.score = 0;
    player1ScoreText.textContent = 0;
    player2ScoreText.textContent = 0;
    resetBall();
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
restartBtn.addEventListener('click', restartGame);

gameLoop();
