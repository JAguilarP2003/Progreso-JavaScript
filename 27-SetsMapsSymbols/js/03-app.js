const customer = new Map();

customer.set('name', 'Juan');
customer.set('type', 'Premium');
customer.set('balance', 8000);


console.log(customer);

console.log(customer.size);

console.log(customer.has('name2'));

console.log(customer.get('name'));


customer.delete('balance');

console.log(customer.has('balance'));

console.log(customer.get('balance'));

customer.clear();

console.log(customer);

// Otra sintaxis.

const patient = new Map([['name', 'patient'], ['room', 'undefined']]);

patient.set('dr', 'Assigned Dr');
patient.set('name', 'Juan');

console.log(patient);

patient.forEach((data, i) => {
    console.log(data);
    console.log(i);
});