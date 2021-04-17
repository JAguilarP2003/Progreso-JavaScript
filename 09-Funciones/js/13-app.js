
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('Canción pausada.'),
    borrar: id => console.log(`Canción ${id} borrada.`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Agnus Dei, Op. 11';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(10);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist('Jazz');
reproductor.crearPlaylist('Funk');
reproductor.crearPlaylist('Gregorian');
reproductor.reproducirPlaylist('Gregorian');