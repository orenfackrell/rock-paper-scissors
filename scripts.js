
// 3 Create logic for rock > scissors; scissors > paper; paper > rock;
// 4 Return if win or loss 
// 5 increments the score
// 6 repeat for another round (look up how to use loops)
// 7 when at 5 points declare winner
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
    for (let i = 0; i < 5; i++){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerSelection();
    console.log(playRound(playerSelection, computerSelection))
    }
}

game()