const carrito = [];

// Definir un producto.
const producto = {
    nombre: "Teclado Tenkeyless",
    valor: 499.99
}

const producto2 = {
    nombre: "Mouse Logitech G203",
    valor: 199.85
}

const producto4 = {
    nombre: "Headset Wireless",
    valor: 49.65
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);


const producto3 = {
    nombre: "Monitor 144Hz",
    valor: 500
}

carrito.unshift(producto3);

console.table(carrito);

// // Eliminar último elemento de un arreglo.

// carrito.pop();

// console.table(carrito);

// // Eliminar del inicio del arreglo.

// carrito.shift();

// console.table(carrito);

carrito.splice(1, 1);

console.table(carrito);