// Object Literal.
const producto = {
    nombre: "Teclado tenkeyless",
    valor: 499.99,
    stock: true
}

// Object Constructor.
function Producto(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
    this.stock = true;
}

const producto2 = new Producto("Mouse Logitech G203", 199.85);
console.log(producto2);

const producto3 = new Producto("Monitor 144 Hz", 500);
console.log(producto3);