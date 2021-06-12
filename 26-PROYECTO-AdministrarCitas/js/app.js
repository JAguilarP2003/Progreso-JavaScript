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
const ctrAppointment = document.querySelector('#citas');

// Registrar eventos.
eventListeners();
function eventListeners() {
    petInput.addEventListener('input', dataAppointment);
    ownerInput.addEventListener('input', dataAppointment);
    telInput.addEventListener('input', dataAppointment);
    dateInput.addEventListener('input', dataAppointment);
    hourInput.addEventListener('input', dataAppointment);
    symptomsInput.addEventListener('input', dataAppointment);
}

// Objeto con la información de la cita.
const appointmentObj = {
    pet: '',
    owner: '',
    tel: '',
    date: '',
    hour: '',
    symptoms: '',
}

// Agrega datos al objeto de la cita.
function dataAppointment(cheems) {
    appointmentObj[cheems.target.name] = cheems.target.value;
    console.log(appointmentObj);
}