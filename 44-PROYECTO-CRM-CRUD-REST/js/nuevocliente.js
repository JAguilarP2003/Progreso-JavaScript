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
            console.log('Todos los campos son obligatorios.');
            return;
        }

        console.log('Sí pasó la validación.');
    }

    function validate(obj) {
        return !Object.values(obj).every (input => input !== '')
    }



})();