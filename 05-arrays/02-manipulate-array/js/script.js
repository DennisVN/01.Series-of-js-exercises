/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    run.onclick = function(){
        //TODO: REMOVE THE FIRST AND LAST ELEMENT
        //console.log(fruits.slice(1, -1));//

        //TODO: ADD ELEMENT "banana" AT THE START OT ARRAY
        console.log.toString(fruits.unshift(["banana"]));

        //TODO: ADD ELEMENT "kiwi" AT THE END 
    };

})();
