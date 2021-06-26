// 22/06/2021 Fecha de Inicio.

(function () {

    let DB;

    const customerList = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded',() => {
        createDB();

        if (window.indexedDB.open('crm', 1)) {
            getCustomers();
        }

        customerList.addEventListener('click', deleteRecord);
    });

    function deleteRecord(cheems) {
        if (cheems.target.classList.contains('eliminar')) {
            const idDelete = Number(cheems.target.dataset.cliente);

            const confirmDeletion = confirm('Deseas eliminar este cliente?');

            if(confirmDeletion) {
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');

                objectStore.delete(idDelete);

                transaction.oncomplete = function () {
                    console.log('Eliminado...');

                    cheems.target.parentElement.parentElement.remove();
                };

                transaction.onerror = function () {
                    console.log('Hubo un error.');
                }
            };
        }
    }

    // Crea la base de datod de IndexDB.
    function createDB() {
        const createDB = window.indexedDB.open('crm', 1);


        createDB.onerror = function () {
            console.log('Hubo un error.');
        };

        createDB.onsuccess = function () {
            DB = createDB.result;
        };

        createDB.onupgradeneeded = function (cheems) {
            const db = cheems.target.result;

            const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement: true});

            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('tel', 'tel', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});

            console.log('DB lista y creada.');
        }
    }

    function getCustomers() {
        const openConnection = window.indexedDB.open('crm', 1);

        openConnection.onerror = function () {
            console.log('Hubo un error');
        }

        openConnection.onsuccess = function () {
            DB = openConnection.result;

            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function (cheems) {
                const cursor = cheems.target.result;

                if (cursor) {
                    const { name, company, email, tel, id } = cursor.value;

                    customerList.innerHTML += ` 
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${tel}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${company}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>
                    `;
                    cursor.continue();
                } else {
                    console.log('No hay más registros.');
                }
            }
        }
    }

})();

// 25/06/2021 Fecha de Finalización.