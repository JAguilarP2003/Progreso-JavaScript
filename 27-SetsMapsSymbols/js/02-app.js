// WeakSet

const weakSet = new WeakSet(); // Los weakset sólo aceptan objetos.

const customer = {
    name: 'Juan',
    balance: 200
}

// const name = 'Juan'

weakSet.add(customer);
// weakSet.add(name); // Error.

// console.log(weakSet.has(customer));

// weakSet.delete(customer);

console.log(customer.size); // .size no existe en  los WeakSet.

// Los WeakSet no son iterables.

console.log(weakSet);