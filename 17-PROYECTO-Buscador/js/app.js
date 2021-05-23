// 22/05/2021 Fecha de Inicio.

// Varialbes
const resul = document.querySelector('#resultado');
const year = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

console.log(maxYear);
console.log(minYear);

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrar(); // Muestra los automóviles al cargar.

    // Llena las opciones de años.
    llenarYears();
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