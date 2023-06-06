//const aviso = require("prompt-sync")();
// Variables
var spinButton = document.getElementById("button");
var divA1 = document.querySelector(".A1");
var divA2 = document.querySelector(".A2");
var divA3 = document.querySelector(".A3");
var divA4 = document.querySelector(".A4");
var divA5 = document.querySelector(".A5");
var colorsA1 = ["yellow", "red", "orange", "red", "red", "yellow", "red", "rgb(47, 0, 90)", "orange", "red"];
var colorsA2 = ["red", "yellow", "red", "orange", "red", "red", "yellow", "red", "rgb(47, 0, 90)", "orange"];
var colorsA3 = ["orange", "red", "yellow", "red", "orange", "red", "red", "yellow", "red", "rgb(47, 0, 90)"];
var colorsA4 = ["rgb(47, 0, 90)", "orange", "red", "yellow", "red", "orange", "red", "red", "yellow", "red"];
var colorsA5 = [ "red", "rgb(47, 0, 90)", "orange", "red","yellow", "red", "orange", "red", "red", "yellow"];
var letterA1 = ["0","Q","@","oo","oo","O","Q","7","@","oo"]
var letterA2 = ["oo","0","Q","@","oo","oo","O","Q","7","@"]
var letterA3 = ["@","oo","0","Q","@","oo","oo","O","Q","7"]
var letterA4 = ["7","@","oo","0","Q","@","oo","oo","O","Q"]
var letterA5 = ["Q","7","@","oo","0","Q","@","oo","oo","O"]
var currentIndex = 0;

// Funciones
function changeColor() {
  divA1.style.backgroundColor = colorsA1[currentIndex];
  divA1.innerHTML = letterA1[currentIndex];
  divA2.style.backgroundColor = colorsA2[currentIndex];
  divA2.innerHTML = letterA2[currentIndex];
  divA3.style.backgroundColor = colorsA3[currentIndex];
  divA3.innerHTML = letterA3[currentIndex];
  divA4.style.backgroundColor = colorsA4[currentIndex];
  divA4.innerHTML = letterA4[currentIndex];
  divA5.style.backgroundColor = colorsA5[currentIndex];
  divA5.innerHTML = letterA5[currentIndex];
  currentIndex++;
  if (currentIndex === colorsA1.length) {
    currentIndex = 0;
  }
}

// Evento de clic para el botón "Spin"
spinButton.addEventListener("click", function() {
  for (var i = 0; i < 50; i++) {
    setTimeout(changeColor, i * 300);
  }
});




const deposit = () => {
    while (true){
        const depositAmount = aviso("Intoduzca una cantidad de deposito: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <=0){
            console.log("Deposito invalido");
        }
        else{
            return numberDepositAmount;
        }
    }
};

const getLines = () => {
    while (true){
        const lines= aviso("Intoduzca el numero de lineas para apostar (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <1 || numberOfLines >3){
            console.log("Numero de lineas invalido");
        }
        else{
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while (true){
        const bet= aviso("Intoduzca cuanto desea apostar por linea: ");
        const betAsNum = parseFloat(bet);

        if (isNaN(betAsNum) || betAsNum <=0 ||betAsNum > (balance/lines)){
            console.log("Apuesta invalida");
        }
        else{
            return betAsNum;
        }
    }
}

// let balance = deposit();
// console.log(balance + "$ depositados");
// const linesbet = getLines();
// console.log("Aopostaste a "+linesbet+ " lineas");
// const betAmount = getBet(deposit, getLines)
// console.log(betAmount + "$ apostados, "+(betAmount/linesbet)+"$ a cada fila")