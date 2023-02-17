const buttons = document.querySelectorAll('.btn');
const playerScoreElement = document.querySelector("#userScore");
const computerScoreElement = document.querySelector("#computerScore");
const outputElement = document.querySelector("#output");

let userScore = 0;
let computerScore = 0;

playerScoreElement.textContent = `Player Score: ${userScore}`;
computerScoreElement.textContent = `Computer Score: ${computerScore}`;
outputElement.textContent = "Let the match begin! Choose ROCK, PAPER or SCISSORS!"

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerScoreElement.textContent = `Player Score: ${userScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    checkForWinner();
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const winner = determineWinner(playerSelection, computerSelection);
  if (winner === 'player') {
    userScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
  outputElement.textContent = `${winner === 'tie' ? "It's a tie!" : `${winner} wins! ${winner === 'player' ? playerSelection : computerSelection} beats ${winner === 'player' ? computerSelection : playerSelection}`}`;
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  }
  if (playerSelection === 'rock') {
    return computerSelection === 'paper' ? 'computer' : 'player';
  }
  if (playerSelection === 'paper') {
    return computerSelection === 'scissors' ? 'computer' : 'player';
  }
  if (playerSelection === 'scissors') {
    return computerSelection === 'rock' ? 'computer' : 'player';
  }
}

function checkForWinner() {
  if (userScore === 5) {
    outputElement.textContent = `You won! Congratulations!`;
    resetScore();
  } else if (computerScore === 5) {
    outputElement.textContent = `Computer wins! Try again?`;
    resetScore();
  }
}

function resetScore() {
  userScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = `Player Score: ${userScore}`;
  computerScoreElement.textContent = `Computer Score: ${computerScore}`;
}
