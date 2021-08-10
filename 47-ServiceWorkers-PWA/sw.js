// Cuando se instala el Service Worker.

self.addEventListener('install', cheems => {
    console.log('Instalando el Service Worker');

    console.log(cheems);
})

// Activar el Service Worker.
self.addEventListener('activate', cheems => {
    console.log('Service Worker Activado');

    console.log(cheems);
});

// Evento Fetch para descargar Archivos estáticos.
self.addEventListener('fetch', cheems => {
    console.log('Fetch...', cheems);
})