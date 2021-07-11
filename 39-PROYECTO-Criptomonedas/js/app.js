// 10/07/2021 - Fecha Inicio.

const cryptosSelect = document.querySelector('#criptomonedas');

// Crear un Promise.
const getCrypto = cryptos => new Promise (resolve => {
    resolve(cryptos);
});

document.addEventListener('DOMContentLoaded', () => {
    checkCrypto();
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