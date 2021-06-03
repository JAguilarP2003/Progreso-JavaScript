// 01/6/2021 Fecha de inicio.

// Constructores.
function insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// Realiza la cotización con los datos.
insurance.prototype.quoteInsurance = function () {
    /*
        1 = Americano 1.15
        2 = Asiático 1.05
        3 = Europeo 1.35
    */

    let amount;

    const base = 2000;

    switch (this.brand) {
        case '1':
            amount = base * 1.15;
            break;
        case '2':
            amount = base * 1.05;
            break;
        case '3':
            amount = base * 1.35;
            break;
        default:
            break;
    }

    // Leer el año
    const diff = new Date().getFullYear() - this.year;

    // Cada año que la diferencia es mayor, el coso se reduce un 10%.

    amount -= ((diff * 3) * amount) / 100;

    /*
        Si el seguro es básico, se multiplica por un 30% +.
        Si el seguro es completo, se multiplica por un 50% +.
    */

    if (this.type === 'basico') {
        amount *= 1.30;
    } else {
        amount *= 1.50;
    }

    return amount;
}

function UI() {
    
}

UI.prototype.fillOptions = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');


    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Muestra alertas en pantalla.
UI.prototype.showMsg = (msg, type) => {
    const div = document.createElement('div');

    if (type === 'error') {
        div.classList.add('mensaje', 'error')
    } else {
        div.classList.add ('mensaje', 'correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = msg;

    // Insertar en el HTML.
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', ()=> {
    ui.fillOptions(); // Llena el select con los años.
})

eventListeners()
function eventListeners() {
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', quoteInsurance)
}

function quoteInsurance(cheems) {
    cheems.preventDefault();

    // Leer la marca seleccionada.
    const brand = document.querySelector('#marca').value;

    // Leer el año seleccionado.
    const year = document.querySelector('#year').value;

    // Leer el tipo de cobertura.
    const type = document.querySelector('input[name="tipo"]:checked').value;
    
    if (brand === '' || year === '' || type === '') {
        ui.showMsg('Todos los campos son obligatorios.', 'error');
        return;
    }
    ui.showMsg('Cotizando...', 'exito');

    // Instanciar el Seguro.
    const Insurance = new insurance(brand, year, type);
    Insurance.quoteInsurance();

    // Utilizar el protoype que va a cotizar.
}