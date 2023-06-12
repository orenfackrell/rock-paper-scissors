function getComputerSelection (){
let randomNumber = Math.floor(Math.random() * 100) + 1;
let computerSelection = undefined; 
if (randomNumber <= 33){
    computerSelection= "Rock";
}   else if (randomNumber >= 67) {
    computerSelection= "Scissors";
}    else {
    computerSelection= "Paper";
}
console.log(computerSelection)
return computerSelection

}


function getPlayerChoice(){
let playerChoice = prompt("What move will you play?")
let playerSelectionTxt = playerChoice.toLowerCase()
if (playerSelectionTxt === "rock"){
    playerChoice = "Rock"
} else if (playerSelectionTxt === "paper"){
    playerChoice = "Paper"
} else if (playerSelectionTxt === "scissors"){
    playerChoice = "Scissors"
} else {
    alert ("Invalid selection, please try again.")
}
console.log(playerChoice)
return playerChoice
}

function playRound (playerSelection, computerSelection){
    if (playerSelection == computerSelection){
       return "The round is a draw";
    } if (
        (playerSelection == "Scissors" && computerSelection == "Rock") ||
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors")
    )   {
        return `Oh no! The computer has won this round! ${computerSelection} beats ${playerSelection}!`;
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
    )   {
        return `Well done! You won this round! ${playerSelection} beats ${computerSelection}!` ;
    }    
}

function game(){
    playerScore = 0
    computerScore = 0
    for ( i = 0; i < 5; i++){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerSelection();
    console.log(playRound(playerSelection, computerSelection))
    if (playRound(playerSelection, computerSelection) == `Well done! You won this round! ${playerSelection} beats ${computerSelection}!`){;
    playerScore++
}   else if (playRound(playerSelection, computerSelection) == `Oh no! The computer has won this round! ${computerSelection} beats ${playerSelection}!`){;
    computerScore++
} else (playerScore++, computerScore++)
} let winner = 0
if (computerScore == playerScore){
    winner = "Its a tie! Refresh the browser to play again!"
} else if (computerScore > playerScore){
    winner = "You lost! Refresh the browser to play again!"
} else {
    winner = "You win! Refresh the browser to play again!"
} 
console.log(winner)
}
game()