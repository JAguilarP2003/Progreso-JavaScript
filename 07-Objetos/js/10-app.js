const producto = {
    nombre: "Teclado tenkeyless",
    valor: 499.99,
    stock: true
}

const aspecto = {
    rgb: true,
    color: "Negro",
}

console.log(producto);
console.log(aspecto);

const resultado = Object.assign(producto, aspecto);

// Sepread Operator o Rest Operator.
const resultado2 = {...producto, ...aspecto};

console.log(resultado);
console.log(resultado2);