document.interestCohort();


/*Définition des variables couleurs------------------------*/
const colorOne = document.getElementById("colorOne");
const colorTwo = document.getElementById("colorTwo");
const colorThree = document.getElementById("colorThree");
const colorFour = document.getElementById("colorFour");
const colorFive = document.getElementById("colorFive");
const colorSix = document.getElementById("colorSix");
const colorSeven = document.getElementById("colorSeven");
const colorEight = document.getElementById("colorEight");
const colorNine = document.getElementById("colorNine");
const colorTen = document.getElementById("colorTen");
/*---------------------------------------------------------*/


/*Définition des variables mouvements------------------------*/
const translationX = document.getElementById("translationX");
const translationY = document.getElementById("translationY");
const rotation = document.getElementById("rotation");
const timing = document.getElementById("timing");
/*---------------------------------------------------------*/


/*Définition des variables canvas--------------------------*/
const monCanvas = document.getElementById('dessin');
const ctx = monCanvas.getContext('2d');
/*---------------------------------------------------------*/


/*Initialisation des variables canvas----------------------*/
let lingrad;
let panel = getPanel();
/*---------------------------------------------------------*/


/*Initialisation des variables couleurs--------------------*/
let colorOneChoice = panel.colorOne;
let colorTwoChoice = panel.colorTwo;
let colorThreeChoice = panel.colorThree;
let colorFourChoice = panel.colorFour;
let colorFiveChoice = panel.colorFive;
let colorSixChoice = panel.colorSix;
let colorSevenChoice = panel.colorSeven;
let colorEightChoice = panel.colorEight;
let colorNineChoice = panel.colorNine;
let colorTenChoice = panel.colorTen;
/*---------------------------------------------------------*/


/*Initialisation des variables mouvements--------------------*/
let translationXChoice = panel.translationX;
let translationYChoice = panel.translationY;
let rotationChoice = panel.rotation;
let timingChoice = panel.timing;
/*---------------------------------------------------------*/


/*Modification des variables couleurs----------------------*/
colorOne.addEventListener("change", function(e) {
    if (colorOneChoice == undefined) {
        colorOneChoice = panel.colorOne;
    }
    else {
        colorOneChoice = e.target.value;
    }
});
colorTwo.addEventListener("change", function(e) {
    if (colorTwoChoice == undefined) {
        colorTwoChoice = panel.colorTwo;
    }
    else {
        colorTwoChoice = e.target.value;
    }
});
colorThree.addEventListener("change", function(e) {
    if (colorThreeChoice == undefined) {
        colorThreeChoice = panel.colorThree;
    }
    else {
        colorThreeChoice = e.target.value;
    }
});
colorFour.addEventListener("change", function(e) {
    if (colorFourChoice == undefined) {
        colorFourChoice = panel.colorFour;
    }
    else {
        colorFourChoice = e.target.value;
    }
});
colorFive.addEventListener("change", function(e) {
    if (colorFiveChoice == undefined) {
        colorFiveChoice = panel.colorFive;
    }
    else {
        colorFiveChoice = e.target.value;
    }
});
colorSix.addEventListener("change", function(e) {
    if (colorSixChoice == undefined) {
        colorSixChoice = panel.colorSix;
    }
    else {
        colorSixChoice = e.target.value;
    }
});
colorSeven.addEventListener("change", function(e) {
    if (colorSevenChoice == undefined) {
        colorSevenChoice = panel.colorSeven;
    }
    else {
        colorSevenChoice = e.target.value;
    }
});
colorEight.addEventListener("change", function(e) {
    if (colorEightChoice == undefined) {
        colorEightChoice = panel.colorEight;
    }
    else {
        colorEightChoice = e.target.value;
    }
});
colorNine.addEventListener("change", function(e) {
    if (colorNineChoice == undefined) {
        colorNineChoice = panel.colorNine;
    }
    else {
        colorNineChoice = e.target.value;
    }
});
colorTen.addEventListener("change", function(e) {
    if (colorTenChoice == undefined) {
        colorTenChoice = panel.colorTen;
    }
    else {
        colorTenChoice = e.target.value;
    }
});
/*---------------------------------------------------------*/


/*Modification des variables mouvements----------------------*/
translationX.addEventListener("change", function(e) {
    if (translationXChoice == undefined) {
        translationXChoice = panel.translationX;
    }
    else {
        translationXChoice = e.target.value;
    }
});
translationY.addEventListener("change", function(e) {
    if (translationYChoice == undefined) {
        translationYChoice = panel.translationY;
    }
    else {
        translationYChoice = e.target.value;
    }
});
rotation.addEventListener("change", function(e) {
    if (rotationChoice == undefined) {
        rotationChoice = panel.rotation;
    }
    else {
        rotationChoice = e.target.value;
    }
});
timing.addEventListener("change", function(e) {
    if (timingChoice == undefined) {
        timingChoice = panel.timing;
    }
    else {
        timingChoice = e.target.value;
    }
});


/*Sauvegarde et récupération du localStorage---------------*/  
function savePanel(panel) {
    localStorage.setItem("panel", JSON.stringify(panel));
};
function getPanel() {
    let panel = localStorage.getItem("panel"); /**/
    if (panel === null) {
        let panel = {
            colorOne: "black",
            colorTwo: "purple",
            colorThree: "darkviolet",
            colorFour: "violet",
            colorFive: "blue",
            colorSix: "skyblue",
            colorSeven: "green",
            colorEight: "yellow",
            colorNine: "orange",
            colorTen: "red",
            translationX: 1,
            translationY: 100,
            rotation: 100,
            timing: 20
        };
        return panel;
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
        colorThree: colorThreeChoice,
        colorFour: colorFourChoice,
        colorFive: colorFiveChoice,
        colorSix: colorSixChoice,
        colorSeven: colorSevenChoice,
        colorEight: colorEightChoice,
        colorNine: colorNineChoice,
        colorTen: colorTenChoice,
        translationX: translationXChoice,
        translationY: translationYChoice,
        rotation: rotationChoice,
        timing: timingChoice
    };
        savePanel(panel);
        window.location.reload();
});
/*---------------------------------------------------------*/


/*Récupération du panel et application dans le DOM-----------------------*/
window.addEventListener("DOMContentLoaded", function() {
    Permissions-Policy: interest-cohort=();
    let panel = getPanel();

    colorOne.setAttribute("value", `${panel.colorOne}`);
    colorTwo.setAttribute("value", `${panel.colorTwo}`);
    colorThree.setAttribute("value", `${panel.colorThree}`);
    colorFour.setAttribute("value", `${panel.colorFour}`);
    colorFive.setAttribute("value", `${panel.colorFive}`);
    colorSix.setAttribute("value", `${panel.colorSix}`);
    colorSeven.setAttribute("value", `${panel.colorSeven}`);
    colorEight.setAttribute("value", `${panel.colorEight}`);
    colorNine.setAttribute("value", `${panel.colorNine}`);
    colorTen.setAttribute("value", `${panel.colorTen}`);
    translationX.setAttribute("value", `${panel.translationX}`);
    translationY.setAttribute("value", `${panel.translationY}`);
    timing.setAttribute("value", `${panel.timing}`);

    lingrad = ctx.createLinearGradient(0,0,200,0);

    lingrad.addColorStop(0, `${panel.colorOne}`);
    lingrad.addColorStop(0.1, `${panel.colorTwo}`);
    lingrad.addColorStop(0.2, `${panel.colorThree}`);
    lingrad.addColorStop(0.3, `${panel.colorFour}`);
    lingrad.addColorStop(0.4, `${panel.colorFive}`);
    lingrad.addColorStop(0.5, `${panel.colorSix}`);
    lingrad.addColorStop(0.6, `${panel.colorSeven}`);
    lingrad.addColorStop(0.7, `${panel.colorEight}`);
    lingrad.addColorStop(0.8, `${panel.colorNine}`);
    lingrad.addColorStop(0.9, `${panel.colorTen}`);

    ctx.fillStyle = lingrad;

    ctx.translate(monCanvas.width/2, monCanvas.height/2.5);

    let i = 0;
    const inter = setInterval(rotation, `${panel.timing}`);

    function rotation() {
        ctx.translate(`${panel.translationX}`, `${panel.translationY}`);
        ctx.rotate(`${panel.rotation}`);
        ctx.fillRect(0,0,200,10);
        i++;
    };
}); 