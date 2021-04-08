const producto = {
    nombre: "Teclado tenkeyless",
    valor: 499.99,
    stock: true
}

producto.stock = false;

delete producto.valor;

console.log(producto);