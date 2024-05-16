
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
    return prompt("Please enter rock, paper or scissors: ");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("TIE!");
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log("You loose! Paper beats Rock.");
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log("You Win! Rock beats Scissors.");
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log("You Win! Paper beats Rock.");
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log("You Loose! Scissors beats Paper.");
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log("You Win! Scissors beats paper.");
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log("You Loose! Rock beats Scissors.");
    } else {
        console.error(humanChoice + " is not a correct value. It must be rock, paper or scissors.");
    }

    console.log(humanChoice, humanScore, computerChoice, computerScore);
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
