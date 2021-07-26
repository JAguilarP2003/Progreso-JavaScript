import { getCustomers } from './API.js';
import { deleteCustomer } from './API.js';

(function () {
    const list = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', showCustomers);

    list.addEventListener('click', confirmDelete);

    async function showCustomers() {
        const customers = await getCustomers();

        customers.forEach(customer => {
            const {name, email, tel, company, id} = customer;

            const row = document.createElement('tr');

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${tel}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${company}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            list.appendChild(row);
        });
    }

    function confirmDelete(cheems) {
        if (cheems.target.classList.contains('eliminar')) {
            const customerID = parseInt(cheems.target.dataset.cliente);
            const confirmAlert = confirm('Deseas eliminar ese registro?');

            if (confirmAlert) {
                deleteCustomer(customerID);
            }
        }
    }
})();