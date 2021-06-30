const openBtn = document.querySelector('#abrir-pantalla-completa');
const exitBtn = document.querySelector('#salir-pantalla-completa');

openBtn.addEventListener('click', fullScreen);
exitBtn.addEventListener('click', exitFullScreen);

function fullScreen() {
    document.documentElement.requestFullscreen();
}

function exitFullScreen() {
    document.exitFullscreen();
}