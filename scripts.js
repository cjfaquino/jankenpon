    // ask player for selection

    // store player selection

function playRound(playerSelection, computerSelection) {
    //make playerSelection uniform
    let pSelect = playerSelection.toLowerCase();
    pSelect = pSelect[0].toUpperCase()+pSelect.slice(1)
    
    // compare computer and player selction
    // select winner or draw
    if(pSelect === computerSelection ) {
        return "It's a draw!"
    } else if (pSelect === 'Rock' && computerSelection === 'Paper'
            || pSelect === 'Scissors' && computerSelection === 'Rock'
            || pSelect === 'Paper' && computerPlay === 'Scissors') {
                return `You Lose! ${computerSelection} beats ${pSelect.toLowerCase()}.`
    } 
    return `You win! ${pSelect} beats ${computerSelection.toLowerCase()}.`
}

const playerSelection = 'Rock'
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// generate computer selection randomly
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']

    //generate random number up to arrayLength
    const pick = Math.floor(Math.random()*choices.length)

    return choices[pick]
}




