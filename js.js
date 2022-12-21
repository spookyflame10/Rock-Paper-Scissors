const optionBtn = document.querySelectorAll('.op');
const roundResults = document.querySelector('#Round-result');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');
const btn = document.querySelector("#z");
btn.addEventListener("onclick", () => console.log("bob"));
//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());

optionBtn.forEach(button => {button.addEventListener('click', () => {
    console.log("hellow");
    let playerSelection= (button.target.id);
    playRound(playerSelection, computerPlay());
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

/*const select = document.querySelector("#player");
select.addEventListener("change", getPlayer());
function setPlayer(){
    player = select.value;
}
*/
function playRound(playerSelection1, computerSelection) {
    playerSelection = playerSelection1.toUpperCase();
    console.log("hellos")
    if (playerSelection === computerSelection) {
      return("Tie");
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      return("You Won! "+ playerSelection + " beats " + computerSelection);
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      return("You Lose " + computerSelection + " beats " + playerSelection);
    }
}

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