// 22/06/2021 Fecha de Inicio.

(function () {

    let DB;

    document.addEventListener('DOMContentLoaded',() => {
        createDB();
    });

    // Crea la base de datod de IndexDB.
    function createDB() {
        const createDB = window.indexedDB.open('crm', 1);


        createDB.onerror = function () {
            console.log('Hubo un error.');
        };

        createDB.onsuccess = function () {
            DB= createDB.result;
        };

        createDB.onupgradeneeded = function (cheems) {
            const db = cheems.target.result;

            const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement: true});

            objectStore.createIndex('nombre', ' nombre', {unique: false});
            objectStore.createIndex('email', ' email', {unique: true});
            objectStore.createIndex('tel', ' tel', {unique: false});
            objectStore.createIndex('empresa', ' empresa', {unique: false});
            objectStore.createIndex('id', ' id', {unique: true});
        }
        console.log('DB lista y creada.');
    }
})();