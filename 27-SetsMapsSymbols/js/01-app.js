const cart = new Set();

cart.add('Drum Sticks');
cart.add('Jazz Bass');
cart.add('Guitar Picks');
cart.add('Microphone');

cart.delete('Drums'); // Eliminar elementos.

// console.log(cart.has('Drum Sticks')); // Comprobar si posee.

console.log(cart.size); // Cantidad de elementos.

// cart.clear(); // Vaciar los elementos.

cart.forEach( (product, index, belong) => {
    // console.log(product);
    // console.log(index);
    console.log(belong);
});

// console.log(cart);

// Del siguiente arreglo, eliminar los duplicados.
const numbers = [10,20,30,40,50,10,20];

const noDupli = new Set(numbers);

console.log(noDupli);