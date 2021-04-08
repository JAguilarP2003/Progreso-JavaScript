const producto = {
    nombre: "Teclado tenkeyless",
    valor: 499.99,
    stock: true,
    caracteristicas: {
        entradas: "USB tipo C",
        Switches: "Cherry MX brown", 
        aspecto: {
            rgb: true,
            color: "Negro"
        },
    }
}


const { nombre, caracteristicas, caracteristicas: { aspecto, aspecto: { rgb } } } = producto;

console.log(nombre);
console.log(caracteristicas);
console.log(aspecto);
console.log(rgb);