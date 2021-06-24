/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*(async () => {
    let data = await fetch('http://127.0.0.1:5500/_shared/api.json');
    let main = await data.json();

    .then(data => console.log(data));
})();  */


(() => {
    let target = document.querySelector("#target");
    document.getElementById("run").addEventListener("click" , function hero() {
    let inputId = document.getElementById("hero-id").value;

        fetch("http://127.0.0.1:5500/_shared/api.json")
            .then(response => response.json())
            .then(data => {
                let hero = data.heroes.find (findHero => findHero.id == inputId);
                let objClone = document.getElementById("tpl-hero").content.cloneNode(true);
                objClone.querySelector(".name").innerHTML = hero.name;
                objClone.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                objClone.querySelector(".powers").innerHTML = hero.abilities;
                target.appendChild(objClone);
            })
        }) 
})();
