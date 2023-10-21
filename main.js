// Rock Paper Scissors
//

let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll('button');
let playerSelection = '';

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    playerSelection = e.target.innerHTML; 
    let [pPoints, cPoints, pChoice, cChoice] = game();
    showMessage(pPoints, cPoints, pChoice, cChoice);
  });

});

function getComputerChoice() {

  let choice = Math.floor(Math.random() * 4);
  let [rock, paper, scissors] = [0, 1, 2];
  
  if (choice === rock) {
    return 'rock';
  }
  else if (choice === paper) {
    return 'paper';
  } 
  else if (choice === scissors) {
    return 'scissors'
  }
  else {
    return 'flame-thrower'
  }
}

function playRound(playerSelection, computerSelection) {

  let player = playerSelection.toLowerCase();
  let computer = computerSelection;


  switch (player) {
    case 'rock':
      if (computer === 'scissors') {
        playerPoints += 1;
        return [playerPoints, computerPoints, player, computer]
      } 
      else if (computer === 'paper') {
        computerPoints += 1;
        return [playerPoints, computerPoints, player, computer]

      }
      else if (computer === 'flame-thrower') {
        computerPoints += 1;
      }
      else {
        return [playerPoints, computerPoints, player, computer]

      }
    case 'paper':
      if (computer === 'rock') {
        playerPoints += 1;
        return [playerPoints, computerPoints, player, computer]
      } 
      else if (computer === 'scissors') {
        computerPoints += 1;
        return [playerPoints, computerPoints, player, computer]
      }
      else if (computer === 'flame-thrower') {
        computerPoints += 1;
        return [playerPoints, computerPoints, player, computer]
      }
      else {
        return [playerPoints, computerPoints, player, computer]

      }
    case 'scissors':
      if (computer === 'paper') {
        playerPoints += 1;
        return [playerPoints, computerPoints, player, computer]
      } 
      else if (computer === 'rock') {
        computerPoints += 1;
        return [playerPoints, computerPoints, player, computer]

      }
      else if (computer === 'flame-thrower') {
        computerPoints += 1;
        return [playerPoints, computerPoints, player, computer]

      }

      else {
        return [playerPoints, computerPoints, player, computer]

      }
    case 'flame-thrower':
      if (computer === 'flame-thrower') {
        return [playerPoints, computerPoints, player, computer]
      } 
      else {
        playerPoints += 1;
        return [playerPoints, computerPoints, player, computer]
      }

  }
    
}

function showMessage(pPoints, cPoints, pChoice, cChoice) {
  const msgArea = document.querySelector('.messages');
  const scoreArea = document.querySelector('.scores');
  const pMsgText = `You chose ${pChoice}!`;
  const cMsgText = `The computer chose ${cChoice}!`;
  const pPointsText = `Your score: ${pPoints}`;
  const cPointsText = `Computer score: ${cPoints}`;
  msgArea.replaceChildren();
  scoreArea.replaceChildren();

  const pDiv = document.createElement('div');
  pDiv.classList.add('pmsg');
  pDiv.textContent = pMsgText;
  pDiv.setAttribute('style', 'font-size: 24px;')
  msgArea.appendChild(pDiv);

  const cDiv = document.createElement('div');
  cDiv.classList.add('cmsg');
  cDiv.textContent = cMsgText;
  cDiv.setAttribute('style', 'font-size: 24px;')

  msgArea.appendChild(cDiv);
  
  const pPointsDiv = document.createElement('div');
  pPointsDiv.classList.add('ppoints');
  pPointsDiv.textContent = pPointsText;
  pPointsDiv.setAttribute('style', 'font-size: 24px;')
  scoreArea.appendChild(pPointsDiv);

  const cPointsDiv = document.createElement('div');
  cPointsDiv.classList.add('cpoints');
  cPointsDiv.textContent = cPointsText;
  cPointsDiv.setAttribute('style', 'font-size: 24px;')
  scoreArea.appendChild(cPointsDiv);

}

function game() {
  let result = playRound(playerSelection, getComputerChoice());
  return result;
    
}
