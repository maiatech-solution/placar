// Inicializa as variáveis
let scoreA = 0;
let scoreB = 0;
let maxScore = 0;

// Função para atualizar os placares
function updateScores() {
    document.getElementById('team-a-score').innerText = scoreA;
    document.getElementById('team-b-score').innerText = scoreB;

    if (scoreA >= maxScore) {
        document.getElementById('winner-message').innerText = `${document.getElementById('team-a-display').innerText} venceu!`;
        document.getElementById('winner-message').style.display = 'block';
        disableButtons();
    } else if (scoreB >= maxScore) {
        document.getElementById('winner-message').innerText = `${document.getElementById('team-b-display').innerText} venceu!`;
        document.getElementById('winner-message').style.display = 'block';
        disableButtons();
    }
}

// Função para desativar os botões após o jogo
function disableButtons() {
    document.getElementById('btn-a-increase').disabled = true;
    document.getElementById('btn-a-decrease').disabled = true;
    document.getElementById('btn-b-increase').disabled = true;
    document.getElementById('btn-b-decrease').disabled = true;
}

// Event listener para iniciar o jogo
document.getElementById('start-game').addEventListener('click', function() {
    const teamAName = document.getElementById('team-a-name').value.trim();
    const teamBName = document.getElementById('team-b-name').value.trim();
    maxScore = parseInt(document.getElementById('max-score').value);

    if (teamAName && teamBName && !isNaN(maxScore)) {
        document.getElementById('team-a-display').innerText = teamAName;
        document.getElementById('team-b-display').innerText = teamBName;
        document.getElementById('scoreboard').style.display = 'flex'; // Exibe a scoreboard
        document.getElementById('initial-screen').style.display = 'none'; // Oculta a tela inicial
        scoreA = 0;
        scoreB = 0;
        updateScores();
        document.getElementById('winner-message').style.display = 'none'; // Oculta mensagem de vencedor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Event listeners para aumentar e diminuir os placares
document.getElementById('btn-a-increase').addEventListener('click', function() {
    scoreA++;
    updateScores();
});

document.getElementById('btn-a-decrease').addEventListener('click', function() {
    if (scoreA > 0) scoreA--;
    updateScores();
});

document.getElementById('btn-b-increase').addEventListener('click', function() {
    scoreB++;
    updateScores();
});

document.getElementById('btn-b-decrease').addEventListener('click', function() {
    if (scoreB > 0) scoreB--;
    updateScores();
});

// Reiniciar o jogo
document.getElementById('restart').addEventListener('click', function() {
    scoreA = 0;
    scoreB = 0;
    updateScores();
    document.getElementById('winner-message').style.display = 'none'; // Oculta mensagem de vencedor
    enableButtons();
});

// Habilita os botões após reiniciar o jogo
function enableButtons() {
    document.getElementById('btn-a-increase').disabled = false;
    document.getElementById('btn-a-decrease').disabled = false;
    document.getElementById('btn-b-increase').disabled = false;
    document.getElementById('btn-b-decrease').disabled = false;
}

// Novo Jogo
document.getElementById('new-game').addEvent
