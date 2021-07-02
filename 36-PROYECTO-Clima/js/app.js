// 01/07/2021 - Fecha de Inicio.

const container = document.querySelector('.container');
const reult = document.querySelector('#resultado');
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