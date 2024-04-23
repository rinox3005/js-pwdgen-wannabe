'use strict';

//assegno ad outputText il valore dell'elemento con id password
let outputText = document.getElementById('password');

//imposto una variabile che racchiude in se il contenuto html dell'elemento con id password 
let output = outputText.innerHTML;

//richiesta nome utente e salvataggio in una variabile
const userName = prompt('Enter your name');

//richiesta cognome utente e salvataggio in una variabile
const userLastName = prompt('Enter your last name');

//richiesta colore preferito utente e salvataggio in una variabile
const userFavColor = prompt('Enter your favourite color');

//calcolo il nuovo valore della variabile output
output = `${output}${userName}${userLastName}${userFavColor}12`;

//mostro il valore della variabile output nel documento HTML
outputText.innerHTML = output;

//visualizzazione output in console
console.log(output);