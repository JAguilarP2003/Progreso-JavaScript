const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg"

// Eliminar propiedadesdel objeto.
delete producto.disponible;


console.log(producto);