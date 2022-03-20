// ask player for selection

// lowercase player input for uniformity

// store player selection

// generate computer selection randomly
function computerPlay() {
    let choices = ['Rock', 'Papers', 'Scissors']

    //generate random number up to arrayLength
    const pick = Math.floor(Math.random()*choices.length)
    
    return choices[pick]
}


// compare computer and player selction

// select winner or draw

