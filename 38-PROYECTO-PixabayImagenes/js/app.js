// 08/07/2021 - Fecha de Inicio.

const result = document.querySelector('#resultado');

const form = document.querySelector('#formulario');


window.onload = () =>  {

    form.addEventListener('submit', validateForm);
    
}

function validateForm(cheems) {

    cheems.preventDefault();

    const searchTerm = document.querySelector('#termino').value;

    if (searchTerm === '') {
        showAlert('Agrega un término de busqueda.');
        return;
    }
}

function showAlert(msg) {

    const exist = document.querySelector('.bg-red-100');

    if (!exist) {

        const alert = document.createElement('p');
        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mt-6', 'text-center');
    
        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <br>
            <span class="block sm:inline">${msg}</span>
        `;
    
        form.appendChild(alert);
    
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}