// for ( let i = 0; i <= 10; i ++) {
//     if ( i === 5 ) {
//         console.log('5');
//         continue;
//     }
//     console.log(`Número: ${i}`);
// }


const carrito = [
    { nombre: "Teclado Tenkeyless", precio: 300},
    { nombre: "Mouse Logitech G203", precio: 199.85},
    { nombre: "Monitor 144Hz", precio: 500},
    { nombre: "Headset Wireless", precio: 49.65},
    { nombre: "USB 64GB", precio: 15},
    { nombre: "Chasis RGB", precio: 89.99},
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El artículo ${carrito[i].nombre} tiene descuento.`);
        continue;
    }
    console.log(carrito[i].nombre);
}