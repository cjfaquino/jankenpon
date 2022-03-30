

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
let gameMode = true;
function playerPlay(pSelect) {
    //make player selection uniform (only first letter upper case)
    let pChoice = pSelect[0].toUpperCase()+pSelect.slice(1)
    return game(pChoice);
}

function game(pSelect) {
    const pScore = document.getElementById('playerScore');
    const cScore = document.getElementById('compScore');
    
    let playerScore = parseInt(pScore.textContent);
    let computerScore = parseInt(cScore.textContent);


    if(gameMode) {
        const cSelect = computerPlay();
        const roundResult = playRound(pSelect, cSelect)
        if (roundResult.includes("win")) {
            ++playerScore;
            if (playerScore >= 5) gameMode = false;
        } else if (roundResult.includes("lose")) {
            ++computerScore;
            if (computerScore >= 5) gameMode = false;
        }

        // Show score after each round
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
        }
    if (playerScore > computerScore) return "Final Result: You win!"
    else if (playerScore< computerScore) return "Final Result: You lose.."
    return "Final Result: It's a draw."
}

function playerSelection() {
    return playerPlay(this.id);
    }

const buttons = document.querySelectorAll('#rock,#paper,#scissors');
buttons.forEach(button => button.addEventListener('click', playerSelection))


function createDiv(str){
    const container = document.querySelector('body')
    const div = document.createElement('div');
    div.innerText = str;
    container.appendChild(div)
}