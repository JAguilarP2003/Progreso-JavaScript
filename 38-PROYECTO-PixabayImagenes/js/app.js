// 08/07/2021 - Fecha de Inicio.

const result = document.querySelector('#resultado');

const form = document.querySelector('#formulario');

const paginationDiv = document.querySelector('#paginacion');

const registerPerPage = 50;
let totalPags;
let iterator;
let currentPage = 1;

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

    searchImgs();
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

function searchImgs() {

    const term = document.querySelector('#termino').value;

    const key = '22421346-17d124c6dd18b79b45c27098e';
    const url = `https://pixabay.com/api/?key=${key}&q=${term}&per_page=${registerPerPage}&page=${currentPage}`;

    fetch(url)
        .then(answer => answer.json())
        .then(result => {
            totalPags = calculatePags(result.totalHits);
            showImgs(result.hits);
        })
}

// Generador que va a registrar la cantidad de elementos de acuerdo a las páginas.

function *createPager(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

function calculatePags(total) {
    return parseInt(Math.ceil(total / registerPerPage));
}

function showImgs(imgs) {

    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }

    // Iterar sobre el arreglo de imágenes y construir el HTML.
    imgs.forEach(img => {
        const {previewURL, likes, views, largeImageURL} = img;

        result.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">

                    <div class="p-4">
                        <p class="font-bold"> 
                            ${likes}
                            <span class="font-light">
                                Me gusta
                            </span>
                        </p>

                        <p class="font-bold"> 
                            ${views}
                            <span class="font-light">
                                Visualizaciones
                            </span>
                        </p>

                        <a
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p1"
                            href=${largeImageURL} target="_blank" rel="noopener noreferrer">
                                Ver imágen
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    // Limpiar paginador Previo.
    while (paginationDiv.firstChild) {
        paginationDiv.removeChild(paginationDiv.firstChild);
    }

    // Generar el nuevo HTML.
    printPager();
}

function printPager() {
    iterator = createPager(totalPags);

    while (true) {
        const {value, done} = iterator.next();
        if (done) return;

        // Caso contrario, genera un botón por cada elemento en el generador.

        const btn = document.createElement('a');
        btn.href = '#';
        btn.dataset.page = value;
        btn.textContent = value;
        btn.classList.add('siguiente', 'mx_auto', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-5', 'rounded');

        btn.onclick = () => {
            currentPage = value;

            searchImgs();
        }

        paginationDiv.appendChild(btn);
    }
}

// 09/07/2021 - Fecha de Finalización.