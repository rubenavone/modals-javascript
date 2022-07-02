//Selecteur qui servira pour toutes les modale
let globalModalSelector = document.querySelector(".modal");
let crossSelector = document.querySelectorAll(".cross")

//EVENT pour tous
crossSelector.forEach(function(cross){
    cross.addEventListener("click", function () {
        removeAll();

    })
})


/**
 * Cookie modal gestion
 */

//SELECTOR

let cookieBtnSelector = document.querySelector(".cookie");
let cookieModalSelector = document.querySelector(".cookie-modal");
//Function
function cookieToggler() {
    cookieModalSelector.classList.toggle("d-none");
    globalModalSelector.classList.toggle("d-none");
}
//évenement
cookieBtnSelector.addEventListener("click", function (e) {
    cookieToggler()

})



globalModalSelector.addEventListener("click", function (e) {
    if (e.target !== this) {
        return;
    }
    removeAll();
})


/**
 * news-letter modal gestion
 */

//SELECTOR

let newsBtnSelector = document.querySelector(".news-letter");
let newsModalSelector = document.querySelector(".news-letter-modal")
//FUNCTION
function newsToggler(){
    newsModalSelector.classList.toggle("d-none");
    globalModalSelector.classList.toggle("d-none"); 
}

//EVENT
newsBtnSelector.addEventListener("click",function(){
    newsToggler();
})


function removeAll(){
    cookieModalSelector.classList.add("d-none");
    globalModalSelector.classList.add("d-none");
    newsModalSelector.classList.add("d-none")
}