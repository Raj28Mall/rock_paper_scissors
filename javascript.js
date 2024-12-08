function getComputerChoice() {
    let a = Math.random();
    if (a < 0.33)
        return ("rock");
    else if (a > 0.33 && a < 0.66)
        return ("paper");
    else
        return ("scissors");
}

function getHumanChoice() {
    let choice;
    do {
        choice = (prompt("What is your choice? (rock, paper, scissors): ") || "").toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors"); // Keep asking until valid input
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "scissors")) {
        computerScore += 1;
    }
    else if (humanChoice == computerChoice) {
        // do nothing lol
    }
    else{
        humanScore += 1;
    }
}

function playGame(){
    for(let i=0; i<5; i++){
        playRound();
    }
    if(humanScore>computerScore){
        console.log("You won! The score was: "+humanScore+"-"+computerScore);
    }
    else if(humanScore<computerScore){
        console.log("You Lost! The score was: "+humanScore+"-"+computerScore);
    }
    else{
        console.log("It was a tie! The score was: "+humanScore+"-"+computerScore);
    }
    humanScore=0; computerScore=0;
}