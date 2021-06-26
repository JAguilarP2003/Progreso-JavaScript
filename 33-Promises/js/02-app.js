const countries = [];

function newCountry(country, callback) {
    countries.push(country);
    console.log(`Adding: ${country}`);
    callback();
}

function showCountries() {
    console.log(countries);
}

function startCallbackHell() {
    setTimeout(() => {
        newCountry('Gremany', showCountries);
        setTimeout(() => {
            newCountry('France', showCountries);
            setTimeout(() => {
                newCountry('England', showCountries);
            }, 3000);
        }, 3000);
    }, 3000);
}

startCallbackHell();