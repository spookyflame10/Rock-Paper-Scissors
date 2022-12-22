const optionBtn = document.querySelectorAll('.op');
const roundResults = document.querySelector('#Round-result');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const container = document.querySelector('.mainContent');
const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');
const log = document.querySelector('.logs-container'); //solely for the purpose of playing play again button
let playerScore = 0;
let computerScore =0;
let playerSelection = '';


optionBtn.forEach(button => {button.addEventListener('click', function(e){
    playerSelection= (e.target.textContent);
    if(playerScore==5|| computerScore==5){
        endgame();
    }
    else
        playRound(playerSelection, getComputerChoice());
})});


function getComputerChoice(){
    let rand = Math.floor(Math.random()*3);
    if(rand == 0)
        return "ROCK";
    else if(rand == 1)
        return "PAPER";
    else
        return "SCISSORS";
}
function displayScore(result){
    roundResults.textContent = result;
    playerPoints.textContent = String(playerScore);
    computerPoints.textContent = String(computerScore);
    
}
function putButton(){
    const button = document.createElement('button');
    button.classList.add('button', 'green');
    button.setAttribute('id', 'reset');
    button.textContent = "Play Again";
    container.insertBefore(button, log);
}
function endgame(){
    putButton();
    const resetBtn = document.querySelector('#reset');  
    resetBtn.addEventListener('click',() => location.reload());//refresh page for new game
    optionBtn.forEach(button => {
        button.setAttribute('disabled', '');//i guess takes away eventListener
    });
    if(playerScore>computerScore){
        roundResults.textContent = "You Won! You are so Lucky!!!!";
        roundResults.style.color = 'green';
    }
    else if(computerScore>playerScore){
        roundResults.textContent = "You Lost! Git Good :(((((";
        roundResults.style.color = 'red';
    }
    else{
        roundResults.textContent = "Tied";
        roundResults.style.color = 'blue';
    }
}
function createp(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  }
function playRound(playerSelection1, computerSelection) {
    playerSelection = playerSelection1.toUpperCase().trim();
    playerContainer.appendChild(createp(playerSelection));
    computerContainer.appendChild(createp(computerSelection));
    if (playerSelection === computerSelection) {
      displayScore("Tie");
    }
    else if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++;
      displayScore("You Won! "+ playerSelection + " beats " + computerSelection);
    }
    else{
      computerScore++;
      displayScore("You Lose " + computerSelection + " beats " + playerSelection);
    }
}

/*
function game(){
    let pw=0;
    let cw = 0;
    for(let i=0; i<5; i++){
        let player = prompt("Please enter", "Rock");
        let game = playRound(player, getComputerChoice());
        console.log(game)
        if(game == "Tie") continue;
        else if(game.substring(4, 8) == "Won!"){
         pw ++;
            console.log(pw);
        }
        else{
            cw ++;
            console.log(cw);
        }
    }
    if (pw > cw)
        return("You Won!");
    else if (pw == cw)
        return("You Tied")
    else
        return("You lose")
}
*/
//(computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
//(computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
//(computerSelection === 'PAPER' && playerSelection === 'ROCK')