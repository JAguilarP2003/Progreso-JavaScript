// 07/07/2021 - Fecha de Inicio.

import * as UI from './interfaz.js';

import API from './api.js';

UI.searchForm.addEventListener('submit', searchSong);

function searchSong(cheems) {
    cheems.preventDefault();

    // Obtener el formulario.
    const artist = document.querySelector('#artista').value;
    const song = document.querySelector('#cancion').value;

    if (artist === '' || song === '') {
        // El usuario dejó un campo vacío, mostrar error.
        UI.divMsgs.textContent = 'Todos los campos son obligatorios.';
        UI.divMsgs.classList.add('error');

        setTimeout(() => {
            UI.divMsgs.textContent = '';
            UI.divMsgs.classList.remove('error');
        }, 3000);
        return;
    }

    // Consultar la API.
    const search = new API(artist, song);
    search.consultAPI();
}