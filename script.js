let maxScore;
let scoreA = 0;
let scoreB = 0;
let teamAName = "";
let teamBName = "";

const startGameButton = document.getElementById("start-game");
const newGameButton = document.getElementById("new-game");
const resetGameButton = document.getElementById("reset-game");
const maxScoreInput = document.getElementById("max-score");
const teamAInput = document.getElementById("team-a-name");
const teamBInput = document.getElementById("team-b-name");
const scoreAElement = document.getElementById("score-a");
const scoreBElement = document.getElementById("score-b");
const winnerMessage = document.getElementById("winner-message");
const teamANameElement = document.getElementById("team-a-name-display");
const teamBNameElement = document.getElementById("team-b-name-display");

startGameButton.addEventListener("click", () => {
    maxScore = parseInt(maxScoreInput.value);
    teamAName = teamAInput.value || "Time A"; // Padrão caso o nome não seja inserido
    teamBName = teamBInput.value || "Time B"; // Padrão caso o nome não seja inserido
    scoreA = 0;
    scoreB = 0;
    updateScores();
    updateTeamNames();
    showGameScreen();
});

resetGameButton.addEventListener("click", () => {
    scoreA = 0;
    scoreB = 0;
    updateScores();
    winnerMessage.style.display = "none";
    enableButtons(); // Habilita os botões ao reiniciar o jogo
});

newGameButton.addEventListener("click", () => {
    scoreA = 0;
    scoreB = 0;
    maxScoreInput.value = "";
    teamAInput.value = "";
    teamBInput.value = "";
    hideGameScreen();
    maxScoreInput.focus();
});

document.getElementById("btn-a-increase").addEventListener("click", () => {
    scoreA++;
    checkWinner();
    updateScores();
});

document.getElementById("btn-a-decrease").addEventListener("click", () => {
    if (scoreA > 0) scoreA--;
    updateScores();
});

document.getElementById("btn-b-increase").addEventListener("click", () => {
    scoreB++;
    checkWinner();
    updateScores();
});

document.getElementById("btn-b-decrease").addEventListener("click", () => {
    if (scoreB > 0) scoreB--;
    updateScores();
});

function updateScores() {
    scoreAElement.textContent = scoreA;
    scoreBElement.textContent = scoreB;
}

function updateTeamNames() {
    teamANameElement.textContent = teamAName;
    teamBNameElement.textContent = teamBName;
}

function checkWinner() {
    if (scoreA >= maxScore) {
        winnerMessage.textContent = `Parabéns, ${teamAName} venceu!`;
        winnerMessage.style.display = "block";
        disableButtons();
    } else if (scoreB >= maxScore) {
        winnerMessage.textContent = `Parabéns, ${teamBName} venceu!`;
        winnerMessage.style.display = "block";
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll("button").forEach(button => {
        if (button !== resetGameButton && button !== newGameButton) {
            button.disabled = true;
        }
    });
}

function enableButtons() {
    document.querySelectorAll("button").forEach(button => {
        if (button !== resetGameButton && button !== newGameButton) {
            button.disabled = false;
        }
    });
}

function showGameScreen() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
}

function hideGameScreen() {
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
}
