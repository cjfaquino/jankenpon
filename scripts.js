
function playRound(playerSelection, computerSelection) {
    // compare computer and player selction
    // select winner or draw
    if(playerSelection === computerSelection ) {
        return "It's a draw!"
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'
            || playerSelection === 'Scissors' && computerSelection === 'Rock'
            || playerSelection === 'Paper' && computerPlay === 'Scissors') {
                return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`
    } 
    return `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`
}


// generate computer selection randomly
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']

    //generate random number up to arrayLength
    const pick = Math.floor(Math.random()*choices.length)

    return choices[pick]
}

function playerPlay() {
    // ask player for selection
    const pSelect = prompt('Rock, paper, or scissors?', '');
    
    //make player selection uniform (only first letter upper case)
    let pChoice = pSelect.toLowerCase();
    pChoice = pChoice[0].toUpperCase()+pChoice.slice(1)
    return pChoice;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        
        // add score to winner
        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes("win")) {
            ++playerScore;
        } else if (roundResult.includes("Lose")) {
            ++computerScore;
        }

        // Show score after each round
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    
    if (playerScore > computerScore) return "You win!"
    else if (playerScore< computerScore) return "You lose.."
    return "It's a draw"
}


