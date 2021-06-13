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

let editing;

class Appts {
    constructor(){
        this.appts = [];
    }

    addAppt(appt) {
        this.appts = [...this.appts, appt];
    }

    deleteAppt(id) {
        this.appts = this.appts.filter(appt => appt.id !== id);
    }

    editAppt(updatedAppt){
        this.appts = this.appts.map( appt => appt.id === updatedAppt.id ? updatedAppt : appt );
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
            deleteBtn.innerHTML = `
                Eliminar
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            `;

            deleteBtn.onclick = () => deleteAppt (id);

            // Botón para editar la cita.
            const editBtn = document.createElement('button');
            editBtn.classList.add('btn','btn-info');
            editBtn.innerHTML = `
                Editar 
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                </svg>
            `;
            editBtn.onclick = () => loadEdit(appt);

            // Agregar los párrafos al divAppt.
            divAppt.appendChild(petParagraph);
            divAppt.appendChild(ownerParagraph);
            divAppt.appendChild(telParagraph);
            divAppt.appendChild(dateParagraph);
            divAppt.appendChild(hourParagraph);
            divAppt.appendChild(symptomsParagraph);
            divAppt.appendChild(deleteBtn);
            divAppt.appendChild(editBtn);

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

    if (editing) {
        ui.printAlert('Editado correctamente.');

        // Pasar el objeto de la cita a edición.
        manageAppts.editAppt({...apptObj});

        // Regresar el texto del botón.
        form.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        // Quitar modo edición.
        editing = false;
    } else {
        // Genera un id único.
        apptObj.id = Date.now();

        // Creando una nuvea cita.
        manageAppts.addAppt({...apptObj});

        // Mensaje de agregado correctamente.
        ui.printAlert('Se agregó correctamente.');
    }

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

// Cargar los datos y el morod edición.
function loadEdit(appt) {
    const {pet, owner, tel, date, hour, symptoms, id} = appt;

    // Llenar lo inputs.
    petInput.value = pet;
    ownerInput.value = owner;
    telInput.value = tel;
    dateInput.value = date;
    hourInput.value = hour;
    symptomsInput.value = symptoms;

    // Lenar el objeto.
    apptObj.pet = pet;
    apptObj.owner = owner;
    apptObj.tel = tel;
    apptObj.date = date;
    apptObj.hour = hour;
    apptObj.symptoms = symptoms;
    apptObj.id = id;

    // Cambiar el texto del botón.
    form.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editing = true;
}


// 12/06/2021 Fecha de Finalización.