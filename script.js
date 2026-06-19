let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const roundResultEl = document.getElementById('round-result');

const choices = ['rock', 'paper', 'scissors'];
const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };

function playRound(playerSelection) {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerSelection = choices[randomIndex];

    if (playerSelection === computerSelection) {
        roundResultEl.innerHTML = `🤝 <strong>It's a Tie!</strong><br>Both chose ${emojis[playerSelection]} ${playerSelection.toUpperCase()}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        roundResultEl.innerHTML = `🎉 <strong>You Win!</strong><br>${emojis[playerSelection]} ${playerSelection.toUpperCase()} beats ${emojis[computerSelection]} ${computerSelection.toUpperCase()}.`;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        roundResultEl.innerHTML = `😢 <strong>Computer Wins!</strong><br>${emojis[computerSelection]} ${computerSelection.toUpperCase()} beats ${emojis[playerSelection]} ${playerSelection.toUpperCase()}.`;
    }
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
