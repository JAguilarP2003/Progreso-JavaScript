const carrito = [
    { nombre: "Teclado Tenkeyless", precio: 300},
    { nombre: "Mouse Logitech G203", precio: 199.85},
    { nombre: "Monitor 144Hz", precio: 500},
    { nombre: "Headset Wireless", precio: 49.65},
    { nombre: "USB 64GB", precio: 15},
    { nombre: "Chasis RGB", precio: 89.99},
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));


console.log(nuevoArreglo);
