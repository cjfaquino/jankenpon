
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



