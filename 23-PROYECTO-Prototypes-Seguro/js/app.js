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

// Instanciar UI
const ui = new UI();
console.log(ui);

document.addEventListener('DOMContentLoaded', ()=> {
    ui.fillOptions(); // Llena el select con los años.
})