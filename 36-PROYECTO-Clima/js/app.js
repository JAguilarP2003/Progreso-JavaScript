// 01/07/2021 - Fecha de Inicio.

const container = document.querySelector('.container');
const result = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

window.addEventListener('load', ()=> {
    form.addEventListener('submit', searchWeather);
})

function searchWeather(cheems) {
    cheems.preventDefault();

    // Validar
    const city = document.querySelector('#ciudad').value;
    const country = document.querySelector('#pais').value;

    if (city === '' || country === '') {
        // Hubo un error.
        showError('Ambos campos son obligatorios.');

        return;
    }

    // Consultar la API
    consultAPI(city, country)
}

function showError(msg) {
    const alert = document.querySelector('.bg-red-100');

    if (!alert) {
        // Crear alerta
        const alert = document.createElement('div');

        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${msg}</span>
        `;

        container.appendChild(alert);

        // Eliminar la alerta después de 5 segundos
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
}

function consultAPI(city, country) {

    const appId = '40a65113dee798ec8ec98c5da9e15d7c';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;


    fetch(url)
        .then(answer => answer.json())
        .then(data => {

            cleanHTML(); // Limpiar el HTML previo.

            if (data.cod === '404') {
                showError('Ciudad no encontrada')
                return;
            }

            //Imprime la respuesta en el HTML
            showWeather(data);
        })
}

function showWeather(data) {
    const { main: { temp, temp_max, temp_min } } = data;

    const celciusDegrees = kelvinToCelcius(temp);

    const current = document.createElement('p');
    current.innerHTML = `${celciusDegrees} &#8451`;
    current.classList.add('font-bold', 'text-6xl');

    const divResult = document.createElement('div');
    divResult.classList.add('text-center', 'text-white');
    divResult.appendChild(current);

    result.appendChild(divResult);
}

const kelvinToCelcius = degrees => parseInt(degrees - 273.15);

function cleanHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}
