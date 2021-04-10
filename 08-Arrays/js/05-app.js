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

// Push agrega al final de un arreglo.

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Monitor 144Hz",
    valor: 500
}

carrito.unshift(producto3)

console.table(carrito);