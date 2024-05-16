
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let choice = "rock";

    if (randomNumber === 1) {
        choice = "paper";
    } else if (randomNumber === 2) {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice() {
    const numberChoice = parseInt(prompt("Please type 0 for rock, 1 for paper or 2 for scissors: "));
    let choice = "error";

    if (numberChoice === 0) {
        choice = "rock";
    } else if (numberChoice === 1) {
        choice = "paper";
    } else if (numberChoice === 2) {
        choice = "scissors";
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
