
function playRound(playerSelection, computerSelection) {
    // compare computer and player selction
    // select winner or draw

    const loseText = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
    const winText = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
    const drawText = "It's a draw!";

    if(playerSelection === computerSelection ) {
        console.log(drawText);
        return drawText
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'
            || playerSelection === 'Scissors' && computerSelection === 'Rock'
            || playerSelection === 'Paper' && computerPlay === 'Scissors') {
                console.log(loseText);
                return loseText
    } 
    console.log(winText);
    return winText
}


// generate computer selection randomly
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors']

    //generate random number up to arrayLength
    const pick = Math.floor(Math.random()*choices.length)
    const cpuChoice = choices[pick];
    console.log(`Computer plays ${cpuChoice.toLowerCase()}.`);
    return cpuChoice
}

function playerPlay() {
    // ask player for selection
    const pSelect = prompt('Rock, paper, or scissors?', '');
    
    //make player selection uniform (only first letter upper case)
    let pChoice = pSelect.toLowerCase();
    pChoice = pChoice[0].toUpperCase()+pChoice.slice(1)
    console.log(`Player picks ${pChoice.toLowerCase()}.`)
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
        } else if (roundResult.includes("lose")) {
            ++computerScore;
        }

        // Show score after each round
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log(`=======================`);
    }
    
    if (playerScore > computerScore) return "Final Result: You win!"
    else if (playerScore< computerScore) return "Final Result: You lose.."
    return "Final Result: It's a draw."
}


