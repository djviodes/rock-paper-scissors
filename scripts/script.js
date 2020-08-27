//begin all variables at 0
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
//create an input that allows user to select "rock, paper, or scissors"
//create a function that plays one round of the game while selecting a winner
//create a function that utilizes the one round function to play five rounds while keeping score and declares user either a winner or loser