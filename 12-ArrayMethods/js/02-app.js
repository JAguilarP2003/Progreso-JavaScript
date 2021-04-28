const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 700 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// meses.forEach( (mes,i) => {
//     if (mes === 'Abril') {
//         console.log(`Encontrado en el índice ${i}`);
//     }
// } );

// // Encontrar el índice de Abril:
// const indice = meses.findIndex( mes => mes === 'Abril' );
// console.log(indice);

// Ejercicio para encontar el valor de un elemento de carrito.

// const valor = carrito.findIndex( precioCelular => carrito.precio === 700 );
// console.log(valor);// No funcionó :c

// Encontrar un índice de un arreglo de objetos...
const indice2 = carrito.findIndex( producto => producto.precio === 700 );
console.log(indice2);