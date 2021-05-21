// 19/05/2021 Fecha de Inicio


// Variables

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const enviar = document.querySelector('#enviar');
const resetear = document.querySelector('#resetBtn');
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

    // Reinicia el formulario.
    resetear.addEventListener('click', resetF);

    // Enviar Email.
    form.addEventListener('submit', enviarEmail)
}


// Funciones

function iniciar() {
    enviar.disabled = true;
    enviar.classList.add('cursor-not-allowed', 'opacity-50'); // Añade clases del Framework CSS Tailwind
}


// Valida el formulario (Dependiedo de los datos en el input, así mismo serán sus clases.)
function validarForm(cheems) {
    if (cheems.target.value.length > 0) {

        // Elimina los mensajes de error.
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }

        cheems.target.classList.remove('border', 'border-red-500'); // Elimina la clase que ya no se utiliza, en este caso, el borde rojo.
        cheems.target.classList.add('border', 'border-green-500');
    } else {
        cheems.target.classList.remove('border', 'border-green-500'); // Elimina la clase que ya no se utiliza, en este caso, el borde verde.
        cheems.target.classList.add('border', 'border-red-500');
        error('Asegurate de llenar todos los campos.'); // Llamando la función de error cuando el campo se encuentre vacío.
    }

    if (cheems.target.type === 'email') {
        if ( er.test( cheems.target.value ) ) {
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
        
            cheems.target.classList.remove('border', 'border-red-500');
            cheems.target.classList.add('border', 'border-green-500');
        } else {
            cheems.target.classList.remove('border', 'border-green-500');
            cheems.target.classList.add('border', 'border-red-500');
            error('Email no válido.')
        }
        
        /* 
        ╔══ Forma poco efectiva ════════════════════════════╗
        ╠═══════════════════════════════════════════════════╣    
        ║   const result = cheems.target.value.indexOf('@');║
        ║   if (result < 0) {                               ║
        ║       error('El Email no es válido.');            ║
        ║   }                                               ║
        ╠═══════════════════════════════════════════════════╣
        ║  Llamando la función si la condición de tener un  ║
        ║  @ no se cumple.                                  ║
        ╚═══════════════════════════════════════════════════╝
        */
    }


    if ( er.test( email.value ) && asunto.value !== '' && msg.vaule !== '') {
        enviar.disabled = false;
        enviar.classList.remove('cursor-not-allowed', 'opacity-50');
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

// Envía el Email.
function enviarEmail(chems) {
    chems.preventDefault();
    

    // Mostrar el Spinner.
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // Después de 3s, ocultar el spinner y mostrar el mensaje.
    setTimeout(()=> {
        spinner.style.display = 'none';

        // Mensaje de envío
        const msgEnvio = document.createElement('p');
        msgEnvio.textContent = 'Correo enviado satisfactoriamente';
        msgEnvio.classList.add('text-center', 'my-10', 'p-3', 'text-white', 'uppercase', 'bg-green-600', 'font-bold');

        // Insertar el mensaje de envío antes del Spinner.
        form.insertBefore(msgEnvio, spinner);

        setTimeout(() => {
            msgEnvio.remove(); // Eliminar el mensaje de envío después de 5 segundos.
            resetF();
        }, 5000);
    }, 3000);
};

// Resetear el formulario.

function resetF(cheems) {
    cheems.preventDefault();
    form.reset();
    iniciar(); // Vuelve a deshabilitarse el botón de envío.
};

// 20/05/2021 Fecha de Finalización.