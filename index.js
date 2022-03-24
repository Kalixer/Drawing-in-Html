import draw from "./draw.js"

console.log("Connected and runnig");

draw(1, 1, 1, 499, "purple");
draw(1, 1, 499, 1, "purple");
draw(499, 499, 1, 499, "purple");
draw(499, 1, 499, 499, "purple");

const d = document.addEventListener('click', drawing)

async function drawing() {
    for(let i=0; i<25; i++) {
        await setTimeout(function() {
            let a = i;
            a = a * 20;
            draw(0, a, a, 500, "purple");
        }, 2000)
    }
}


