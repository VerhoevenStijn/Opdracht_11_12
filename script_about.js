//Hamburger menu
let hamburger = document.querySelector(".hamburger");
let menuNav = document.querySelector("nav");
let mijnSpan = document.querySelector("span");


function toonMenu() {
if(menuNav.style.display === "flex") {
menuNav.style.display = "none";
mijnSpan.getAttribute("class");
mijnSpan.setAttribute("class", "hamburger");
}
else {
menuNav.style.display = "flex";
mijnSpan.getAttribute("class");
mijnSpan.setAttribute("class", "close");
}
}
hamburger.addEventListener("click",  toonMenu);

let moreInfo = document.querySelector("h3");
let mijnExtra = document.querySelector(".extra");
let mijnAnimaties = document.querySelectorAll("p");
moreInfo.addEventListener("click", function() {
  mijnExtra.classList.toggle("zichtbaar");
  let i = 0;
  while (i < mijnAnimaties.length) {
    mijnAnimaties[i].style.animationPlayState = "running";
    i++;
  }
})
