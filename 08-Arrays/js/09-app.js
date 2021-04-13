const carrito = [
    { nombre: "Teclado Tenkeyless", precio: 300},
    { nombre: "Mouse Logitech G203", precio: 199.85},
    { nombre: "Monitor 144Hz", precio: 500},
    { nombre: "Headset Wireless", precio: 49.65},
    { nombre: "USB 64GB", precio: 15},
    { nombre: "Chasis RGB", precio: 89.99},
]

for(let i = 0; i < carrito.length; i++ ) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto) {
    console.log(`${p.nombre} - Precio: ${p.precio}`);
} );