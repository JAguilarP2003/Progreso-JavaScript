import { showAlert, validate } from './funciones.js'
import { newCustomer } from './API.js'

(function () {
    const form = document.querySelector('#formulario');
    form.addEventListener('submit', validateCustomer);

    function validateCustomer(cheems) {
        cheems.preventDefault();

        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const tel = document.querySelector('#telefono').value;
        const company = document.querySelector('#empresa').value;

        const customer = {
            name,
            email,
            tel,
            company
        }


        if (validate(customer)) {
            // Mostar mensaje.
            showAlert('Todos los campos son obligatorios.');
            return;
        }

        newCustomer(customer);
    }
})();