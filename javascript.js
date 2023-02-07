let computerSelection="";
let playerSelection="";

const buttons = document.querySelectorAll('.btn');

let userScore=0;
let computerScore=0;

const player = document.querySelector("#userScore");
player.textContent = `Player Score: ${userScore}`;

const computer = document.querySelector("#computerScore");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#output");
output.textContent = "Let the match begin! Choose ROCK, PAPER or SCISSORS!"

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    const computerSelection = getcomputerChoice();
    playGame();
  });
});

function getcomputerChoice() {
    computerSelection = Math.random()
    if (computerSelection<0.34){
        computerSelection="paper";
    } else if(computerSelection<=0.67){
        computerSelection="rock";
    } else {
        computerSelection="scissors";
    }
    return computerSelection;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection=="rock"||playerSelection=="paper"||playerSelection=="scissors") {
        if (playerSelection=="rock") {
            if (computerSelection=="paper") {
                output.textContent = "You Lose! Paper beats Rock!";
                computerScore++;
            } else if (computerSelection=="scissors") {
                output.textContent = "You Win! Rock beats Scissors";
                userScore++;
            } else {
                output.textContent = "It's a tie! You both chose Rock";
            }
        } else if (playerSelection=="paper") {
            if (computerSelection=="rock") {
                userScore++;
                output.textContent = "You Win! Paper beats Rock!";
            } else if (computerSelection=="scissors") {
                computerScore++;
                output.textContent = "You Lose! Scissors beat Paper"
            } else {
                output.textContent = "It's a tie! You both chose Paper"
            }
        } else {
            if (computerSelection=="rock") {
                computerScore++;
                output.textContent = "You Lose! Rock beats Scissors!";
            } else if (computerSelection=="paper") {
                userScore++;
                output.textContent = "You Win! Scissors beat Paper"
            } else {
                output.textContent = "It's a tie! You both chose Scissors"
            }
        }

    }
}

function playGame(){
    playRound(playerSelection,computerSelection);
    player.textContent = `Player Score: ${userScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (userScore == 5) {
        output.textContent = `You Won! Congratulations!`
        alert(`You Won! Congratulations!`);
        resetScore();
        player.textContent = `Player Score: ${userScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (computerScore==5){
        output.textContent = `Computer Wins! Try Again?`
        alert(output.textContent = `Computer Wins! Try Again?`);
        resetScore();
        player.textContent = `Player Score: ${userScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }

}

function resetScore() {
    userScore=0;
    computerScore=0;
}
