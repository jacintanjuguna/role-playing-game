import charData from "/data.js";
import Character from "/Character.js";

const wizard = new Character(charData.hero);
const orc = new Character(charData.monster);

function render() {
    const wizardHtml = wizard.getCharacterHtml();
    const orcHtml = orc.getCharacterHtml();
    document.getElementById('hero').innerHTML = wizardHtml;
    document.getElementById('monster').innerHTML = orcHtml;
}

render();