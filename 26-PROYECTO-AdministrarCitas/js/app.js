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
const containerAppts = document.querySelector('#citas');

class Appts {
    constructor(){
        this.appts = [];
    }

    addAppt(appt) {
        this.appts = [...this.appts, appt];

        console.log(this.appts);
    }

    deleteAppt(id) {
        this.appts = this.appts.filter(appt => appt.id !== id);
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

    printAppts({appts}){

        this.cleanHTML();

        appts.forEach(appt => {
            const {pet, owner, tel, date, hour, symptoms, id} = appt;

            const divAppt = document.createElement('div');
            divAppt.classList.add('cita', 'p-3');
            divAppt.dataset.id = id;

            // Scripting.
            const petParagraph = document.createElement('h2');
            petParagraph.classList.add('card-title', 'font-weight-bolder');
            petParagraph.textContent = pet;

            const ownerParagraph = document.createElement('p');
            ownerParagraph.innerHTML= `
                <span class="font-weight-bolder"> Propietario: </span> ${owner}
            `;

            const telParagraph = document.createElement('p');
            telParagraph.innerHTML= `
                <span class="font-weight-bolder"> Teléfono: </span> ${tel}
            `;

            const dateParagraph = document.createElement('p');
            dateParagraph.innerHTML= `
                <span class="font-weight-bolder"> Fecha: </span> ${date}
            `;

            const hourParagraph = document.createElement('p');
            hourParagraph.innerHTML= `
                <span class="font-weight-bolder"> Hora: </span> ${hour}
            `;

            const symptomsParagraph = document.createElement('p');
            symptomsParagraph.innerHTML= `
                <span class="font-weight-bolder"> Síntomas: </span> ${symptoms}
            `;

            // Botón para eliminar la cita.
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'mr-2');
            deleteBtn.innerHTML = 'Eliminar &times';

            deleteBtn.onclick = () => deleteAppt (id);

            // Agregar los párrafos al divAppt.
            divAppt.appendChild(petParagraph);
            divAppt.appendChild(ownerParagraph);
            divAppt.appendChild(telParagraph);
            divAppt.appendChild(dateParagraph);
            divAppt.appendChild(hourParagraph);
            divAppt.appendChild(symptomsParagraph);
            divAppt.appendChild(deleteBtn);

            // Agregar las citas al HTML.
            containerAppts.appendChild(divAppt);
        });
    };

    cleanHTML() {
        while (containerAppts.firstChild) {
            containerAppts.removeChild(containerAppts.firstChild);
        }
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
    ui.printAppts(manageAppts);
}


function restartObj() {
    apptObj.pet = '';
    apptObj.owner = '';
    apptObj.tel = '';
    apptObj.date = '';
    apptObj.hour = '';
    apptObj.symptoms = '';
}

function deleteAppt(id) {
    // Eliminar la cita.
    manageAppts.deleteAppt(id);

    // Mostrar mensaje.
    ui.printAlert('La cita fue eliminada exitosamente.');

    // Refrescar las citas.
    ui.printAppts(manageAppts);
}