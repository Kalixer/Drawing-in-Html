"use strict";
import draw from "./draw.js"


draw(1, 1, 1, 499, "black");
draw(1, 1, 499, 1, "black");
draw(499, 499, 1, 499, "black");
draw(499, 1, 499, 499, "black");

const boton = document.getElementById("botoncito")
const d = boton.addEventListener('click', drawLines)

let execution;
let intervalo;
let counter = 0;
let a = 1;

function drawing() {
    let x1 = document.getElementById("Color1")
    let hex1 = x1.value;
    let x2 = document.getElementById("Color2")
    let hex2 = x2.value;
    let x3 = document.getElementById("Color3")
    let hex3 = x3.value;
    
    counter++;
    
    if(counter == 25){
        clearInterval(intervalo)

        setTimeout(() => {
            const phrase = document.getElementById("lastMessage")
            phrase.innerHTML = "Pretty, isn't it?";
        }, 2000)
    }

    a = counter * 20;
    
    draw(500 - a, 500, 0, 500 - a, hex1); // 1st
    draw(a, 0, 500, a, hex2); // 2nd
    
    draw(0, 500 - a, a, 0, hex3) // 3rd
    draw(500, 0 + a, 500 - a, 500, hex3) //4th
    
}

function drawLines() {
    
    if(!execution) {
        intervalo = setInterval(drawing, 100)
    }

}

