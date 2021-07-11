// 10/07/2021 - Fecha Inicio.

const cryptosSelect = document.querySelector('#criptomonedas');
const currencySelect = document.querySelector('#moneda');
const form = document.querySelector('#formulario');

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
    console.log(searchObj);
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