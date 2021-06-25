(function () {
    let DB;
    const form = document.querySelector('#formulario');


    document.addEventListener('DOMContentLoaded', () => {

        conectDB();

        form.addEventListener('submit', validateCustomer);
    });

    function conectDB() {
        const openConection = window.indexedDB.open('crm', 1);

        openConection.onerror = function () {
            console.log('Hubo un error');
        };

        openConection.onsuccess = function () {
            DB = openConection.result;
        }
    }

    function validateCustomer(cheems) {
        cheems.preventDefault();

        // Leer todos los inputs.
        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const tel = document.querySelector('#telefono').value;
        const company = document.querySelector('#empresa').value;

        if (name === '' || email === '' || tel === '' || company === '') {
            printAlert('Todos los campos son obligatorios', 'error');

            return;
        }

        // Crear un objeto con la información.
        const customer = {
            name,
            email,
            tel,
            company,
        }

        customer.id = Date.now();
        createNewCustomer(customer);

    }

    function createNewCustomer(customer) {
        const transaction = DB.transaction('crm', 'readwrite');

        const objectStore = transaction.objectStore('crm');

        objectStore.add(customer);
        
        transaction.onerror = function () {
            printAlert('Hubo un error', 'error')
        };

        transaction.oncomplete = function () {
            console.log('Cliente agregado.');

            printAlert('El cliente se agregó correctamente.');

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000);
        }
    }

    function printAlert(msg, type) {
        
        const alert = document.querySelector('.alerta');

        if (!alert) { 
            // Crear la alerta.
            const divMsg = document.createElement('div');
            divMsg.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mt-6', 'text-center', 'border', 'alerta');

            if (type === 'error') {
                divMsg.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            } else {
                divMsg.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }

            divMsg.textContent = msg;

            form.appendChild(divMsg);

            setTimeout(() => {
                divMsg.remove();
            }, 3000);
        }
    }

})();