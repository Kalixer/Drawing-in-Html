const d = document.getElementById("papel");
const lienzo = d.getContext("2d");

function draw(xi, yi, xf, yf, color) {
    lienzo.beginPath();
    lienzo.strokeStyle = color
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

export default draw;