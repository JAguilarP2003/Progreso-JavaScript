const countries = ['France', 'Spain', 'Portugal', 'Australia', 'England'];

function newCounty(country, callback) {
    setTimeout(() => {
        countries.push(country);
        callback();
    }, 2000);
}

function showCountries() {
    setTimeout(() => {
        countries.forEach(country => {
            console.log(country);
        });
    }, 1000);
};

showCountries();

newCounty('Germany', showCountries);