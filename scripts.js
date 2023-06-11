// 1 Make a function for a randomly selected rock paper or scissors for the computer 
//(thinking to use Math.random with 0-33 -34-66 67-100 each being a corresponding selection)
// 2 Make a prompt to allow the player to select either of the three
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
    computerSelection= "Paper" ;
}
console.log(computerSelection)
}


function getPlayerChoice(){
let playerChoice = prompt("What move will you play?")
let playerSelection = playerChoice.toLowerCase()
if (playerSelection === "rock"){
    playerChoice = "Rock"
} else if (playerSelection === "paper"){
    playerChoice = "Paper"
} else if (playerSelection === "scissors"){
    playerChoice = "Scissors"
} else {
    alert ("Invalid selection, please try again.")
}
console.log(playerChoice)
}

getComputerSelection()
getPlayerChoice()
