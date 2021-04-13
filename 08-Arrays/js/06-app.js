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

const producto3 = {
    nombre: "Monitor 144Hz",
    valor: 500
}

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];


console.table(resultado);