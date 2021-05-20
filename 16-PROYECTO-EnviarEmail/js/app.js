// 19/05/2021 Fecha de Inicio


// Variables



const enviar = document.querySelector('#enviar');

const form = document.querySelector('#enviar-mail');

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

        error('Asegurate de llenar todos los campos.'); // Llamando la función de error cuando el campo se encuentre vacío.
    }

    if (cheems.target.type === 'email') {
        const result = cheems.target.value.indexOf('@');
        if (result < 0) {
            error('El Email no es válido.');  // Llamado la función si la condición de tener un @ no se cumple.
        }
    }
}

function error(mensaje) { // Creará un elemento párrafo con el mensaje de error.
    const msgError = document.createElement('p');
    msgError.textContent = mensaje;
    msgError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errors = document.querySelectorAll('.error'); // Limpia los mensajes de error de modo que sólo habrá uno en pantalla.
    if (errors.length === 0) {
        form.appendChild(msgError);
    }
}