function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let choice = "Rock";

    if (randomNumber === 1) {
        choice = "Paper";
    } else if (randomNumber === 2) {
        choice = "Scissors";
    }

    return choice;
}

console.log(getComputerChoice());