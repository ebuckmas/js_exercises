//to initialize player vs computer scoring for the best of 5 game
let computerScore = 0;
let playerScore = 0;

//generate a random number between 1 - 3 and associate that number w/ R P or S
//console.log to verify random number
let computerPlay = function() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    //console.log(randomNum);
        if (randomNum === 1) {
            console.log('Computer selected: rock');
            return 'rock';
        } else if (randomNum === 2) {
            console.log('Computer selected: paper');
            return 'paper';
        } else if (randomNum === 3) {
            console.log('Computer selected: scissors');
            return 'scissors';
        } else if (randomNum !== 1 || 2 || 3) {
            console.log('computerPlay messed up')
            return 'computerPlay messed up';
        }
}

//function to allow player to select R P or S, and convert to lowercase
let playerSelection = function() {
    let answer = prompt('Rock, Paper, or Scissors?').toLowerCase();
    console.log(`Player selected: ${answer}`);
    return answer;
}

//function to play a single round, that switches on the player selection
let playRound = function(playerSelection, computerSelection) {
    switch(playerSelection){
        case 'rock':
            if (computerSelection === 'paper') {
                computerScore++; //increment winner by one, for overall score tally at end
                return('You Lose! Paper beats Rock')
            } else if (computerSelection === 'scissors') {
                playerScore++;
                return('You Win! Rock beats Scissors');
            } else if (computerSelection === 'rock') {
                return('Tie!');
            }
        break;
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore++;
                return('You Win! Paper beats Rock');
            } else if (computerSelection === 'scissors') {
                computerScore++;
                return('You Lose! Scissors beats Paper');
            } else if (computerSelection === 'paper') {
                return('Tie!');
            }
        break;
        case 'scissors':
            if (computerSelection === 'rock') {
                computerScore++;
                return('You Lose! Rock beats Scissors');
            } else if (computerSelection === 'paper') {
                playerScore++;
                return('You Win! Scissors beats Paper');
            } else if (computerSelection === 'scissors') {
                return('Tie!');
            }
        break;
        default: return('something messed up');
    }
}

//function to run 5 rounds of the game, and display the winner at the end
function game() {
    for (let i = 0; i < 5; i++) {
        //call the playRound function, and pass it the playerSelection and the computerPlay
        console.log(playRound(playerSelection(),computerPlay()));
    }
    //code to display the best of 5 winner
    if (playerScore > computerScore) {
        console.log('Player Wins!');
        alert('Player Wins!');
    } else if (computerScore > playerScore) {
        console.log('Computer Wins!');
        alert('Computer Wins!');
    } else if (computerScore === playerScore) {
        console.log('It\'s a Tie!!!!');
        alert('It\'s a Tie!!!!');
    } else {
        console.log('something foobared');
        alert('something foobared');
    }
}

game();