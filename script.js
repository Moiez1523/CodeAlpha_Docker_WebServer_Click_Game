let score = 0;
let timeLeft = 120; // 2 minutes
let timer;
let gameInterval;
let gameRunning = false;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const gameArea = document.getElementById("gameArea");
const btn = document.getElementById("startStopBtn");
const endMessage = document.getElementById("endMessage");

// Start/Stop button toggle
btn.onclick = () => {
    if(gameRunning){
        endGame(true); // stop manually
    } else {
        startGame();
    }
};

function startGame() {
    score = 0;
    timeLeft = 120;
    scoreEl.textContent = score;
    timeEl.textContent = timeLeft;
    endMessage.textContent = "";
    gameArea.innerHTML = "";
    clearInterval(timer);
    clearInterval(gameInterval);
    gameRunning = true;
    btn.textContent = "Stop Game";

    // Timer countdown
    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if(timeLeft <= 0) endGame(false);
    }, 1000);

    // Spawn targets
    gameInterval = setInterval(createTarget, 800);
}

function createTarget() {
    const target = document.createElement("div");
    target.classList.add("target");
    const x = Math.random() * (gameArea.clientWidth - 40);
    const y = Math.random() * (gameArea.clientHeight - 40);
    target.style.left = x + "px";
    target.style.top = y + "px";

    target.onclick = () => {
        score++;
        scoreEl.textContent = score;
        target.remove();
        if(score >= 10) endGame(true); // Win
    };

    gameArea.appendChild(target);

    // Remove target after 1 second
    setTimeout(() => {
        if(target.parentNode) target.remove();
    }, 1000);
}

function endGame(success) {
    clearInterval(timer);
    clearInterval(gameInterval);
    gameArea.innerHTML = "";
    gameRunning = false;
    btn.textContent = "Start Game";

    if(success && score >= 10){
        endMessage.textContent = "🎉 You won! Your Score: " + score;
    } else {
        endMessage.textContent = "💀 Game Over! Your Score: " + score + ". Goal was 10 points.";
    }
}
