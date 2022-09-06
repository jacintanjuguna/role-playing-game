const Hero = {
    name: 'Wizard',
    id: 'hero',
    avatar: "images/wizard.jpg",
    health: 60,
    diceCount: 3

}



const Monster = {
    name: 'Orc',
    id: 'monster',
    avatar: "images/orc.jpg",
    health: 10,
    diceCount: 1
}

function Character(data) {
    this.name = data.name;
    this.id = data.id;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;
    this.getCharacterHtml = function() {
        const { name, id, avatar, health, diceCount } = this;

        const diceHtml = getDiceHtml(diceCount);

        document.getElementById(id).innerHTML = `
    <div class="character-card">
    <h4 class="name">${name}</h4>
    <img class="avatar" src="${avatar}"/>
    <p class="health">health: <b> ${health}</b></p>
    <div class="dice-container">${diceHtml}</div>
    </div>`;

    }
}

// generate random value for dice

function getDiceRollArray(diceCount) {

    // create an array of diceCount length:method used is Array constructor and fill method

    const diceRollArray = new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
    return diceRollArray;
}

// render dice with random numbers

function getDiceHtml(diceCount) {
    const diceRollArray = getDiceRollArray(diceCount);
    const diceHtml = diceRollArray.map(function(d) {
            return `<div class="dice">${d}</div>`
        }).join('') // join the array into a string
    return diceHtml;
}

const wizard = new Character(hero)
const orc = new Character(monster)
wizard.getCharacterHtml()






// render the character cards