/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //BUTTON RUN 
    var yearElement = document.getElementById('dob-year');
    var monthElement = document.getElementById('dob-month');
    var dayElement = document.getElementById('dob-day');
    // TODO : MAKE AN OBJECT WITH CURRENT BIRTHDATE
    let birthday = new Date(yearElement.value, monthElement.value, dayElement.value);
    console.log(birthday);
    // TODO: CALCULATE THE DIFFERENCE BETWEEN NOW AND BIRTHDATE 
    var ageDifMs = Date.now() - birthday.getTime();
    console.log(ageDifMs);
})();
