// Rock Paper Scissors
//

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
  let computer = computerSelection;
  let winLose;

  switch (player) {
    case 'rock':
      if (computer === 'scissors') {
        winningChoice = player;
        winLose = 'win';
      } else {
        winningChoice = computer;
        winLose = 'lose';
      }
    case 'paper':
      if (computer === 'rock') {
        winningChoice = player;
        winLose = 'win';
      } else {
        winningChoice = computer;
        winLose = 'lose';
      }
    case 'scissors':
      if (computer === 'paper') {
        winningChoice = player;
        winLose = 'win';
      } else {
        winningChoice = computer;
        winLose = 'lose';
      }
  }
    return `You ${winLose}, ${winner} beats ${loser}!`
}

