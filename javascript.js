// Write a function called 'getcomputerSelection' that will randomly return either Rock Paper or Scissors
function getcomputerChoice() {
    var computerSelection = Math.random()
    // return computerSelection;
    if (computerSelection<0.34){
        computerSelection="rock";
    } else if(computerSelection<=0.67){
        computerSelection="paper";
    } else {
        computerSelection="scissors";
    }
    return computerSelection;
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function playRound (playerSelection, computerSelection) {
// convert all inputs to lower-case to compare it to available choice, otherwise, return "invalid choice"
    let playerChoice=playerSelection.toLowerCase();
    if (playerChoice=="rock"||playerChoice=="paper"||playerChoice=="scissors") {
        // console.log(computerSelection);
        if (playerChoice=="rock") {
            if (computerSelection=="paper") {
                return "You Lose! Paper beats Rock!";
            } else if (computerSelection=="scissors") {
                return "You Win! Rock beats Scissors"
            } else {
                return "It's a tie! You both choose Rock"
            }
        } else if (playerChoice=="paper") {
            if (computerSelection=="rock") {
                return "You Win! Paper beats Rock!";
            } else if (computerSelection=="scissors") {
                return "You Lose! Scissors beat Paper"
            } else {
                return "It's a tie! You both choose Paper"
            }
        } else {
            if (computerSelection=="rock") {
                return "You Lose! Rock beats Scissors!";
            } else if (computerSelection=="paper") {
                return "You Win! Scissors beat Paper"
            } else {
                return "It's a tie! You both choose Scissors"
            }
        }

    } else {
        return "Invalid Choice, please try again.";
    }
}

// ask user to choose rock, paper or scissors and assign it to variable playerSelection
const playerSelection=window.prompt("Rock, Paper or Scissors?","");

const computerSelection = getcomputerChoice();

console.log(playRound(playerSelection, computerSelection));