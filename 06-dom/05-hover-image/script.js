/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // keep mouseover and mouseout separated !
    // change source from img to data-hover source ;)
    // no reset needed
    var imgSource = document.querySelector("img").getAttribute("src");
    var newImgSource = document.querySelector("img").getAttribute("data-hover");
    //console.log(imgSource);
    //console.log(newImgSource); // why null tho ? 
    document.querySelector("img").addEventListener("mouseover", function(event) {
    console.log("scrolledy") //scroll over initiated; fix out
    })

    document.querySelector("img").addEventListener("mouseout", function(event) {
        console.log("bye") //scroll over initiated; fix out
    })
    
})();
