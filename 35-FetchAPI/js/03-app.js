document.addEventListener('DOMContentLoaded', getData);

function getData() {
    fetch('data/empleados.json')
        .then(answer => answer.json())
        .then(result => showHTML(result))
}

function showHTML(employees) {
    const content = document.querySelector('.contenido');

    let html = '';

    employees.forEach(employee => {
        const {id, name, company, occ} = employee;

        html += `
            <p>Employee: ${name}</p>
            <p>ID: ${id}</p>
            <p>Company: ${company}</p>
            <p>Occupation: ${occ}</p>
            <br>
        `;
    });

    content.innerHTML = html;
}