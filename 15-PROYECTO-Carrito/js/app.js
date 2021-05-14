// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

registrarEventListeners();

function registrarEventListeners() {
    // Cuando agregas un cusro presionando "Agregar Carrito"
    listaCursos.addEventListener('click', agregarCurso);
};


// Funciones
function agregarCurso(cheems) {
    cheems.preventDefault(); // Esta sintaxis evita que la página vuelva hacia arriba.
    if (cheems.target.classList.contains('agregar-carrito')) {
        console.log(cheems.target);   
    }  
};
