// 04/06/2021 Fecha Inicio.
const form = document.querySelector('#agregar-gasto');
const spendingList = document.querySelector('#gastos ul');

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
        this.spendings = [];
    }

    newSpending(spending){
        this.spendings = [...this.spendings, spending];
        this.calculateRemaining();
    }

    calculateRemaining() {
        const spent = this.spendings.reduce( (total, spending) => total + spending.amount, 0);
        this.remaining = this.budget - spent;
    }

    deleteSpending(id) {
        this.spendings = this.spendings.filter(spending => spending.id !== id);
        this.calculateRemaining();
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

    addSpendingList(spendings) {

        this.cleanHTLM(); // Elimina el HTML previo

        // Iterar sobre los gastos

        spendings.forEach( spending => {
            const {amount, name, id} = spending;

            // Crear una lista.
            const newSpending = document.createElement('li');
            newSpending.className = 'list-group-item d-flex justify-content-between align-items-center';
            // newSpending.setAttribute('data-id', id);
            newSpending.dataset.id = id;



            // Agregar el HTML del gasto.
            newSpending.innerHTML = `
                ${name}
                <span class="badge-primary badge-pill">
                    $${amount}
                </span>
            `;

            // Btn para borrar el gasto.
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'borrar-gasto');
            deleteBtn.innerHTML = '&times'
            deleteBtn.onclick = () => {
                deleteSpending(id);
            }
            newSpending.appendChild(deleteBtn);

            // Agregar al HTML.
            spendingList.appendChild(newSpending);
        })
    }

    cleanHTLM() {
        while (spendingList.firstChild) {
            spendingList.removeChild(spendingList.firstChild);
        }
    }

    updateRemaining(remaining) {
        document.querySelector('#restante').textContent = remaining;
    }

    checkBudget(budgetObj) {
        const {budget, remaining} = budgetObj;
        const remainingDiv = document.querySelector('.restante');

        // Comprobar el 25%
        if ((budget / 4) > remaining ) {
            remainingDiv.classList.remove('alert-sucess', 'alert-warning');
            remainingDiv.classList.add('alert-danger');
        } else if ((budget / 2) > remaining) {
            remainingDiv.classList.remove('alert-sucess');
            remainingDiv.classList.add('alert-warning');
        } else {
            remainingDiv.classList.remove('alert-danger', 'alert-warning');
            remainingDiv.classList.add('alert-sucess');
        }

        // Si el total es <= 0
        if (remaining <= 0) {
            ui.printAlert('El presupuesto se ha agotado.', 'error');

            form.querySelector('button[type="submit"]').disabled = true
        }

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

    // Mensaje de verificado.
    ui.printAlert('Gasto agregado.');

    // Imprimir los gastos.
    const { spendings, remaining } = budget;
    ui.addSpendingList(spendings);

    ui.updateRemaining(remaining);

    ui.checkBudget(budget);

    // Reinicia el formulario.
    form.reset();

}


function deleteSpending(id) {
    //Elimina gastos del objeto.
    budget.deleteSpending(id);

    //Elimina los gastos del HTML.
    const {spendings, remaining} = budget;

    ui.addSpendingList(spendings);
    
    ui.updateRemaining(remaining);

    ui.checkBudget(budget);
}

// 10/06/2021 Fecha de Finalización.