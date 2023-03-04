"use strict";
import draw from "./draw.js"

draw(1, 1, 1, 499, "black");
draw(1, 1, 499, 1, "black");
draw(499, 499, 1, 499, "black");
draw(499, 1, 499, 499, "black");

let lienzo = document.getElementById('papel')
let context = lienzo.getContext('2d')

const boton_dibujar = document.getElementById("boton_dibujar")
const d = boton_dibujar.addEventListener('click', drawLines)

let execution = 0;
let intervalo;

let counter = 0;
let a = 1;


// This the function that draws, but is called by another functions
function drawing() {
    if(counter == 25){
        // Here the fuction breaks with 'clearInterval'
        clearInterval(intervalo)

        setTimeout(() => {
            boton_dibujar.innerText = 'Reset';
        }, 500)
    }

    // This is to get the colors
    let x1 = document.getElementById("Color1")
    let hex1 = x1.value;
    let x2 = document.getElementById("Color2")
    let hex2 = x2.value;
    let x3 = document.getElementById("Color3")
    let hex3 = x3.value;
    
    counter++;
    a = counter * 20;
    
    draw(500 - a, 500, 0, 500 - a, hex1); // 1st
    draw(a, 0, 500, a, hex2); // 2nd
    
    draw(0, 500 - a, a, 0, hex3) // 3rd
    draw(500, 0 + a, 500 - a, 500, hex3) //4th
    
}

function drawLines() {
    /* 
    setInterval will run until 'clearInterval' is called. 

    The 1st parameter calls the function and the 2nd is the time wait in miliseconds until it's called again
    
    It is declared a variable because it has to be cleared to stop
    */
    if(execution == 0) {
        intervalo = setInterval(drawing, 50)
        execution = 1
    } else {
        context.clearRect(0, 0, 500, 500) // Reset the canvas

        execution = 0
        counter = 0
        
        boton_dibujar.innerText = 'Draw';
    }

}

