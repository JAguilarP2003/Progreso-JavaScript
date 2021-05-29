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

    // Text Area donde el usuario escribe.
    const tweet = document.querySelector('#tweet').value;

    // Validación.
    if (tweet === '') {
        showError('You have to write something.');

        return; // Evita que se ejecuten más líneas de código.
    }

    console.log('Agregando tweet');
}

// Mostrar Mensaje de Error
function showError(error) {
    const msgError = document.createElement('p');
    msgError.textContent = error;
    msgError.classList.add('error');

    // Insertarlo en el contenido.
    const content = document.querySelector('#contenido');
    content.appendChild(msgError);

    setTimeout(() => {
        msgError.remove(); // Elimina la alerta después de 3 segundos.
    }, 3000);
}