const loadJSONBtn = document.querySelector('#cargarJSON');
loadJSONBtn.addEventListener('click', getData);

function getData() {
    fetch('data/empleado.json')
        .then(answer => answer.json())
        .then(result => showHTML(result))
}

function showHTML({company, id, name, occ}) {
    const content = document.querySelector('.contenido');

    content.innerHTML = `
        <p>Employee: ${name}</p>
        <p>ID: ${id}</p>
        <p>Company: ${company}</p>
        <p>Occupation: ${occ}</p>
    `;
}