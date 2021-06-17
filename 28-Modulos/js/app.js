import alias , { balance, Customer, nameCustomer, saving, showInfo } from './cliente.js';
import { Company } from './empresa.js';

alias();

console.log(nameCustomer);
console.log(saving);

console.log(showInfo(nameCustomer, saving));

balance(saving);

const customer = new Customer(nameCustomer, saving);


console.log(customer.showInfo());

// Importar empresa.

const company = new Company('Código con Juan', 1000, 'Aprendizaje Online');
console.log(company.showInfo());