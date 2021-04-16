
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function () {
        console.log('Canción pausada.');
    },
    borrar: function (id) {
        console.log(`Canción ${id} borrada.`);
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(10);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist('Jazz');
reproductor.crearPlaylist('Funk');
reproductor.crearPlaylist('Gregorian');
reproductor.reproducirPlaylist('Gregorian');