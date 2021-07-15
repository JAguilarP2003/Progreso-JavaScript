// 14/07/2021 - Fecha de Inicio.

const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', validateSearch);
})

function validateSearch(cheems) {
    cheems.preventDefault();

    const search = document.querySelector('#busqueda').value;

    if (search.length < 3) {
        showMsg('Búsqueda muy corta... Añade más información.');
    }
}

function showMsg(msg) {

    const previousAlert = document.querySelector('.alerta');

    if (!previousAlert) {
        const alert = document.createElement('div');
        alert.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta');
        alert.textContent = msg;

        form.appendChild(alert);

        setTimeout(() => {
            alert.remove()
        }, 3000);
    }
}