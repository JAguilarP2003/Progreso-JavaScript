const loadAPIBtn = document.querySelector('#cargarAPI');
loadAPIBtn.addEventListener('click', getData);

function getData() {
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(answer => answer.json())
        .then(result => showHTML(result));
}

function showHTML(data) {
    const content = document.querySelector('.contenido');

    let html = '';

    data.forEach(profile => {
        const { author, post_url } = profile;

        html += `
            <p>Author: ${author}</p>
            <a href="${post_url}" target="_blank">See image</a>
        `;
    });

    content.innerHTML = html;
}