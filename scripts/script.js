//create a function that randomly selects "rock, paper, or scissors"
function computerPlay() {
    const computerChoice = Math.floor(Math.random() * 3); //this function generates a random number 0, 1, or 2
    switch (computerChoice) { //this switch statement converts the 0, 1, or 2 from the computerChoice variable and outputs the computer's selection of rock, paper, or scissors
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "There was an error with the number generator."
    }
}
//create a function that plays one round of the game while selecting a winner
function playRound (playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase(); //this ensures the user's choice is not case sensitive as it will automatically input as all lower case
    computerChoice = computerChoice.toLowerCase(); //this ensures the computer's choice is not case sensitive as it will automatically input as all lower case
    if (playerChoice == computerChoice) { //this is the choice if the user and computer choose the same option
        return `Draw! ${playerChoice} equals ${computerChoice}`
    }
    else if (playerChoice == "rock") { //this is the choice if the user chooses rock
        if (computerChoice == "scissors") {
            return "You won! Rock beats Scissors.";
        }
        else if (computerChoice == "paper") {
            return "You lost... Paper beats Rock.";
        }
    }
    else if (playerChoice == "paper") { //this is the choice if the user chooses paper
        if (computerChoice == "rock") {
            return "You won! Paper beats Rock.";
        }
        else if (computerChoice == "scissors") {
            return "You lost... Scissors beats Paper.";
        }
    }
    else if (playerChoice == "scissors") { //this is the choice if the use chooses scissors
        if (computerChoice == "paper") {
            return "You won! Scissors beats Paper.";
        }
        else if (computerChoice == "rock") {
            return "You lost... Rock beats Scissors.";
        }
    }
    else {
        return "This should not have happened."
    }
}
//create a function that utilizes the one round function to play five rounds while keeping score and declares user either a winner or loser