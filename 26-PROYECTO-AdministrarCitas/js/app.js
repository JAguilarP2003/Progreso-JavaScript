// 12/06/2021 Fecha de Inicio.


// Campos del formulario.
const petInput = document.querySelector('#mascota');
const ownerInput = document.querySelector('#propietario');
const telInput = document.querySelector('#telefono');
const dateInput = document.querySelector('#fecha');
const hourInput = document.querySelector('#hora');
const symptomsInput = document.querySelector('#sintomas');

// UI.
const form = document.querySelector('#nueva-cita');
const ctrAppt = document.querySelector('#citas');

class Appts {
    constructor(){
        this.appts = [];
    }

    addAppt(appt) {
        this.appts = [...this.appts, appt];

        console.log(this.appts);
    }
}

class UI {
    printAlert(msg, type) {
        // Crear el div.
        const divMsg = document.createElement('div');
        divMsg.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Agregar clase en base al tipo de error.
        if (type === 'error') {
            divMsg.classList.add('alert-danger');
        } else {
            divMsg.classList.add('alert-success');
        }

        // Mensaje de error.
        divMsg.textContent = msg;

        // Agregar al DOM.
        document.querySelector('#contenido').insertBefore(divMsg, document.querySelector('.agregar-cita'));

        // Quitar alerta.
        setTimeout(() => {
            divMsg.remove();
        }, 5000);
    }
}

const ui = new UI();

const manageAppts = new Appts();

// Registrar eventos.
eventListeners();
function eventListeners() {
    petInput.addEventListener('input', dataAppt);
    ownerInput.addEventListener('input', dataAppt);
    telInput.addEventListener('input', dataAppt);
    dateInput.addEventListener('input', dataAppt);
    hourInput.addEventListener('input', dataAppt);
    symptomsInput.addEventListener('input', dataAppt);

    form.addEventListener('submit', newAppt)
}

// Objeto con la información de la cita.
const apptObj = {
    pet: '',
    owner: '',
    tel: '',
    date: '',
    hour: '',
    symptoms: '',
}

// Agrega datos al objeto de la cita.
function dataAppt(cheems) {
    apptObj[cheems.target.name] = cheems.target.value;
}

// Valida y agrega una nueva cita a la clase de citas.
function newAppt(cheems) {
    cheems.preventDefault();

    // Extraer la información del objeto de cita.
    const {pet, owner, tel, date, hour, symptoms} = apptObj;

    // Validar.
    if (pet == '' || owner == '' || tel == '' || date == '' || hour == '' || symptoms == '') {
        ui.printAlert('Todos los campos son obligatorios.', 'error');
        return;
    }

    // Genera un id único.
    apptObj.id = Date.now();

    // Creando una nuvea cita.
    manageAppts.addAppt({...apptObj});

    // Reiniciar el objeto para la validación.
    restartObj();

    // Reiniciar el formulario.
    form.reset();

    // Mostrar el HTML.
}


function restartObj() {
    apptObj.pet = '';
    apptObj.owner = '';
    apptObj.tel = '';
    apptObj.date = '';
    apptObj.hour = '';
    apptObj.symptoms = '';
}