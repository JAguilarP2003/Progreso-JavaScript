const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(cheems) {
    cheems.preventDefault();

    console.log('Buscando...');

    console.log(cheems.target.action);
}

