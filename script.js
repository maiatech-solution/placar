document.getElementById("start-game").addEventListener("click", function() {
    const maxPoints = parseInt(document.getElementById("max-points").value);
    const teamAName = document.getElementById("team-a-name").value;
    const teamBName = document.getElementById("team-b-name").value;

    if (!maxPoints || !teamAName || !teamBName) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Atualiza os nomes dos times
    document.getElementById("team-a-display").innerText = teamAName;
    document.getElementById("team-b-display").innerText = teamBName;

    // Oculta a tela inicial e mostra a tela de placar
    document.querySelector(".container").style.display = "none"; // Esconde a tela inicial
    document.querySelector(".score-container").style.display = "flex"; // Mostra a tela de placar

    // Reseta os pontos
    document.getElementById("team-a-score").innerText = "0";
    document.getElementById("team-b-score").innerText = "0";
    document.getElementById("winner-message").innerText = ""; // Limpa a mensagem de vencedor

    // Adiciona eventos para aumentar e diminuir pontos
    addScoreEventListeners(maxPoints);

    // Adiciona evento para reiniciar o jogo
    document.getElementById("restart").addEventListener("click", function() {
        document.getElementById("team-a-score").innerText = "0";
        document.getElementById("team-b-score").innerText = "0";
        document.getElementById("winner-message").innerText = ""; // Limpa a mensagem
        enableScoreButtons(); // Habilita os botões ao reiniciar
    });

    // Adiciona evento para novo jogo
    document.getElementById("new-game").addEventListener("click", function() {
        // Reseta os campos e esconde a tela de placar
        document.querySelector(".score-container").style.display = "none"; // Esconde a tela de placar
        document.querySelector(".container").style.display = "block"; // Mostra a tela inicial novamente
        document.getElementById("max-points").value = "";
        document.getElementById("team-a-name").value = "";
        document.getElementById("team-b-name").value = "";
        document.getElementById("winner-message").innerText = ""; // Limpa a mensagem
    });
});

function addScoreEventListeners(maxPoints) {
    const increaseA = document.getElementById("increase-a");
    const decreaseA = document.getElementById("decrease-a");
    const increaseB = document.getElementById("increase-b");
    const decreaseB = document.getElementById("decrease-b");

    // Remove eventos anteriores para evitar múltiplas chamadas
    increaseA.removeEventListener("click", increaseA.listener);
    decreaseA.removeEventListener("click", decreaseA.listener);
    increaseB.removeEventListener("click", increaseB.listener);
    decreaseB.removeEventListener("click", decreaseB.listener);

    // Define novos listeners
    increaseA.listener = function() {
        updateScore('a', maxPoints);
    };
    decreaseA.listener = function() {
        updateScore('a', maxPoints, false);
    };
    increaseB.listener = function() {
        updateScore('b', maxPoints);
    };
    decreaseB.listener = function() {
        updateScore('b', maxPoints, false);
    };

    increaseA.addEventListener("click", increaseA.listener);
    decreaseA.addEventListener("click", decreaseA.listener);
    increaseB.addEventListener("click", increaseB.listener);
    decreaseB.addEventListener("click", decreaseB.listener);
}

function updateScore(team, maxPoints, isIncrease = true) {
    const scoreElement = document.getElementById(`team-${team}-score`);
    let score = parseInt(scoreElement.innerText);

    if (isIncrease) {
        score++;
    } else {
        score = Math.max(0, score - 1); // Não permitir pontuação negativa
    }

    scoreElement.innerText = score;

    // Verifica se algum time venceu
    if (score >= maxPoints) {
        const winningTeamName = document.getElementById(`team-${team}-display`).innerText;
        document.getElementById("winner-message").innerText = `${winningTeamName} venceu!`;
        
        // Mostra a mensagem de vencedor
        document.getElementById("winner-message").style.display = "block";

        // Desabilita os botões de aumentar e diminuir após a vitória
        disableScoreButtons();
    }
}

function disableScoreButtons() {
    document.getElementById("increase-a").disabled = true;
    document.getElementById("decrease-a").disabled = true;
    document.getElementById("increase-b").disabled = true;
    document.getElementById("decrease-b").disabled = true;
}

function enableScoreButtons() {
    document.getElementById("increase-a").disabled = false;
    document.getElementById("decrease-a").disabled = false;
    document.getElementById("increase-b").disabled = false;
    document.getElementById("decrease-b").disabled = false;
}
