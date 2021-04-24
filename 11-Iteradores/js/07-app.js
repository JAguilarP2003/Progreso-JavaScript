const pendientes = ['Clase', 'Comer', 'Tarea', 'Gimnasio', 'Estudiar JavaScript'];

const carrito = [
    { nombre: "Teclado Tenkeyless", precio: 300, descuento: false},
    { nombre: "Mouse Logitech G203", precio: 199.85, descuento: true},
    { nombre: "Monitor 144Hz", precio: 500, descuento: false},
    { nombre: "Headset Wireless", precio: 49.65, descuento: false},
    { nombre: "USB 64GB", precio: 15, descuento: false},
    { nombre: "Chasis RGB", precio: 89.99, descuento: false},
];

for( let pendiente of pendientes) {
    console.log(pendiente);
};

for (const producto of carrito) {
    console.log(producto.nombre);
}