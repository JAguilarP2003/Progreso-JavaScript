"use strict";

const producto = {
    nombre: "Teclado tenkeyless",
    valor: 499.99,
    stock: true
}

Object.freeze(producto);

// producto.stock = false;
// producto.imagen = "imagen.jpg";

// delete producto.valor;

console.log(Object.isFrozen(producto));

console.log(producto);