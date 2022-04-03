let gameMode = true;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('compScore');
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset)
const buttons = document.querySelectorAll('#rock,#paper,#scissors');
buttons.forEach(button => button.addEventListener('click', playerSelection))


function playRound(playerSelection, computerSelection) {
    const loseText = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
    const winText = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
    const drawText = "It's a draw!";

    deleteDiv('#result');

    if(playerSelection === computerSelection ) {
        createDiv(drawText, '#result');
        return drawText;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'
            || playerSelection === 'Scissors' && computerSelection === 'Rock'
            || playerSelection === 'Paper' && computerPlay === 'Scissors') {              
                createDiv(loseText, '#result');
                return loseText;
    }  
    createDiv(winText, '#result');
    return winText;
}

// generate computer selection randomly
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors']
    //generate random number up to arrayLength
    const pick = Math.floor(Math.random()*choices.length)
    const cpuChoice = choices[pick];
    // const cText = `Computer plays ${cpuChoice.toLowerCase()}.`;
    // deleteDiv('#result');
    // createDiv(cText, '#result');
    displaySelection(cpuChoice.toLowerCase(), 'compSelection')
    return cpuChoice
}

function playerPlay(pSelect) {
    //make player selection uniform (only first letter upper case)
    let pChoice = pSelect[0].toUpperCase()+pSelect.slice(1)
    return game(pChoice);
}

function playerSelection() {
    if (gameMode){
        displaySelection(this.id, 'playerSelection')
        return playerPlay(this.id);
    }
}

function showFinalResult(playerScore, computerScore) {
    deleteDiv('#result');
    if (playerScore > computerScore) {
        return createDiv("Final Result: You win!", '#result');
    }
    else if (playerScore< computerScore) {
        return createDiv("Final Result: You lose..", '#result');
    }
    return "Final Result: It's a draw.";
}

function createDiv(str, container){
    const cont = document.querySelector(container)
    const div = document.createElement('div');
    div.innerText = str;
    cont.appendChild(div)
}

function deleteDiv(container) {
    const cont = document.querySelector(container);
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild)
    }
}

function displaySelection(selection, player) {
    const img = document.getElementById(player);
    if(selection == 'rock') {
        img.src = "./images/rock.svg"
    } else if(selection == 'paper') {
        img.src = "./images/paper.svg"
    } else if(selection == 'scissors') {
        img.src = "./images/scissors.svg"
    } else img.src = ""
}

function game(pSelect) {
    let playerScore = parseInt(pScore.textContent);
    let computerScore = parseInt(cScore.textContent);
    let scoreToWin = 5;

    const cSelect = computerPlay();
    const roundResult = playRound(pSelect, cSelect)
    if (roundResult.includes("win")) {
        pScore.textContent = ++playerScore;
        if (playerScore >= scoreToWin) gameMode = false;
    } else if (roundResult.includes("lose")) {
        cScore.textContent = ++computerScore;
        if (computerScore >= scoreToWin) gameMode = false;
        }

        if(playerScore >= scoreToWin || computerScore >= scoreToWin) {
            showFinalResult(playerScore, computerScore)
        }
}

function reset() {
    pScore.textContent = 0;
    cScore.textContent = 0;
    deleteDiv('#result');
    displaySelection('', 'playerSelection');
    displaySelection('', 'compSelection')
    gameMode = true;
}