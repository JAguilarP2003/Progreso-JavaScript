document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});

function crmDB() {
    // Crear base de datos versión 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error.
    crmDB.onerror = function () {
        console.log('Hubo un eror a la hora de crear la DB.');
    }

    // Si se creó bien.
    crmDB.onsuccess = function () {
        console.log('Base de datos creada!');
    }

    // Configuración de la base de datos.
    crmDB.onupgradeneeded = function (e) {
       const db = e.target.result;

       const objectStore = db.createObjectStore('crm', {
           keyPath: 'crm',
           autoIncrement: true
       });

       // Definir las columnas.
       objectStore.createIndex('nombre', 'nombre', {unique:false});
       objectStore.createIndex('email', 'email', {unique:true});
       objectStore.createIndex('tel', 'tel', {unique:true});

       console.log('Columnas creadas');
    }

}