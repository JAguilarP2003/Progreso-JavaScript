// function *createGenerator() {
//     yield 1;
//     yield 'Juan';
//     yield 3+3;
//     yield true;
// }

// const iterator = createGenerator();

// console.log(iterator);
// console.log(iterator.next().value);
// console.log(iterator.next());
// console.log(iterator.next().value);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator);


// Generador para carrito de compras.

function *cartGenerator(cart) {
    for (let i = 0; i < cart.length; i++) {
        yield cart[i];
    }
}

const cart = ['Product 1', 'Product 2', 'Product 3', ];

const iterator = cartGenerator(cart);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());