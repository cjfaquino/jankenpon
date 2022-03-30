

function playRound(playerSelection, computerSelection) {
    // compare computer and player selction
    // select winner or draw

    const loseText = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
    const winText = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
    const drawText = "It's a draw!";

    if(playerSelection === computerSelection ) {
        createDiv(drawText, 'body');
        return drawText;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'
            || playerSelection === 'Scissors' && computerSelection === 'Rock'
            || playerSelection === 'Paper' && computerPlay === 'Scissors') {
                createDiv(loseText, 'body');
                return loseText;
    } 
    createDiv(winText, 'body');
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
    return game(pChoice);
}

function game(pSelect) {
    const pScore = document.getElementById('playerScore');
    const cScore = document.getElementById('compScore');
    
    let playerScore = parseInt(pScore.textContent);
    let computerScore = parseInt(cScore.textContent);

        const cSelect = computerPlay();
        const roundResult = playRound(pSelect, cSelect)
        if (roundResult.includes("win")) {
            ++playerScore;
            if (playerScore >= 5) gameMode = false;
        } else if (roundResult.includes("lose")) {
            ++computerScore;
            if (computerScore >= 5) gameMode = false;
        }
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
        if(playerScore > 4 || computerScore > 4) {
            if (playerScore > computerScore) return createDiv("Final Result: You win!", 'section')
            else if (playerScore< computerScore) return createDiv("Final Result: You lose..", 'section')
            return "Final Result: It's a draw."
        }
}
let gameMode = true;
function playerSelection() {
    if (gameMode){return playerPlay(this.id);}
    }

const buttons = document.querySelectorAll('#rock,#paper,#scissors');
buttons.forEach(button => button.addEventListener('click', playerSelection))


function createDiv(str, container){
    const cont = document.querySelector(container)
    const div = document.createElement('div');
    div.innerText = str;
    cont.appendChild(div)
}