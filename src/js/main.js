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
const inputText = document.querySelector(".js-inputText");
const buttonSubmit = document.querySelector(".js-buttonSubmit");
const txtAnswer = document.querySelector(".js-txtAnswer");
const txtNumber = document.querySelector(".js-txtNumberAttempts");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber)


const handleClick = (ev) => {
    ev.preventDefault();
    txtNumber.innterHTML = buttonSubmit.lenght;
    if (parseInt(inputText.value) === randomNumber) {
        txtAnswer.innerHTML = "Enhorabuena campeona!!";
    }
    else if (parseInt(inputText.value) < randomNumber) {
        txtAnswer.innterHTML = "Demasiado bajo";
    }
    else if (parseInt(inputText.value) > randomNumber) {
        txtAnswer.innterHTML = "Demasiado alto";
    }
}

buttonSubmit.addEventListener("click", handleClick);