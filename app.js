//const aviso = require("prompt-sync")();
const boton = document.querySelector("button");
const A = document.querySelectorAll(".A1, .A2, .A3, .A4, .A5");
let index = 0;
let count = 0;

function spin() {
  if (index < A.length) {
    if ((count%2) === 0) {
      A[index].style.backgroundColor = "red";
    } 
    else if ((count%2) !== 0) {
      A[index].style.backgroundColor = "blue";
    }
    setTimeout(function() {
      A[index].style.backgroundColor = "orange";
      index++;
      spin(); // Llama a la función spin nuevamente para el siguiente div
    }, 100);
    } 
  else {
    console.log(count)
    count++;
    if (count <= 5) {
      index = 0;
      spin();
    }
  }
}

boton.addEventListener('click', function() {
  index = 0;
  count = 0;
  spin();
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