  
  function getComputerSelection (){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let computerSelection = undefined; 
    
    if (randomNumber <= 33){
    computerSelection= "Rock";
    }   
    
    else if (randomNumber >= 67) {
    computerSelection= "Scissors";
    }    
    
    else {
    computerSelection= "Paper";
    }
  console.log(computerSelection)
  return computerSelection
  }


  function getPlayerSelection(){
    let playerInput = prompt("What move will you play?")
    let x = playerInput.toLowerCase()  
    
    if (x === "rock"){
    playerInput = "Rock"
    } 
    
    else if (x === "paper"){
    playerInput = "Paper"
    } 
    
    else if (x === "scissors"){
    playerInput = "Scissors"
    } 
    
    else {
    alert ("Invalid selection, please try again.")
    }
  console.log(playerInput)
  return playerInput
  }
//x is just a placeholder variable to make inputs case insensitive.
// I would prefer to make it so that the player gets another attempt to input when they enter an
// invalid option, that way a round wont be wasted in this event. 

  function playRound (playerSelection, computerSelection){
    if (playerSelection == computerSelection){
       return "The round is a draw";
    } 
    
    if (
        (playerSelection == "Scissors" && computerSelection == "Rock") ||
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors") ){   
        return `Oh no! The computer has won this round! ${computerSelection} beats ${playerSelection}!`;
    } 
    
    else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ){  
        return `Well done! You won this round! ${playerSelection} beats ${computerSelection}!` ;
    }    
}

  function game(){
    let playerScore = 0
    let computerScore = 0
    
    for ( i = 0; i < 5; i++){
      let playerSelection = getPlayerSelection();
      let computerSelection = getComputerSelection();
    console.log(playRound(playerSelection, computerSelection))
    
    if (playRound(playerSelection, computerSelection) 
    == `Well done! You won this round! ${playerSelection} beats ${computerSelection}!`){;
    playerScore++
    }  
    
    else if (playRound(playerSelection, computerSelection) 
== `Oh no! The computer has won this round! ${computerSelection} beats ${playerSelection}!`){;
    computerScore++
    }  else (playerScore++, computerScore++)
  } 
// Currently the game is simply just 5 rounds all the time.
// I would eventually like to make it become a best of 5 instead.

  let winner = undefined
    if (computerScore == playerScore){
    winner = "Its a tie! Refresh the browser to play again!"
    } 

    else if (computerScore > playerScore){
    winner = "You lost! Refresh the browser to play again!"
    }   
    
    else {
    winner = "You win! Refresh the browser to play again!"
    } console.log(winner)
  }

  game()