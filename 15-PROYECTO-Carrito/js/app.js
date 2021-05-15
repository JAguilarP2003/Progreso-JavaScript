// 13/05/2021

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


        const cursoSeleccionado = cheems.target.parentElement.parentElement;


        datosCurso(cheems.target.parentElement.parentElement);
    }  
};


// 14/05/2021

// Realizará un Traversing para obtener la iformación del curso.

function datosCurso(curso) {
    // console.log(curso);


    // Crear un Objeto con el contenido del curso seleccionado.
    const info = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(info);
}