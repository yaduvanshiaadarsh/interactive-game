let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const roundResultEl = document.getElementById('round-result');

const choices = ['rock', 'paper', 'scissors'];

function playRound(playerSelection) {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerSelection = choices[randomIndex];

    if (playerSelection === computerSelection) {
        roundResultEl.textContent = `It's a tie! Both chose ${playerSelection}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        roundResultEl.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        roundResultEl.textContent = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
    }
}

document.getElementById('rock').addEventListener('click', function() {
    playRound('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playRound('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    playRound('scissors');
});

