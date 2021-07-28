import { getCustomer, updateCustomer } from './API.js';
import { showAlert, validate } from './funciones.js'

(function () {

    //Campos del formulario.

    const inputName = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputCompany = document.querySelector('#empresa');
    const inputTel = document.querySelector('#telefono');
    const inputId = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const URLparams = new URLSearchParams(window.location.search);
        const IDCustomer = parseInt(URLparams.get('id'));

        const customer = await getCustomer(IDCustomer);

        showCustomer(customer);

        // Submit al formulario.
        const form = document.querySelector('#formulario');
        form.addEventListener('submit', validateCustomer);
    });

    function showCustomer(customer) {
        const {name, company, email, tel, id} = customer;

        inputName.value = name;
        inputEmail.value = email;
        inputTel.value = tel;
        inputCompany.value = company;
        inputId.value = id;
    }

    function validateCustomer(cheems) {
        cheems.preventDefault();
        const customer = {
            name: inputName.value,
            email: inputEmail.value,
            tel: inputTel.value,
            company: inputCompany.value,
            id: parseInt(inputId.value)
        }

        if (validate(customer)) {
            // Mostar mensaje.
            showAlert('Todos los campos son obligatorios.');
            return;
        }

        // Reescribe el objeto.
        updateCustomer(customer);
    }
})();

