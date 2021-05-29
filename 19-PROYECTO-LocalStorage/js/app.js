// 28/05/2021 Fecha de Inicio.

// Variables.
const form = document.querySelector('#formulario');
const tweetsList = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners.
eventListeners();

function eventListeners() {
    form.addEventListener('submit', addTweet);
}


// Funciones.
function addTweet(cheems) {
    cheems.preventDefault();

    console.log('Adding tweet');
}