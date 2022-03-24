import draw from "./draw.js"


draw(1, 1, 1, 499, "black");
draw(1, 1, 499, 1, "black");
draw(499, 499, 1, 499, "black");
draw(499, 1, 499, 499, "black");

const boton = document.getElementById("botoncito")
const d = boton.addEventListener('click', drawing)


function drawing() {
    let x1 = document.getElementById("Color1")
    let hex1 = x1.value;
    let x2 = document.getElementById("Color2")
    let hex2 = x2.value;
    let x3 = document.getElementById("Color3")
    let hex3 = x3.value;

    for(let i=0; i<25; i++) {
        let a = i;
        a = a * 20;
        draw(0, 500-a, a, 0, hex3);
        draw(a, 500, 500, 500-a, hex3);
    }
    for(let i=0; i<25; i++) {
        let a = i;
        a = a * 20;
        draw(0, a, a, 500, hex1);
    }
    for(let i=0; i<25; i++) {
        let a = i;
        a = a * 20;
        draw(a, 0, 500, a, hex2);
    }
}



// function send() {
//     let x1 = document.getElementById("Color1")
//     let hex1 = x1.value;
//     let x2 = document.getElementById("Color2")
//     let hex2 = x2.value;
//     let x3 = document.getElementById("Color3")
//     let hex3 = x3.value;
    
//     console.log(`Value of color 1 is ${hex1}`)
//     console.log(`Value of color 2 is ${hex2}`)
//     console.log(`Value of color 2 is ${hex3}`)
// }