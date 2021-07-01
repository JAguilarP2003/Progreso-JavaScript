const loadTxtBtn = document.querySelector('#cargarTxt');
loadTxtBtn.addEventListener('click', getData);

function getData() {

    const url = 'data/datos.txt';

    fetch(url)
        .then(answer => {
            console.log(answer);
            console.log(answer.status);
            console.log(answer.statusText);
            console.log(answer.url);
            console.log(answer.type);

            return answer.text();
        })
        .then(data => {
            console.log(data);
        })
}