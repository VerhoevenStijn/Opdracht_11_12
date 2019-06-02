//Hamburger
let menuKnop = document.querySelector(".hamburger");
let navMenu = document.querySelector("nav");
let mijnSpan = document.querySelector("span");
let mijnTitels = document.querySelectorAll("h3");
let mijnPlus = document.querySelectorAll(".plus")
let mijnBody = document.querySelector("body");

function toonMenu() {
if(navMenu.style.display === "flex") {
navMenu.style.display = "none";
this.getAttribute("class");
this.setAttribute("class", "hamburger");
}
else {
navMenu.style.display = "flex";
this.getAttribute("class");
this.setAttribute("class", "close");
}
}
menuKnop.addEventListener("click",  toonMenu);
