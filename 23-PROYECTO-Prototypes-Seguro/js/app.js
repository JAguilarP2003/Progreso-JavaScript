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

UI.prototype.showResult = (total, Insurance) => {
    
    const { brand, year, type } = Insurance;

    let brandName;

    switch (brand) {
        case '1': 
            brandName = 'Americano';
            break;
        
        case '2': 
            brandName = 'Asiático';
            break;

        case '3': 
            brandName = 'Europeo';
            break;

        default:
            break;
    }

    // Crear el resultado.
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header"> Tu Cotización </p>
        <p class="font-bold"> Marca: <span class="font-normal"> ${brandName} </span></p>
        <p class="font-bold"> Año: <span class="font-normal"> ${year} </span></p>
        <p class="font-bold"> Tipo: <span class="font-normal capitalize"> ${type} </span></p>
        <p class="font-bold"> Total: <span class="font-normal"> $${total} </span></p>
    `;

    const resultDiv = document.querySelector('#resultado');
    
    // Mostrar el spinner.
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; // Se borra el spinner 
        resultDiv.appendChild(div); // Se muestra el resultado.

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

    // Ocultar cotizaciones previas.
    const results = document.querySelector('#resultado div');

    if (results != null) {
        results.remove();
    }

    // Instanciar el Seguro.
    const Insurance = new insurance(brand, year, type);
    const total = Insurance.quoteInsurance();

    // Utilizar el protoype que va a cotizar.
    ui.showResult(total, Insurance)

}

// 03/06/2021 Fecha de Finalización.