// Write a function called 'getComputerChoice' that will randomly return either Rock Paper or Scissors
function getComputerChoice() {
    var computerChoice = Math.random()
    // return computerChoice;
    if (computerChoice<0.34){
        computerChoice="rock";
    } else if(computerChoice<=0.67){
        computerChoice="paper";
    } else {
        computerChoice="scissors";
    }
    return computerChoice;
}

// 