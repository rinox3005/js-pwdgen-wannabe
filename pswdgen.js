'use strict';

//assegno ad outputText il valore dell'elemento con id password
let outputText = document.getElementById('password');

//imposto una variabile che racchiude in se il contenuto html dell'elemento con id password 
let output = outputText.innerHTML;

const userName = prompt('Enter your name');

const userLastName = prompt('Enter your last name');

const userFavColor = prompt('Enter your favourite color');