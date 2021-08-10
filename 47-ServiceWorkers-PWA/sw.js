const nombreCache = 'apv-v1';
const archivos = [
    '/',
    'index.html',
    'css/bootstrap.css',
    'css/styles.css',
    'js/app.js',
    'js/apv.js'
]

// Cuando se instala el Service Worker.
self.addEventListener('install', cheems => {
    console.log('Instalando el Service Worker');

    cheems.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('Cacheando');
                cache.addAll(archivos)
            })
    )
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