// 04/06/2021 Fecha Inicio.
const form = document.querySelector('#agregar-gasto');
const spending = document.querySelector('#gastos ul');

// Variables y Selectores.

// Eventos.
eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', askBudget)
}

// Clases.


// Funciones.

function askBudget() {
    const userBudget = prompt('¿Cuál es tu presupuesto?');

    console.log(Number(userBudget));

    if (userBudget === '' || userBudget === null || isNaN(userBudget) || userBudget <= 0) {
        window.location.reload();
    }
}