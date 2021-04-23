// forEach

const pendientes = ['Clase', 'Comer', 'Tarea', 'Gimnasio', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});

const carrito = [
    { nombre: "Teclado Tenkeyless", precio: 300, descuento: false},
    { nombre: "Mouse Logitech G203", precio: 199.85, descuento: true},
    { nombre: "Monitor 144Hz", precio: 500, descuento: false},
    { nombre: "Headset Wireless", precio: 49.65, descuento: false},
    { nombre: "USB 64GB", precio: 15, descuento: false},
    { nombre: "Chasis RGB", precio: 89.99, descuento: false},
];

const nuevoArreglo = carrito.forEach((producto)=> {
    console.log(producto.nombre);
})


const nuevoArreglo2 = carrito.map ((producto) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);