/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var username = prompt ( "what is your name ?");
var gender = prompt ( "what is your gender ?");
var town = prompt ( "what is the name of your home town ?");

var infoCorrect= confirm(" Your name is " + username + ", you are " + gender + "gender, and you live in " + town + " ! ");

(function myFunction() {
    if (infoCorrect === false) {
        username = prompt("what is your name ?");
        gender = prompt ( "what is your gender ?");
        town = prompt ( "what is the name of your home town ?");
    } else {
        infoCorrect = confirm( "Is the info correct ? Please confirm by pressing OK ");
    }   
})();
