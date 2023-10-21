// Rock Paper Scissors
//

let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll('.choiceButton');
let playerSelection = '';

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    playerSelection = e.target.innerHTML.toLowerCase(); 
    game();
  });
});


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

  let player = playerSelection;
  let computer = computerSelection;
  let results = [playerPoints, computerPoints];


  switch (player) {
    case 'rock':
      if (computer === 'scissors') {
        playerPoints += 1;
        return results;
      } 
      else if (computer === 'paper') {
        computerPoints += 1;
        return results;
      }
      else {
        return results;
      }
    case 'paper':
      if (computer === 'rock') {
        playerPoints += 1;
        return results;
      } 
      else if (computer === 'scissors') {
        computerPoints += 1;
        return results;
      }
      else {
        return results;
      }
    case 'scissors':
      if (computer === 'paper') {
        playerPoints += 1;
        return results;
      } 
      else if (computer === 'rock') {
        computerPoints += 1;
        return results;
      }
      else {
        return results;
      }
  }
    
}

function game() {

    let [p, c] = playRound(playerSelection, getComputerChoice());
    console.log(p, c);
}
