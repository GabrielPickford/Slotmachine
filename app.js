//const aviso = require("prompt-sync")();
// Variables
var spinButton = document.getElementById("button");
var row1 = document.querySelectorAll(".A1, .A2, .A3, .A4, .A5");
var row2 = document.querySelectorAll(".B1, .B2, .B3, .B4, .B5");
var row3 = document.querySelectorAll(".C1, .C2, .C3, .C4, .C5");
var colors1 = [
  ["yellow", "red", "orange", "red", "red", "yellow", "red", "rgb(47, 0, 90)", "orange", "red"],
  ["red", "yellow", "red", "orange", "red", "red", "yellow", "red", "rgb(47, 0, 90)", "orange"],
  ["orange", "red", "yellow", "red", "orange", "red", "red", "yellow", "red", "rgb(47, 0, 90)"],
  ["rgb(47, 0, 90)", "orange", "red", "yellow", "red", "orange", "red", "red", "yellow", "red"],
  ["red", "rgb(47, 0, 90)", "orange", "red","yellow", "red", "orange", "red", "red", "yellow"]
];
var colors2 = [
  ["orange","yellow","red","red","orange","orange","red","rgb(47, 0, 90)","yellow","orange"],
  ["orange","orange","yellow","red","red","orange","orange","red","rgb(47, 0, 90)","yellow"],
  ["yellow","orange","orange","yellow","red","red","orange","orange","red","rgb(47, 0, 90)"],
  ["rgb(47, 0, 90)","yellow","orange","orange","yellow","red","red","orange","orange","red"],
  ["red","rgb(47, 0, 90)","yellow","orange","orange","yellow","red","red","orange","orange"]
];
var colors3 = [
  ["red","red","red","orange","red","orange","red","rgb(47, 0, 90)","red","yellow"],
  ["yellow","red","red","red","orange","red","orange","red","rgb(47, 0, 90)","red"],
  ["red","yellow","red","red","red","orange","red","orange","red","rgb(47, 0, 90)"],
  ["rgb(47, 0, 90)","red","yellow","red","red","red","orange","red","orange","red"],
  ["red","rgb(47, 0, 90)","red","yellow","red","red","red","orange","red","orange"]
];
var symbols1 = [
  ["0","Q","@","oo","oo","0","Q","7","@","oo"],
  ["oo","0","Q","@","oo","oo","0","Q","7","@"],
  ["@","oo","0","Q","@","oo","oo","0","Q","7"],
  ["7","@","oo","0","Q","@","oo","oo","0","Q"],
  ["Q","7","@","oo","0","Q","@","oo","oo","0"]
];
var symbols2 = [
  ["@","0","oo","Q","@","@","oo","7","0","@"],
  ["@","@","0","oo","Q","@","@","oo","7","0"],
  ["0","@","@","0","oo","Q","@","@","oo","7"],
  ["7","0","@","@","0","oo","Q","@","@","oo"],
  ["oo","7","0","@","@","0","oo","Q","@","@"]
];
var symbols3 = [
  ["oo","Q","oo","@","Q","@","Q","7","oo","0"],
  ["0","oo","Q","oo","@","Q","@","Q","7","oo"],
  ["oo","0","oo","Q","oo","@","Q","@","Q","7"],
  ["7","oo","0","oo","Q","oo","@","Q","@","Q"],
  ["Q","7","oo","0","oo","Q","oo","@","Q","@"]
];
var currentIndex1 = 0;
var currentIndex2 = 0;
var currentIndex3 = 0;

// Funciones
function spin1() {
  for (var i = 0; i < row1.length; i++) {
    row1[i].style.backgroundColor = colors1[i][currentIndex1];
    row1[i].innerHTML = symbols1[i][currentIndex1];
  }
  currentIndex1++;
  if (currentIndex1 === colors1[0].length) {
    currentIndex1 = 0;
  }
}
function spin2() {
  for (var i = 0; i < row2.length; i++) {
    row2[i].style.backgroundColor = colors2[i][currentIndex2];
    row2[i].innerHTML = symbols2[i][currentIndex2];
  }
  currentIndex2++;
  if (currentIndex2 === colors2[0].length) {
    currentIndex2 = 0;
  }
}
function spin3() {
  for (var i = 0; i < row3.length; i++) {
    row3[i].style.backgroundColor = colors3[i][currentIndex3];
    row3[i].innerHTML = symbols3[i][currentIndex3];
  }
  currentIndex3++;
  if (currentIndex3 === colors3[0].length) {
    currentIndex3 = 0;
  }
}

// Evento de clic para el botón "Spin"
spinButton.addEventListener("click", function() {
  var maxIterations1 = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
  var maxIterations2 = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
  var maxIterations3 = Math.floor(Math.random() * (50 - 20 + 1)) + 20; // Generar número aleatorio entre 20 y 50
  for (var i = 0; i < maxIterations1; i++) {
    setTimeout(spin1, i * 200);
  }
  for (var i = 0; i < maxIterations2; i++) {
    setTimeout(spin2, i * 200);
  }
  for (var i = 0; i < maxIterations3; i++) {
    setTimeout(spin3, i * 200);
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