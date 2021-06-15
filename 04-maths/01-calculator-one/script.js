/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var num1 = document.getElementById("op-one").value;
var num2 = document.getElementById("op-two").value;


(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        function addition (){
            num1 = parseInt(document.getElementById("op-one"));
            num2= parseInt(document.getElementById("op-two"));
        }
        addition.eventlistener(addition(alert(num1 + num2 )));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        function substraction (){
            num1 = parseInt(document.getElementById("op-one"));
            num2= parseInt(document.getElementById("op-two"));
        }
        addition.eventlistener(addition(alert(num1 - num2 )));
       
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        function multiplication (){
            num1 = parseInt(document.getElementById("op-one"));
            num2= parseInt(document.getElementById("op-two"));
        }
        addition.eventlistener(addition(alert(num1 * num2 )));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        /*var result = x / y;*/
        function division (){
            num1 = parseInt(document.getElementById("op-one"));
            num2= parseInt(document.getElementById("op-two"));
        }
        addition.eventlistener(addition(alert(num1 / num2 )));
    });
})();
