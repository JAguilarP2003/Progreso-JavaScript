const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructurgin.
const { nombre, precio, disponible, noExiste } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);