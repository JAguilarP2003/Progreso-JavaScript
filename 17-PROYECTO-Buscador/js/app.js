// 22/05/2021 Fecha de Inicio.

// Varialbes
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const pMin = document.querySelector('#minimo');
const pMax = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados.
const resul = document.querySelector('#resultado');

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// Generar un objeto con la búsqueda.
const dataSearch = {
    marca: '',
    year: '',
    pMin: '',
    pMax: '',
    puertas: '',
    transmision: '',
    color: '',
}

console.log(maxYear);
console.log(minYear);

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrar(); // Muestra los automóviles al cargar.

    // Llena las opciones de años.
    llenarYears();
});


// Event Listener para los Select de búsqueda.
marca.addEventListener('change', (cheems) =>{
    dataSearch.marca = cheems.target.value;

    filtrarAuto();
});

year.addEventListener('change', (cheems) =>{
    dataSearch.year = parseInt(cheems.target.value); // Cmabia el resultado del formulario a número.

    filtrarAuto();
});

pMin.addEventListener('change', (cheems) =>{
    dataSearch.pMin = cheems.target.value;
});

pMax.addEventListener('change', (cheems) =>{
    dataSearch.pMax = cheems.target.value;
});

puertas.addEventListener('change', (cheems) =>{
    dataSearch.puertas = cheems.target.value;
});

transmision.addEventListener('change', (cheems) =>{
    dataSearch.transmision = cheems.target.value;
});

color.addEventListener('change', (cheems) =>{
    dataSearch.color = cheems.target.value;
});


// Funciones
function mostrar() {
    autos.forEach (auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const HTML = document.createElement('p');

        HTML.textContent = `
            ${marca} 
            ${modelo} -
            ${year} -
            ${puertas} Puertas -
            Color: ${color} -
            Transmisión: ${transmision} -
            Precio: ${precio}
        `;
        // Insertar en el HTML
        resul.appendChild(HTML);
    });
};

// Genera los años del Select.
function llenarYears() {
    for (let i = maxYear; i >= minYear; i--) {
       const opcion = document.createElement('option');
       opcion.value = i;
       opcion.textContent = i;
       year.appendChild(opcion); // Agrega las opciones de Año al select.
    };
};

// Función que filtra en base a la búsqueda.

function filtrarAuto() {
    const result = autos.filter(filtrarMarca).filter(filtrarYear);

    console.log(result);
};

function filtrarMarca(auto) {
    if (dataSearch.marca) {
        return auto.marca === dataSearch.marca
    }
    return auto;
}

function filtrarYear(auto) {
    if (dataSearch.year) {
        return auto.year === dataSearch.year;
    }
    return auto;
};