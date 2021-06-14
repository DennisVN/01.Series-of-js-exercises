/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
    let date = new Date();
    let hour = date.getHours();
    let target = document.getElementById('target');
    if (hour < 18){
        target.innerHTML = 'Hello'
        console.log(date, hour);
    } else {
        target.innerHTML = 'Good evening'
        console.log(date, hour);
    }
})();