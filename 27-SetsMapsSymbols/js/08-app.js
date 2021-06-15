const cities = ['London', 'New York', 'Madrid', 'Paris'];
const orders = new Set ([123, 231, 131, 102]);
const data = new Map();

data.set('name', 'Juan');
data.set('career', 'Developer');

// Default.

for(let city of cities) {
    console.log(city);
}

for(let order of orders) {
    console.log(order);
}

for(let dataS of data) {
    console.log(dataS);
}

// // Keys Iterator. Retorna únicamente la llave.
// for(let keys of cities.keys()) {
//     console.log(keys);
// }

// for(let keys of orders.keys()) {
//     console.log(keys);
// }

// for(let keys of data.keys()) {
//     console.log(keys);
// }

// // Values Iterator.  Retorna únicamente el valor.
// for(let value of cities.values()) {
//     console.log(value);
// }

// for(let value of orders.values()) {
//     console.log(value);
// }

// for(let value of data.values()) {
//     console.log(value);
// }

// // Entries Iterator.  Retorna llave y valor.
// for( let entry of cities.entries()) {
//     console.log(entry);
// }

// for ( let entry of orders.entries()) {
//     console.log(entry);
// }

// for ( let entry of data.entries()) {
//     console.log(entry);
// }