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
  
  let messageTwo = "It's a draw! Play again?";
  let message;
  let playerPoints = 0;
  let computerPoints = 0;


  switch (player) {
    case 'rock':
      
      if (computer === 'scissors') {
        winningChoice = player;
        losingChoice = computer;
        winLose = 'win';
        message = `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
        playerPoints += 1;
        return [message, playerPoints, computerPoints]
      } 
      else if (computer === 'paper') {
        winningChoice = computer;
        losingChoice = player
        winLose = 'lose';
        message = `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
        computerPoints += 1;
        return [message, playerPoints, computerPoints]
      }
      else {
        message = messageTwo;
        return [message, playerPoints, computerPoints]

      }
    case 'paper':
      if (computer === 'rock') {
        winningChoice = player;
        losingChoice = computer;
        winLose = 'win';
        message = `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
        playerPoints += 1;
        return [message, playerPoints, computerPoints]

      } 
      else if (computer === 'scissors') {
        winningChoice = computer;
        losingChoice = player;
        winLose = 'lose';
        message = `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
        computerPoints += 1;
        return [message, playerPoints, computerPoints]
      }
      else {
        message = messageTwo;
        return [message, playerPoints, computerPoints]

      }
    case 'scissors':
      if (computer === 'paper') {
        winningChoice = player;
        losingChoice = computer;
        winLose = 'win';
        message = `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
        playerPoints += 1;
        return [message, playerPoints, computerPoints]

      } 
      else if (computer === 'rock') {
        winningChoice = computer;
        losingChoice = player;
        winLose = 'lose';
        message = `You ${winLose}, ${winningChoice} beats ${losingChoice}!`
        computerPoints += 1;
        return [message, playerPoints, computerPoints]
      }
      else {
        message = messageTwo;
        return [message, playerPoints, computerPoints]
      }
  }
    
}

function game() {
  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5000; i++) {
    let [message, p, c] = playRound(playerSelection, getComputerChoice());
    player += p;
    computer += c;
  }
  console.log("Final Score: Player: " + player + " Computer: " + computer + ".")
}

game()

