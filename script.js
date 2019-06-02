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

//scroll events

let iframe1 = document.querySelector(".iframe1");
let iframe2 = document.querySelector(".iframe2");
let iframe3 = document.querySelector(".iframe3");
let iframe4 = document.querySelector(".iframe4");
let honderdVw = window.innerWidth;
let honderdVh = window.innerHeight;

window.addEventListener("scroll", function() {
      scrollPositiePx = window.pageYOffset;
      // paneel 1 komt binnen
      iframe1Pos = -(honderdVw - (scrollPositiePx)*2.5);
      if (iframe1Pos <= 0) {
            iframe1.style.right = iframe1Pos + "px";
            iframe1.style.bottom = iframe1Pos + "px";
      } else {
            iframe1.style.right = 0;
      }
      // paneel 2 komt binnen
      if (scrollPositiePx > honderdVh) {
            iframe2Pos = (honderdVw - ((scrollPositiePx-honderdVh*1.8)*3.5));
      if (iframe2Pos >= 0) {
            iframe2.style.right = iframe2Pos + "px";
            iframe2.style.bottom = iframe2Pos + "px";
      } else {
            iframe2.style.right = 0;
      }
      }
      // paneel 3 komt binnen
      if (scrollPositiePx > (honderdVh*2.6)) {
            iframe3Pos = -(honderdVw - (scrollPositiePx-(honderdVh*3.0))*3.5);
      if (iframe3Pos <= 0) {
            iframe3.style.right = iframe3Pos + "px";
            iframe3.style.bottom = iframe3Pos + "px";
      } else {
            iframe3.style.right = 0;
      }
      }
      // paneel 4 komt binnen
      if (scrollPositiePx > honderdVh*4.2) {
            iframe4Pos = (honderdVw - ((scrollPositiePx-honderdVh*4.6)*5));
      if (iframe4Pos >= 0) {
            iframe4.style.right = iframe4Pos + "px";
            iframe4.style.bottom = iframe4Pos + "px";
      } else {
            iframe4.style.right = 0;
      }
      }
});

let mijnBody = document.querySelector("body");
let mijnKnop = document.querySelector("h3");

function scrollen() {
  mijnBody.scrollTop = 10;
  console.log("hallo");
}

mijnKnop.addEventListener("click", scrollen);
