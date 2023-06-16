  let playerSelection ;
  let computerSelection ; 
  let playerScore = 0 ;
  let computerScore = 0 ;
  let options = document.querySelectorAll('button') ;
  const playerText = document.querySelector('.playerText') ;
  const computerText = document.querySelector('.computerText') ;
  const scoreTextPlayer = document.querySelector('.scoreTextPlayer') ;
  const scoreTextComputer = document.querySelector('.scoreTextComputer') ;
  const resultText = document.querySelector('.resultText') ;


  function getComputerSelection (){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    
    let computerSelection = undefined; 
    
    if ( randomNumber <= 33 ) {
    computerSelection = "Rock" ;
    }   
    
    else if (randomNumber >= 67) {
    computerSelection = "Scissors" ;
    }    
    
    else {
    computerSelection = "Paper" ;
    }
  return computerSelection
  }
  
  function playRound (playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection){
       return "The round is a draw";
    } 
    
    if (
        ( playerSelection == "Scissors" && computerSelection == "Rock" ) ||
        ( playerSelection == "Rock" && computerSelection == "Paper" ) ||
        ( playerSelection == "Paper" && computerSelection == "Scissors" ) ){   
        return `Oh no! The computer has won this round! ${computerSelection} beats ${playerSelection}!`;
    } 
    
    else if (
        ( playerSelection == "Rock" && computerSelection == "Scissors" ) ||
        ( playerSelection == "Paper" && computerSelection == "Rock" ) ||
        ( playerSelection == "Scissors" && computerSelection == "Paper" ) ){  
        return `Well done! You won this round! ${playerSelection} beats ${computerSelection}!`;
    }    
}
  options.forEach(button => button.addEventListener('click', () =>{

  playerSelection = button.textContent;
  computerSelection = getComputerSelection();
  playerText.textContent = `Player: ${playerSelection}`;
  computerText.textContent = `Computer: ${computerSelection}`;

  console.log(playerSelection);
  console.log(computerSelection);
  
  playRound(playerSelection, computerSelection)
  
  if (playRound(playerSelection, computerSelection) ===  
    `Oh no! The computer has won this round! ${computerSelection} beats ${playerSelection}!`){
      computerScore++
    }
  else if (playRound(playerSelection, computerSelection) ===  
    `Well done! You won this round! ${playerSelection} beats ${computerSelection}!`){
      playerScore++
    }
    scoreTextPlayer.textContent = `${playerScore}` ;
    scoreTextComputer.textContent = `${computerScore}` ;
    
    
  console.log(playRound(playerSelection, computerSelection))
  console.log(playerScore)
  console.log(computerScore)
    
  
  let winner = null
    
  if (computerScore >= 5){
    winner = "You lost! Refresh the browser to play again!"
    } 

    else if (playerScore >= 5){
    winner = "You win! Refresh the browser to play again!"
    }   
  resultText.textContent = `${winner}`
 
  }));
