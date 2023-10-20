// Rock Paper Scissors
//

var playerSelection = "rock";

function getComputerChoice() {

  let choice = Math.floor(Math.random() * 3);
  let [rock, paper] = [0, 1];
  
  if (choice === rock) {
    return 'rock';
  }
  else if (choice === paper) {
    return 'paper';
  } else {
    return 'scissors'
  }
}

function playRound(playerSelection, computerSelection) {

  let player = playerSelection.toLowerCase();
  let winningChoice;
  let losingChoice;
  let computer = computerSelection;
  let winLose;

  switch (player) {
    case 'rock':
      
      if (computer === 'scissors') {
        winningChoice = player;
        losingChoice = computer;
        winLose = 'win';
        return `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
      } 
      else if (computer === 'paper') {
        winningChoice = computer;
        losingChoice = player
        winLose = 'lose';
        return `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
      }
      else {
        return "It's a draw! Play again?";
      }
    case 'paper':
      if (computer === 'rock') {
        winningChoice = player;
        losingChoice = computer;
        winLose = 'win';
        return `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
      } 
      else if (computer === 'scissors') {
        winningChoice = computer;
        losingChoice = player;
        winLose = 'lose';
        return `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
      }
      else {
        return "It's a draw! Play again?";
      }
    case 'scissors':
      if (computer === 'paper') {
        winningChoice = player;
        losingChoice = computer;
        winLose = 'win';
        return `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
      } 
      else if (computer === 'rock') {
        winningChoice = computer;
        losingChoice = player;
        winLose = 'lose';
        return `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
      }
      else {
        return "It's a draw! Play again?";
      }
  }
    
}

console.log(playRound(playerSelection, getComputerChoice()))

