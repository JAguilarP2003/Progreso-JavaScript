// 04/06/2021 Fecha Inicio.
const form = document.querySelector('#agregar-gasto');
const spending = document.querySelector('#gastos ul');

// Variables y Selectores.

// Eventos.
eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', askBudget);

    form.addEventListener('submit', addSpending)
}

// Clases.
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.remaining = Number(budget);
        this.spending = [];
    }

    newSpending(spending){
        this.spending = [...this.spending, spending];
        console.log(this.spending);
    }
}

class UI {
    insertBudget(amount) {
        // Extrayendo los valores.
        const { budget, remaining } = amount;

        // Agregar al HTML
        document.querySelector('#total').textContent = budget;
        document.querySelector('#restante').textContent = remaining;
    }

    printAlert(msg, type){
        // Crear el div

        const message = document.createElement('div');
        message.classList.add('text-center', 'alert');

        if (type === 'error') {
            message.classList.add('alert-danger');
        } else {
            message.classList.add('alert-success');
        }

        // Mensaje de eror.
        message.textContent = msg;

        // Insertar en el HTML.

        document.querySelector('.primario').insertBefore(message, form);

        // Quitar el HTML.
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
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

    ui.insertBudget(budget);
}

// Añade gastos
function addSpending(cheems) {
    cheems.preventDefault();

    // Leer los datos del formulario.

    const name = document.querySelector('#gasto').value;
    const amount = Number(document.querySelector('#cantidad').value);

    // Validar.
    if (name === '' || amount === '') {
        ui.printAlert('Ambos campos son obligatorios.', 'error');

        return;
    } else if (amount <= 0 || isNaN(amount)) {
        ui.printAlert('Cantidad no válida', 'error');
        return;
    }

    // Generar un objeto con el gasto.

    const spending = {
        name,
        amount,
        id: Date.now()
    }

    // Añade un nuevo gasto.
    budget.newSpending( spending );

    // Mensaje de verifado.
    ui.printAlert('Gasto agregado.');

    // Reinicia el formulario.
    form.reset();

}