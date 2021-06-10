/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var age = window.prompt("Please enter your age", "666");
var gender = window.prompt("What is your gender ?");
var town = window.prompt("in what town do you live ?");

(function myFunction() {
    confirm(alert("you are " + age + " years old. Do you like beeing " + gender + " gender ? And  do you like living in " + town + " ?"));

})();
