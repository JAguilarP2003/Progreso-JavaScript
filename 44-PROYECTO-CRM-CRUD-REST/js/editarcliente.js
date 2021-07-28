import { getCustomer } from './API.js';

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
    });

    function showCustomer(customer) {
        const {name, company, email, tel, id} = customer;

        inputName.value = name;
        inputEmail.value = email;
        inputTel.value = tel;
        inputCompany.value = company;
        inputId = id;
    }
})();

