function createIterator(cart) {
    let i = 0;
    return {
        next: () => {
            const end = ( i >= cart.length );
            const value = !end ? cart [i++] : undefined ;

            return{
                end,
                value
            }
        }
    }
}


const cart = ['Product 1', 'Product 2', 'Product 3'];

// Utilizar el iterador.
const travelCart = createIterator(cart);

console.log(travelCart.next());
console.log(travelCart.next());
console.log(travelCart.next());
console.log(travelCart.next());