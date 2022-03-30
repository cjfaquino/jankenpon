

function playRound(playerSelection, computerSelection) {
    // compare computer and player selction
    // select winner or draw

    const loseText = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
    const winText = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
    const drawText = "It's a draw!";

    if(playerSelection === computerSelection ) {
        createDiv(drawText);
        return drawText;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'
            || playerSelection === 'Scissors' && computerSelection === 'Rock'
            || playerSelection === 'Paper' && computerPlay === 'Scissors') {
                createDiv(loseText);
                return loseText;
    } 
    createDiv(winText);
    return winText;
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

function playerPlay(pSelect) {
    //make player selection uniform (only first letter upper case)
    let pChoice = pSelect[0].toUpperCase()+pSelect.slice(1)
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


function pickSelection(e){
    const button = document.querySelector(`button[id="${e.target.id}"]`)
    if (!button) return;
    const pPlay = playerPlay(button.id);
    const cPlay = computerPlay();

    playRound(pPlay, cPlay);
}

window.addEventListener('click', pickSelection)

function createDiv(str){
    const container = document.querySelector('body')
    const div = document.createElement('div');
    div.innerText = str;
    container.appendChild(div)
}