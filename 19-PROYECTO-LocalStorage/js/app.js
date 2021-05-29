// 28/05/2021 Fecha de Inicio.

// Variables.
const form = document.querySelector('#formulario');
const tweetsList = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners.
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo Tweet.
    form.addEventListener('submit', addTweet);

    // Cuando el documento está listo.
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        console.log(tweets);

        createHTML();
    });
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

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir al arreglo de Tweets.
    tweets = [...tweets, tweetObj];

    // Una vez agregado, crear HTML.
    createHTML();   
    
    // Reiniciar el formulario.
    form.reset();
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


// Muestra un listado de los tweets.

function createHTML() {

    cleanHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Crear el HTML.
            const li = document. createElement('li');

            // Añadir el texto.
            li.innerText = tweet.tweet

            // Insertarlo en el HTML.
            tweetsList.appendChild(li);
        });
    }

    syncStorage();
}

// Agrega los Tweets actuales.
function syncStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Limpiar HTML.

function cleanHTML() {
    while (tweetsList.firstChild) {
        tweetsList.removeChild(tweetsList.firstChild);
    }
}