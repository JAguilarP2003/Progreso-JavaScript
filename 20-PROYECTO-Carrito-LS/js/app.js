// 13/05/2021 Fecha de Inicio

// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let artsCarrito = [];

registrarEventListeners();

function registrarEventListeners() {
    // Cuando agregas un cusro presionando "Agregar Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito.
    carrito.addEventListener('click', eliminarCurso);

    // Vacía el carrito.
    vaciarCarritoBtn.addEventListener('click', () => {
        artsCarrito = [];
        limpiar();
    });
};


// Funciones
function agregarCurso(cheems) {
    cheems.preventDefault(); // Esta sintaxis evita que la página vuelva hacia arriba.

    if (cheems.target.classList.contains('agregar-carrito')) {


        const cursoSeleccionado = cheems.target.parentElement.parentElement;


        datosCurso(cheems.target.parentElement.parentElement);
    }  
};


//Elimina un curso del carrito.

function eliminarCurso(cheems) {
    if (cheems.target.classList.contains('borrar-curso')) {
        const cursoId = cheems.target.getAttribute('data-id');

        // Elimina del arreglo de artsCarrito por el data-id
        artsCarrito = artsCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML.
    }
};


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

    // Revisa si un elemento ya se encuentra dentro del carrito.
    const existe = artsCarrito.some (curso => curso.id === info.id);

    if (existe) {
        // Actualizamos la cantidad.
        const cursos = artsCarrito.map(curso => {
            if (curso.id === info.id) {
                curso.cantidad++;
                return curso; // Restorna el objeto actualizado.
            } else {
                return curso; // Retorna los objetos que no son duplicados.
            }
        } );
        artsCarrito = [...cursos];
    } else {
        // Agrega elementos al Array de carrito.
        artsCarrito = [...artsCarrito, info];
    }

    
    console.log(artsCarrito);

    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML (Se limpia el HTML para luego generao y así se evita que aparezcan cursos repetidos.)
    limpiar();

    // Recorre el carrito y genera el HTML
    artsCarrito.forEach( curso =>{
        const { imagen, titulo, precio, cantidad, id } = curso;
        console.log(curso);
        const row = document.createElement('tr'); // El elemnto "tr"significa Table row
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
        
            <td> ${curso.titulo} </td>

            <td> ${curso.precio} </td>

            <td> ${curso.cantidad} </td>

            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
};


// Elimina los cursos del tbody
function limpiar() {
    //Existen varias forma de realizar esta función.

    /*
    ╔══ Forma lenta ═════════════════════════╗
    ╠════════════════════════════════════════╣
    ║    contenedorCarrito.innerHTML = '';   ║
    ╠════════════════════════════════════════╣
    ║   Se reemplaza el contenido HTML por   ║
    ║   un string vacío.                     ║
    ╚════════════════════════════════════════╝
    */

    // Forma más efectiva (Mientras exista un hijo, se va a eliminar hasta que ya no quede ninguno.)
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}


// 18/05/2021 Fecha de Finalización