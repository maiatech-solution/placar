document.getElementById("start-game").addEventListener("click", function() {
    const maxPoints = document.getElementById("max-points").value;
    const teamAName = document.getElementById("team-a-name").value;
    const teamBName = document.getElementById("team-b-name").value;

    if (!maxPoints || !teamAName || !teamBName) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Atualiza os nomes dos times
    document.getElementById("team-a-display").innerText = teamAName;
    document.getElementById("team-b-display").innerText = teamBName;

    // Oculta a tela inicial
    document.querySelector(".container").style.display = "none"; // Esconde a tela inicial
    document.querySelector(".score-container").style.display = "flex"; // Mostra a tela de placar

    // Reseta os pontos
    document.getElementById("team-a-score").innerText = "0";
    document.getElementById("team-b-score").innerText = "0";

    // Adiciona evento para aumentar e diminuir pontos
    document.getElementById("increase-a").addEventListener("click", function() {
        updateScore('a', maxPoints);
    });

    document.getElementById("decrease-a").addEventListener("click", function() {
        updateScore('a', maxPoints, false);
    });

    document.getElementById("increase-b").addEventListener("click", function() {
        updateScore('b', maxPoints);
    });

    document.getElementById("decrease-b").addEventListener("click", function() {
        updateScore('b', maxPoints, false);
    });

    document.getElementById("restart").addEventListener("click", function() {
        document.getElementById("team-a-score").innerText = "0";
        document.getElementById("team-b-score").innerText = "0";
        document.getElementById("winner-message").innerText = "";
    });

    document.getElementById("new-game").addEventListener("click", function() {
        document.querySelector(".score-container").style.display = "none"; // Esconde a tela de placar
        document.querySelector(".container").style.display = "block"; // Mostra a tela inicial novamente
        document.getElementById("max-points").value = "";
        document.getElementById("team-a-name").value = "";
        document.getElementById("team-b-name").value = "";
        document.getElementById("winner-message").innerText = "";
    });
});

function updateScore(team, maxPoints, isIncrease = true) {
    const scoreElement = document.getElementById(`team-${team}-score`);
    let score = parseInt(scoreElement.innerText);

    if (isIncrease) {
        score++;
    } else {
        score = Math.max(0, score - 1); // Não permitir pontuação negativa
    }

    scoreElement.innerText = score;

    if (score >= maxPoints) {
        document.getElementById("winner-message").innerText = `Parabéns, ${document.getElementById(`team-${team}-display`).innerText} venceu!`;
    }
}
