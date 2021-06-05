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
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.remaining = Number(budget);
        this.spending = [];
    }
}

class UI {
    
}


// Instanciar
const ui = new UI();
let budget;

// Funciones.

function askBudget() {
    const userBudget = prompt('¿Cuál es tu presupuesto?');

    // console.log(Number(userBudget));

    if (userBudget === '' || userBudget === null || isNaN(userBudget) || userBudget <= 0) {
        window.location.reload();
    }

    // Presupuesto válido.
    budget = new Budget(userBudget);
    console.log(budget);
}