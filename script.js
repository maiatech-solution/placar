document.getElementById("start-game").addEventListener("click", function() {
    const teamAName = document.getElementById("team-a-name").value;
    const teamBName = document.getElementById("team-b-name").value;
    const maxScore = parseInt(document.getElementById("max-score").value);

    if (teamAName && teamBName && !isNaN(maxScore)) {
        document.getElementById("team-a-display").innerText = teamAName;
        document.getElementById("team-b-display").innerText = teamBName;

        document.getElementById("initial-screen").style.display = "none";
        document.getElementById("scoreboard").style.display = "block";

        // Reset scores
        document.getElementById("team-a-score").innerText = 0;
        document.getElementById("team-b-score").innerText = 0;

        document.getElementById("winner-message").style.display = "none";
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

let teamAScore = 0;
let teamBScore = 0;
const maxScore = parseInt(document.getElementById("max-score").value);

document.getElementById("btn-a-increase").addEventListener("click", function() {
    teamAScore++;
    updateScore();
});

document.getElementById("btn-a-decrease").addEventListener("click", function() {
    if (teamAScore > 0) {
        teamAScore--;
        updateScore();
    }
});

document.getElementById("btn-b-increase").addEventListener("click", function() {
    teamBScore++;
    updateScore();
});

document.getElementById("btn-b-decrease").addEventListener("click", function() {
    if (teamBScore > 0) {
        teamBScore--;
        updateScore();
    }
});

function updateScore() {
    document.getElementById("team-a-score").innerText = teamAScore;
    document.getElementById("team-b-score").innerText = teamBScore;

    if (teamAScore >= maxScore) {
        document.getElementById("winner-message").innerText = `${document.getElementById("team-a-display").innerText} venceu!`;
        document.getElementById("winner-message").style.display = "block";
    } else if (teamBScore >= maxScore) {
        document.getElementById("winner-message").innerText = `${document.getElementById("team-b-display").innerText} venceu!`;
        document.getElementById("winner-message").style.display = "block";
    }
}

document.getElementById("restart").addEventListener("click", function() {
    teamAScore = 0;
    teamBScore = 0;
    updateScore();
    document.getElementById("winner-message").style.display = "none";
});

document.getElementById("new-game").addEventListener("click", function() {
    document.getElementById("initial-screen").style.display = "block";
    document.getElementById("scoreboard").style.display = "none";
});
