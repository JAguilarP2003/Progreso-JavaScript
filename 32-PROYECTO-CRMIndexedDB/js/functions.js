function printAlert(msg, type) {

    const form = document.querySelector('#formulario');

    const alert = document.querySelector('.alerta');

    if (!alert) { 
        // Crear la alerta.
        const divMsg = document.createElement('div');
        divMsg.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mt-6', 'text-center', 'border', 'alerta');

        if (type === 'error') {
            divMsg.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divMsg.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        divMsg.textContent = msg;

        form.appendChild(divMsg);

        setTimeout(() => {
            divMsg.remove();
        }, 3000);
    }
}