// generate random value for dice

function getDiceRollArray(diceCount) {

    // create an array of diceCount length:method used is Array constructor and fill method

    const diceRollArray = new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
    return diceRollArray;
}

export { getDiceRollArray };