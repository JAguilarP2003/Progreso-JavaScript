// 01/6/2021 Fecha de inicio.

// Constructores.
function insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
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
    

    // Utilizar el protoype que va a cotizar.
}