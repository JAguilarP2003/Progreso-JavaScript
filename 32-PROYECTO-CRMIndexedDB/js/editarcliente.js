(function () {
    let DB;
    let customerId;

    const inputName = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputTel = document.querySelector('#telefono');
    const inputCompany = document.querySelector('#empresa');

    const form = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectDB();

        // Actualiza el registro.
        form.addEventListener('submit', updateCustomer);

        // Verificar el id de la URL.
        const paramURL = new URLSearchParams(window.location.search);
        customerId = paramURL.get('id');
        if (customerId) {
            setTimeout(() => {
                getCustomer(customerId);
            }, 15);
        }
    });

    function updateCustomer(cheems) {
        cheems.preventDefault();

        if (inputName.value === '' || inputEmail.value === '' || inputTel.value === '' || inputCompany.value === '') {
            printAlert('Todos los campos son obligarotios.', 'error');

            return;
        }

        //Actualizar cliente.
        const updatedCustomer = {
            name: inputName.value,
            email: inputEmail.value,
            tel: inputEmail.value,
            company: inputCompany.value,
            id: Number(customerId)
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(updatedCustomer);
       
        transaction.oncomplete = function () {
            printAlert('Editado correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }

        transaction.onerror = function () {
            printAlert('Hubo un error', 'error');
        }

    }

    function getCustomer(id) {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');

        const customer = objectStore.openCursor();
        customer.onsuccess = function (cheems) {
            const cursor = cheems.target.result;

            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    fillForm(cursor.value);
                }

                cursor.continue();
            }
        }
    }

    function fillForm(dataCustomer) {
        const { name, email, tel, company } = dataCustomer;

        inputName.value = name;
        inputEmail.value = email;
        inputTel.value = tel;
        inputCompany.value = company;
    }

    function conectDB() {
        const openConection = window.indexedDB.open('crm', 1);

        openConection.onerror = function () {
            console.log('Hubo un error');
        };

        openConection.onsuccess = function () {
            DB = openConection.result;
        }
    }
})();