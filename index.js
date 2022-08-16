const monCanvas = document.getElementById('dessin');

const ctx = monCanvas.getContext('2d');

const lingrad = ctx.createLinearGradient(0,0,200,0);
lingrad.addColorStop(0, "black");
lingrad.addColorStop(0.05, "red");
lingrad.addColorStop(0.1, "black");
lingrad.addColorStop(0.15, "white");
lingrad.addColorStop(0.2, "black");
lingrad.addColorStop(0.25, "red");
lingrad.addColorStop(0.3, "black");
lingrad.addColorStop(0.35, "white");
lingrad.addColorStop(0.4, "black");
lingrad.addColorStop(0.45, "red");
lingrad.addColorStop(0.5, "black");
lingrad.addColorStop(0.55, "white");
lingrad.addColorStop(0.6, "black");
lingrad.addColorStop(0.65, "red");
lingrad.addColorStop(0.7, "black");
lingrad.addColorStop(0.75, "white");
lingrad.addColorStop(0.8, "black");
lingrad.addColorStop(0.85, "red");
lingrad.addColorStop(0.9, "black");
lingrad.addColorStop(0.95, "white");
lingrad.addColorStop(1, "black");

ctx.fillStyle = lingrad;

ctx.translate(monCanvas.width/1.5, monCanvas.height/2.5);

let i = 0;
const inter = setInterval(rotation);

function rotation() {
    ctx.translate(20,20);
    ctx.rotate(0.5);
    ctx.fillRect(0,0,200,10);
    i++;
};