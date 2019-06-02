let mijnAntwoord1 = document.querySelector(".jaartal1");
console.log(mijnAntwoord1);
let mijnAntwoord2 = document.querySelector(".jaartal2");
let antwoord = document.querySelector(".antwoord");

mijnAntwoord1.addEventListener("click", antwoord1);
mijnAntwoord2.addEventListener("click", antwoord2);

function antwoord1(){
  console.log("klik werkt");
  mijnAntwoord1.style.display = "none";
  mijnAntwoord2.style.display = "none";
  antwoord.style.display = "flex";
  antwoord.style.color = "green";
}

function antwoord2(){
  mijnAntwoord1.style.display = "none";
  mijnAntwoord2.style.display = "none";
  antwoord.style.display = "flex";
  antwoord.style.color = "red";
}
