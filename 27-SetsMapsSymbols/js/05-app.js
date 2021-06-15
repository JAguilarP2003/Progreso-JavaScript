const syn = Symbol('1');
const syn2 = Symbol('1');

// if (syn === syn2) {
//     console.log('Son iguales.');
// } else {
//     console.log('No son iguales.');
// }

const pName = Symbol();
const lastName = Symbol();

const person = {}

// Agregar nombre y apellido como llaves del objeto.
person[pName] = 'Juan';
person[lastName] = 'Aguilar';
person.customerType = 'Premium';
person.balance = 500

console.log(person);
// console.log(person[pName]);

// Las propiedades que utilizan un symbol no son iterables.

for (let i in person) {
    console.log(i);
}

// Definir una descripción del Symbol.
const customerName = Symbol('Customer Name');
const customer = {};

customer[customerName] = 'Juan';

console.log(customer);
console.log(customer[customerName]);
console.log(customerName);