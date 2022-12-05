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

let userScore=0;
let computerScore=0;

function playRound (playerSelection, computerSelection) {
// convert all inputs to lower-case to compare it to available choice, otherwise, return "invalid choice"
    let playerChoice=playerSelection.toLowerCase();
    if (playerChoice=="rock"||playerChoice=="paper"||playerChoice=="scissors") {
        // console.log(computerSelection);
        if (playerChoice=="rock") {
            if (computerSelection=="paper") {
                computerScore += 1;
                return "You Lose! Paper beats Rock!";
            } else if (computerSelection=="scissors") {
                userScore += 1;
                return "You Win! Rock beats Scissors"
            } else {
                return "It's a tie! You both choose Rock"
            }
        } else if (playerChoice=="paper") {
            if (computerSelection=="rock") {
                userScore += 1;
                return "You Win! Paper beats Rock!";
            } else if (computerSelection=="scissors") {
                computerScore += 1;
                return "You Lose! Scissors beat Paper"
            } else {
                return "It's a tie! You both choose Paper"
            }
        } else {
            if (computerSelection=="rock") {
                computerScore += 1;
                return "You Lose! Rock beats Scissors!";
            } else if (computerSelection=="paper") {
                userScore += 1;
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

// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:



//Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    for (let i=0; i<5; i++) {
        const playerSelection=window.prompt("Rock, Paper or Scissors?","");
        const computerSelection = getcomputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`User: ${userScore} | Computer: ${computerScore}`)
    }
    
    if (userScore>computerScore) {
        // console.log("You win!");
        return "You win!";
    } else if (userScore<computerScore) {
        // console.log("Computer Wins!");
        return "Computer Wins!";
    } else {
        // console.log("It's a tie!");
        return "It's a tie!";
    }
}