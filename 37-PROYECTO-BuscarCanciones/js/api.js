import * as UI from './interfaz.js';

class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    consultAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

        fetch(url)
            .then (answer => answer.json())
            .then (result =>  {

                if (result.lyrics) {
                    const {lyrics} = result;
                    UI.disvResult.textContent = lyrics;
                    UI.heading.textContent = `Letra de la canción: ${this.song} de ${this.artist}`;
                } else {
                    UI.divMsgs.textContent = 'No fue posible hallar la canción.';
                    UI.divMsgs.classList.add('error');
                }

                
            })
    }
}

export default API;