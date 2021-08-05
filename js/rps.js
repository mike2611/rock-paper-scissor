let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const moves=["Rock", "Paper", "Scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function playerPlay(){
    let moves = prompt("Select rock, paper or scissors");
    moves = moves.toLowerCase();
    while(moves !== "rock" && moves !== "paper" && moves !== "scissors"){
        moves = prompt("Please only select between rock, paper or scissors");
        moves = moves.toLowerCase();
    }
    return moves.charAt(0).toUpperCase() + moves.slice(1);
}

function playRound(playerSelection, computerSelection){
    let message = `You: ${playerSelection} vs Computer: ${computerSelection} `;

    if(playerSelection === "Rock" && computerSelection === "Rock"){
        message += "Tie!";
    }else if(playerSelection === "Rock" && computerSelection === "Paper"){
        message += "You Lose!";
        computerScore++;
    }else if(playerSelection === "Paper" && computerSelection === "Paper"){
        message += "Tie!";
    }else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        message += "You Lose!";
        computerScore++;
    }else if(playerSelection === "Scissors" && computerSelection === "Scissors"){
        message += "Tie!";
    }else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        message += "You Lose!";
        computerScore++;
    }else{
        message += "You Win!!";
        playerScore++;
    }

    return(message);

}


function finalScore(){
    console.log("Game Over")

    if(playerScore > computerScore){
        console.log("Congratulations YOU WIN!!!")
    }else{
        console.log("YOU LOSE!!!")
    }
}

function game(){
    for(i=0; i < 5; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if(playerScore === 3 || computerScore === 3){
            break;
        }
    }

    finalScore();
}


game();

