import { getDiceRollArray } from '/utils.js';

// render the dice on the page
class Character {
    constructor(data) {
        // this.name = data.name;
        // this.id = data.id;
        // this.avatar = data.avatar;
        // this.health = data.health;
        // this.diceCount = data.diceCount;
        Object.assign(this, data); //Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

        this.getDiceHtml = function(diceCount) {
            const diceRollArray = getDiceRollArray(diceCount);
            const diceHtml = diceRollArray.map(function(d) {
                    return `<div class="dice">${d}</div>`
                }).join('') // join the array into a string
            return diceHtml;
        }

        this.getCharacterHtml = function() {
            const { name, id, avatar, health, diceCount } = this;

            const diceHtml = this.getDiceHtml(diceCount);

            return `
                    <div class="character-card">
                    <h4 class="name">${name}</h4>
                    <img class="avatar" src="${avatar}"/>
                    <p class="health">health: <b> ${health}</b></p>
                    <div class="dice-container">${diceHtml}</div>
                    </div>`;

        };

    }
}

export default Character;