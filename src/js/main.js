'use strict';

console.log('Adivina el número :)');

/*
Seleccionar los elementos html en donde se va a actuar
-input de texto
-button donde hace click
-parrafo donde se le da la pista y la respuesta
-parrafo donde se da los numeros de intentos
Cuando la usuaria haga click
 -se almacenará el valor del número escrito y se le devolverá:
    -si el valor es mayor : Demasiado alto
    -si el valor es menor: Demasiado bajo
    -si el valor es igual : Has ganado campeona!!!
    -si el valor no es entre 1 y 100 : El número debe estar entre 1 y 100.
*/
const inputNumber = document.querySelector(".js-inputNumber");
const buttonSubmit = document.querySelector(".js-buttonSubmit");
const txtAnswer = document.querySelector(".js-txtAnswer");
const txtNumber = document.querySelector(".js-txtNumberAttempts");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber)

let attemps = 0;




const handleClick = (ev) => {
    ev.preventDefault();
    const inputNumberValue = parseInt(inputNumber.value);
    if (inputNumberValue < 1 || inputNumberValue > 100 || !inputNumber) {
        txtAnswer.innerHTML = "El número debe de ser entre 1 y 100";
    } else if (inputNumberValue === randomNumber) {
        txtAnswer.innerHTML = "Enhorabuena campeona!!";
    }
    else if (inputNumberValue < randomNumber) {
        txtAnswer.innerHTML = "Demasiado bajo";
    }
    else if (inputNumberValue > randomNumber) {
        txtAnswer.innerHTML = "Demasiado alto";
    }
    attemps += 1;
    txtNumber.innerHTML = attemps;
}

buttonSubmit.addEventListener("click", handleClick);