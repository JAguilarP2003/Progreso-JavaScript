// for ( let i = 0; i <= 10; i ++) {
//     console.log(`Numero: ${i}`);
// }

// for(let i = 0; i <= 20; i ++) {
//     if ( i % 2 === 0 ) {
//         console.log(`El número ${i} es par.`);
//     } else {
//         console.log(`El número ${i} es impar.`);
//     }
// }

const carrito = [
    { nombre: "Teclado Tenkeyless", precio: 300},
    { nombre: "Mouse Logitech G203", precio: 199.85},
    { nombre: "Monitor 144Hz", precio: 500},
    { nombre: "Headset Wireless", precio: 49.65},
    { nombre: "USB 64GB", precio: 15},
    { nombre: "Chasis RGB", precio: 89.99},
]

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}