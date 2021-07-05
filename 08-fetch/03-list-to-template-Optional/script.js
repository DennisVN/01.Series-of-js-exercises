/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
const heroDiv = document.getElementById("tpl-hero");
const heroHero = document.querySelector("hero");
const heroName = document.querySelector("name");
const alterEgo = document.querySelector("alter-ego");
const heroPowers = document.querySelector("powers");
const target = document.getElementById("target");


document.getElementById("run").addEventListener("click", function() {
    let target = document.getElementById("target");
    fetch ("http://127.0.0.1:5500/_shared/api.json")
    .then (response => response.json())
    .then (heroes => {displayResults(heroes)})
})

function displayResults (heroes) {
    heroHero.innerHTML = `${heroes.heroes[0].name}`;
}



/*showHeroes = heroes => {
    const heroDiv = getElementById("#tpl-hero")
    heroes.forEach( heroes => {
        const heroElement = document.querySelector("hero");
        heroElement.innerHTML = `${hero.name}`;
        heroDiv.append(heroElement);
    });
}*/