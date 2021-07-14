// 10/07/2021 - Fecha Inicio.

const cryptosSelect = document.querySelector('#criptomonedas');
const currencySelect = document.querySelector('#moneda');
const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');

const searchObj = {
    currency: '',
    crypto: ''
}

// Crear un Promise.
const getCrypto = cryptos => new Promise (resolve => {
    resolve(cryptos);
});

document.addEventListener('DOMContentLoaded', () => {
    checkCrypto();

    form.addEventListener('submit', submitForm);

    cryptosSelect.addEventListener('change', readValue);
    currencySelect.addEventListener('change', readValue);
})

function checkCrypto() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then(answer => answer.json())
        .then(result => getCrypto(result.Data))
        .then(cryptos => selectCryptos(cryptos))
}

function selectCryptos(cryptos) {
    cryptos.forEach(crypto => {
        const { FullName, Name} = crypto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        cryptosSelect.appendChild(option)
    })
}

function readValue(cheems) {
    searchObj[cheems.target.name] = cheems.target.value
}

function submitForm(cheems) {
    cheems.preventDefault();

    // Validar.
    const {currency, crypto} = searchObj;

    if (currency === '' || crypto === '') {
        showAlert('Todos los campos son obligatorios')
        return;
    }

    // Consultar la API con los resultados.
    consultAPI();
}

function showAlert(msg) {

    const errorExist = document.querySelector('.error');

    if (!errorExist) {
        const divMsg = document.createElement('div');
        divMsg.classList.add('error');
    
        // Mensaje de error.
        divMsg.textContent = msg
    
        form.appendChild(divMsg);
    
        setTimeout(() => {
            divMsg.remove();
        }, 3000);
    }
}

function consultAPI () {
    const {currency, crypto} = searchObj;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;

    showSpinner();

    fetch(url)
        .then(answer => answer.json())
        .then(result => {
            showQuote(result.DISPLAY[crypto][currency]);
        })
}

function showQuote(quote) {
    cleanHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = quote;

    const price = document.createElement('p');
    price.classList.add('precio');
    price.innerHTML = `El Precio es de: <span>${PRICE}</span>`;

    const maxPrice = document.createElement('p');
    maxPrice.innerHTML = `El Precio más alto del día es de: <span>${HIGHDAY}</span>`;

    const minPrice = document.createElement('p');
    minPrice.innerHTML = `El Precio más bajo del día es de: <span>${LOWDAY}</span>`;

    const lastHours = document.createElement('p');
    lastHours.innerHTML = `La variación de las últimas 24 horas es del: <span>${CHANGEPCT24HOUR}%</span>`;

    const lastUpdate = document.createElement('p');
    lastUpdate.innerHTML = `Última actualizacón: <span>${LASTUPDATE}</span>`;
    
    result.appendChild(price);
    result.appendChild(maxPrice);
    result.appendChild(minPrice);
    result.appendChild(lastHours);
    result.appendChild(lastUpdate);
}

function cleanHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

function showSpinner() {
    cleanHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('sk-folding-cube');

    spinner.innerHTML = `
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
    `;

    result.appendChild(spinner)
}