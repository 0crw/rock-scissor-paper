// Win, Lose, Draw,Score statements=>
let roundPlayed = 0;
let playerScore = 0;
let computerScore = 0;


const win = 'You win!';
const lose = 'You lose!';
const draw = 'Draw match!';
const wonGame = 'HUMAN WIN!';
const loseGame = 'NATURE WIN!';
const tieGame = 'EQUILIBRIUM!';



const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
const startGame = document.getElementById('startGame');

const resultBox = document.getElementById('resultBox');
const actualScore = document.getElementById('actualScore');
const actualScoreCp = document.getElementById('actualScoreCp');
const actualRoundPl = document.getElementById('actualRoundPl');

    
    rockBtn.addEventListener('click', () => {
        playerSelection = 'rock';
        roundPlayed++;
        actualScore.textContent = 'HUMAN: ' + playerScore;
        actualScoreCp.textContent = 'NATURE: ' + computerScore;
        actualRoundPl.textContent = 'ROUND: ' + roundPlayed;
        playRound();
        game();
    })
    paperBtn.addEventListener('click', () => {
        playerSelection = 'paper'   
        roundPlayed++;
        actualScore.textContent = 'HUMAN: ' + playerScore;
        actualScoreCp.textContent = 'NATURE: ' + computerScore;
        actualRoundPl.textContent = 'ROUND: ' + roundPlayed;
        playRound();
        game();  
    })
    scissorBtn.addEventListener('click', () => {
        playerSelection = 'scissor'   
        roundPlayed++;
        actualScore.textContent = 'HUMAN: ' + playerScore;
        actualScoreCp.textContent = 'NATURE: ' + computerScore;
        actualRoundPl.textContent = 'ROUND: ' + roundPlayed;
        playRound();
        game();
    })

    

// Computer choose their weapons 
function computerPlay() {
    function randomNumber() { 
        return Math.floor(Math.random() * (3-0) + 0);
    }
    const choiceNumber = ['rock' , 'scissor', 'paper']

    return choiceNumber[randomNumber()]     
}


// Compare the choice of computer and the choice of the player
 function playRound() {
   
    let computerSelection = computerPlay();


    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;

        
    } else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        playerScore++;

    } else if (playerSelection === 'scissor' && computerSelection === 'rock' ){
        computerScore++;
    
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
    
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore++;
    
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        playerScore++;
    
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
    
    }
    
}


function game(){
    
    if (!(roundPlayed <5)){
    
    if (playerScore === computerScore){
        resultBox.textContent = tieGame;
    }

    else if (playerScore > computerScore){
        resultBox.textContent = wonGame;
    }
    else if (playerScore < computerScore){
        resultBox.textContent = loseGame;
    }
}
}

