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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    const results = document.querySelector(".results");

    const computerSelection = function () { return getComputerChoice(); }

    function isGameOver() {
        return humanScore >= 5 || computerScore >= 5;
    }


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            results.innerHTML = "Tie! ";
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore++;
            results.innerHTML = "You loose! Paper beats Rock.";
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            results.innerHTML = "You Win! Rock beats Scissors.";
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++;
            results.innerHTML = "You Win! Paper beats Rock.";
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore++;
            results.innerHTML = "You Loose! Scissors beats Paper.";
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            results.innerHTML = "You Win! Scissors beats paper.";
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++;
            results.innerHTML = "You Loose! Rock beats Scissors.";
        } else {
            results.innerHTML = humanChoice + " is not a correct value. It must be rock, paper or scissors.";
        }

        results.innerHTML += " Human: " + humanScore + " Computer: " + computerScore;
        if (isGameOver()) {
            results.innerHTML = "GAME OVER!!!";

            if (humanScore > computerScore) {
                results.innerHTML += " You Win! The total score is Human:" + humanScore + " Computer: " + computerScore;
            } else if (computerScore > humanScore) {
                results.innerHTML += " You Loose! The total score is Human:" + humanScore + " Computer:" + computerScore;
            } else {
                cresults.innerHTML += " Tie Game! The total score is Human:" + humanScore + " Computer:" + computerScore;
            }

            humanScore = 0;
            computerScore = 0;
        };
    }

    document.querySelector("#rock").addEventListener("click", function () {
        playRound("rock", computerSelection());
    });

    document.querySelector("#paper").addEventListener("click", function () {
        playRound("paper", computerSelection());
    });

    document.querySelector("#scissors").addEventListener("click", function () {
        playRound("scissors", computerSelection());
    });
}

playGame();