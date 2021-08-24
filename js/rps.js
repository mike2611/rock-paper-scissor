let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const body = document.querySelector('body');
const finalResults = document.createElement('div');
finalResults.classList.add('final-result');
const again = document.createElement('button');
again.textContent = 'Try Again';

again.addEventListener('click', () => {
  result.innerHTML = '';
  score.innerHTML = `<h3>PlayerScore: 0 </h3> 
    <h3>ComputerScore: 0 </h3>`;

  playerScore = 0;
  computerScore = 0;
  body.removeChild(finalResults);
});

function computerPlay() {
  const moves = ['Rock', 'Paper', 'Scissors'];
  return moves[Math.floor(Math.random() * moves.length)];
}

function finalResult() {
  if (playerScore > computerScore) {
    finalResults.innerHTML = '<h1>YOU WIN !!</h1>';
  } else {
    finalResults.innerHTML = '<h1>YOU LOSE !!</h1>';
  }

  finalResults.appendChild(again);

  body.appendChild(finalResults);
}

function scores(images, computerScore, playerScore) {
  result.classList.add('vs');
  result.innerHTML = images;
  score.innerHTML = `<h3>PlayerScore: ${playerScore}
    &nbsp;&nbsp;ComputerScore: ${computerScore}</h3>`;

  if (playerScore === 5 || computerScore === 5) {
    finalResult();
  }
}

function playRound(playerSelection, computerSelection) {
  let playerPoint = '';
  let computerPoint = '';

  if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    computerPoint = 'winner';
    playerPoint = 'winner';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerPoint = 'winner';
    computerScore += 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    computerPoint = 'winner';
    playerPoint = 'winner';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerPoint = 'winner';
    computerScore += 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
    computerPoint = 'winner';
    playerPoint = 'winner';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerPoint = 'winner';
    computerScore += 1;
  } else {
    playerPoint = 'winner';
    playerScore += 1;
  }

  const images = ` 
    <img class="${playerPoint}" src="images/${playerSelection}.png"> 
    <span> vs </span> 
    <img class="${computerPoint}" src="images/${computerSelection}.png"> `;

  scores(images, computerScore, playerScore);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, computerPlay());
  });
});
