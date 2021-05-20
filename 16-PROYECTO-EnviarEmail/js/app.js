// 19/05/2021 Fecha de Inicio


// Variables

eventListeners();

const enviar = document.querySelector('#enviar')


function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciar)
}


// Funciones

function iniciar() {
    enviar.disabled = true;
    enviar.classList.add('cursor-notallowed', 'opacity-50'); // Añade clases del Framework CSS Tailwind
}