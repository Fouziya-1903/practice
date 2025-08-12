const para = "loremkkldsjodijpojpdoskop jznjndsnv jvjdls";

let timeStart;
let timeEnd;
let fullpara;

const paraEl = document.getElementById("para");

const inputEl = document.getElementById("input1");

const startbtn = document.getElementById("btn");

const resultEl = document.getElementById("result");

startbtn.addEventListener("click",timeStart);

function startTest(){
    paraEl.textContent = fullpara;
    inputEl.value ="";
    
}