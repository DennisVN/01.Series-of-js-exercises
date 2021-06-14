/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let date = new Date();
    let hour = date.getHours();
    let target = document.getElementById('target');
    if (hour < "17:30"){
        target.innerHTML = 'Good evening'
        console.log(date, hour);
    } else {
        target.innerHTML = 'Hello'
        console.log(date, hour);
    }
	

})();
