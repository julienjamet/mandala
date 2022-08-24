/*Définition des variables couleurs------------------------*/
const colorOne = document.getElementById("colorOne");
const colorTwo = document.getElementById("colorTwo");
const colorThree = document.getElementById("colorThree");
/*---------------------------------------------------------*/


/*Définition des variables canvas------------------------*/
const monCanvas = document.getElementById('dessin');
const ctx = monCanvas.getContext('2d');
/*---------------------------------------------------------*/


/*Initialisation des variables couleurs--------------------*/
let colorOneChoice = "red";
let colorTwoChoice = "yellow";
let colorThreeChoice = "blue";
/*---------------------------------------------------------*/


/*Initialisation des variables canvas--------------------*/
let lingrad;
let panel = {};
/*---------------------------------------------------------*/


/*Modification des variables couleurs----------------------*/
colorOne.addEventListener("change", function(e) {
    colorOneChoice = e.target.value;
    console.log(colorOneChoice);
});
colorTwo.addEventListener("change", function(e) {
    colorTwoChoice = e.target.value;
    console.log(colorTwoChoice);
});
colorThree.addEventListener("change", function(e) {
    colorThreeChoice = e.target.value;
    console.log(colorThreeChoice);
});
/*---------------------------------------------------------*/


/*Sauvegarde et récupération du localStorage---------------*/  
function savePanel(panel) {
    localStorage.setItem("panel", JSON.stringify(panel));
};
function getPanel() {
    let panel = localStorage.getItem("panel");
    if (panel === null) {
        return [];
    }
    else {
        return JSON.parse(panel);
    };
};
/*---------------------------------------------------------*/


/*Ajout du panel dans le localStorage----------------------*/
const submit = document.getElementById("submit");
submit.addEventListener("click", function(e) {
    e.preventDefault();
    let panel = {
        colorOne: colorOneChoice,
        colorTwo: colorTwoChoice,
        colorThree: colorThreeChoice
    };
    savePanel(panel);
    window.location.reload();
});
/*---------------------------------------------------------*/


/*Ajout du panel dans le localStorage-----------------------*/
window.addEventListener("DOMContentLoaded", function() {
    let panel = getPanel();
    console.log(panel.colorOne);

    lingrad = ctx.createLinearGradient(0,0,200,0);

    lingrad.addColorStop(0, `${panel.colorOne}`);
    lingrad.addColorStop(0.05, `${panel.colorTwo}`);
    lingrad.addColorStop(0.1, `${panel.colorThree}`);

    ctx.fillStyle = lingrad;

    ctx.translate(monCanvas.width/1.5, monCanvas.height/2.5);

    let i = 0;
    const inter = setInterval(rotation, 5);

    function rotation() {
        ctx.translate(14,14.7);
        ctx.rotate(5);
        ctx.fillRect(0,0,200,10);
        i++;
    };
}); 
    /*lingrad.addColorStop(0.15, "green");
    lingrad.addColorStop(0.2, "black");
    lingrad.addColorStop(0.25, "green");
    lingrad.addColorStop(0.3, "silver");
    lingrad.addColorStop(0.35, "green");
    lingrad.addColorStop(0.4, "black");
    lingrad.addColorStop(0.45, "orange");
    lingrad.addColorStop(0.5, "silver");
    lingrad.addColorStop(0.55, "green");
    lingrad.addColorStop(0.6, "black");
    lingrad.addColorStop(0.65, "yellowgreen");
    lingrad.addColorStop(0.7, "black");
    lingrad.addColorStop(0.75, "silver");
    lingrad.addColorStop(0.8, "orange");
    lingrad.addColorStop(0.85, "black");
    lingrad.addColorStop(0.9, "yellowgreen");
    lingrad.addColorStop(0.95, "green");
    lingrad.addColorStop(1, "silver");*/