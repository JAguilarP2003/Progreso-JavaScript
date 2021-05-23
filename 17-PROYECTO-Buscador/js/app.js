// 22/05/2021 Fecha de Inicio.

// Varialbes
const resul = document.querySelector('#resultado');

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrar();
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
        resul.appendChild(autoHTML);
    });
};