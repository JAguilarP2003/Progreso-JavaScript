(function () {
    let DB;

    const inputName = document.querySelector('#nombre');

    document.addEventListener('DOMContentLoaded', () => {
        conectDB();

        // Verificar el id de la URL.
        const paramURL = new URLSearchParams(window.location.search);
        const customerId = paramURL.get('id');
        if (customerId) {
            setTimeout(() => {
                getCustomer(customerId);
            }, 50);
        }
    });

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
        const { name } = dataCustomer;

        inputName.value = name;
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