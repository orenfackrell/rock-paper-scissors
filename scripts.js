  let playerSelection;
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;
  let options = document.querySelectorAll('button');
  const playerText = document.querySelector('.playerText');
  const computerText = document.querySelector('.computerText');
  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');


  options.forEach(button => button.addEventListener('click', () =>{

  playerSelection = button.textContent;
  computerSelection = getComputerSelection();
  playerText.textContent = `Player: ${playerSelection}`;
  computerText.textContent = `Computer: ${computerSelection}`
  console.log(playerSelection)
  console.log(computerSelection)
  
  playRound(playerSelection, computerSelection)
  console.log(  playRound(playerSelection, computerSelection))
  }));

  
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
  return computerSelection
  }

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

  let winner = undefined
    
  if (computerScore == playerScore){
    winner = "Its a tie! Refresh the browser to play again!"
    } 

    else if (computerScore > playerScore){
    winner = "You lost! Refresh the browser to play again!"
    }   
    
    else {
    winner = "You win! Refresh the browser to play again!"
    } 
    
    console.log(winner)
    // Currently the game is simply just 5 rounds all the time.
    // I would eventually like to make it become a best of 5 instead} 
