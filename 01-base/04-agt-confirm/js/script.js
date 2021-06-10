/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let age = prompt("What is your age ?")
let gender = prompt("What is your gender (i had to ask sorry :( ) ?")
let town = prompt("What town do you live in ?")


(function myFunction() {
    console.log("You are", age , " years and identify yourself as", gender , "! You live in", town )
    alert(confirm("please confirm !"));
})();
