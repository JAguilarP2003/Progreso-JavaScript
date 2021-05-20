// 19/05/2021 Fecha de Inicio


// Variables



const enviar = document.querySelector('#enviar')


// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const msg = document.querySelector('#mensaje');

eventListeners();
function eventListeners() {
    // Una vez arranque la APP
    document.addEventListener('DOMContentLoaded', iniciar)

    // Campos del formulario
    email.addEventListener('blur', validarForm);
    asunto.addEventListener('blur', validarForm);
    msg.addEventListener('blur', validarForm);

}


// Funciones

function iniciar() {
    enviar.disabled = true;
    enviar.classList.add('cursor-notallowed', 'opacity-50'); // Añade clases del Framework CSS Tailwind
}


// Valida el formulario (Dependiedo de los datos en el input, así mismo serán sus clases.)
function validarForm(cheems) {
    if (cheems.target.value.length > 0) {
        console.log('Sí hay algo');
    } else {
        cheems.target.classList.add('border', 'border-red-500');
    }
}