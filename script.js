// Variáveis Globais de Controle
let maxPoints = 0;
let gameActive = false;

// Seleção de Elementos Fixos
const containerSetup = document.querySelector(".container");
const containerScore = document.querySelector(".score-container");
const winnerMessage = document.getElementById("winner-message");

const scoreAElement = document.getElementById("team-a-score");
const scoreBElement = document.getElementById("team-b-score");

const inputMaxPoints = document.getElementById("max-points");
const inputTeamA = document.getElementById("team-a-name");
const inputTeamB = document.getElementById("team-b-name");

// --- EVENTOS INICIAIS ---

document.getElementById("start-game").addEventListener("click", function () {
    maxPoints = parseInt(inputMaxPoints.value);
    const teamAName = inputTeamA.value;
    const teamBName = inputTeamB.value;

    if (!maxPoints || !teamAName || !teamBName) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Configura interface
    document.getElementById("team-a-display").innerText = teamAName;
    document.getElementById("team-b-display").innerText = teamBName;

    containerSetup.style.display = "none";
    containerScore.style.display = "flex";

    resetGame();
});

// Eventos de Pontuação (Definidos apenas uma vez no escopo global)
document.getElementById("increase-a").addEventListener("click", () => updateScore('a', true));
document.getElementById("decrease-a").addEventListener("click", () => updateScore('a', false));
document.getElementById("increase-b").addEventListener("click", () => updateScore('b', true));
document.getElementById("decrease-b").addEventListener("click", () => updateScore('b', false));

// Controle de Reinício
document.getElementById("restart").addEventListener("click", resetGame);

document.getElementById("new-game").addEventListener("click", function () {
    containerScore.style.display = "none";
    containerSetup.style.display = "block";
    // Limpa inputs para um novo jogo do zero
    inputMaxPoints.value = "";
    inputTeamA.value = "";
    inputTeamB.value = "";
});

// --- FUNÇÕES DE LÓGICA ---

function updateScore(team, isIncrease) {
    if (!gameActive) return;

    let scoreA = parseInt(scoreAElement.innerText);
    let scoreB = parseInt(scoreBElement.innerText);

    if (team === 'a') {
        scoreA = isIncrease ? scoreA + 1 : Math.max(0, scoreA - 1);
        scoreAElement.innerText = scoreA;
    } else {
        scoreB = isIncrease ? scoreB + 1 : Math.max(0, scoreB - 1);
        scoreBElement.innerText = scoreB;
    }

    checkWinner(scoreA, scoreB);
}

function checkWinner(scoreA, scoreB) {
    const diff = Math.abs(scoreA - scoreB);

    // Regra: Atingir o máximo E ter pelo menos 2 pontos de vantagem
    if ((scoreA >= maxPoints || scoreB >= maxPoints) && diff >= 2) {
        gameActive = false;
        
        const winningTeam = scoreA > scoreB 
            ? document.getElementById("team-a-display").innerText 
            : document.getElementById("team-b-display").innerText;

        winnerMessage.innerText = `🏆 ${winningTeam} venceu!`;
        winnerMessage.style.display = "block";
        disableScoreButtons(true);
    }
}

function resetGame() {
    scoreAElement.innerText = "0";
    scoreBElement.innerText = "0";
    winnerMessage.innerText = "";
    winnerMessage.style.display = "none";
    gameActive = true;
    disableScoreButtons(false);
}

function disableScoreButtons(status) {
    document.getElementById("increase-a").disabled = status;
    document.getElementById("decrease-a").disabled = status;
    document.getElementById("increase-b").disabled = status;
    document.getElementById("decrease-b").disabled = status;
}