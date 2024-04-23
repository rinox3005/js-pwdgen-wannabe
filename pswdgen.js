'use strict';

//assegno ad outputText il valore dell'elemento con id password
let outputText = document.getElementById('password');

//imposto una variabile che racchiude in se il contenuto html dell'elemento con id password 
let output = outputText.innerHTML;

//BONUS: generatore random di numeri tra 0 e 1000
let randomNumber = Math.floor((Math.random() * 1000) + 1);

//richiesta nome utente e salvataggio in una variabile
const userName = prompt('Enter your name');

//richiesta cognome utente e salvataggio in una variabile
const userLastName = prompt('Enter your last name');

//richiesta colore preferito utente e salvataggio in una variabile
const userFavColor = prompt('Enter your favourite color');

//calcolo il nuovo valore della variabile output
output = `${output}${userName}${userLastName}${userFavColor}${randomNumber}`;

//mostro il valore della variabile output nel documento HTML
outputText.innerHTML = output;

//BONUS: visualizzazione output in console
console.log(output);