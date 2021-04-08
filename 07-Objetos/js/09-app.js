"use strict";

const producto = {
    nombre: "Teclado tenkeyless",
    valor: 499.99,
    stock: true
}

Object.seal(producto);

producto.stock = false;
// producto.imagen = "imagen.jpg";
// delete producto.valor;

console.log(producto);

console.log(Object.isSealed(producto));