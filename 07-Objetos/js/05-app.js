const producto = {
    nombre: "Teclado tenkeyless",
    valor: 499.99,
    stock: true,
    caracteristicas: {
        aspecto: {
            rgb: true,
            color: "Negro"
        },
        entradas: "USB tipo C",
        Switches: "Cherry MX brown",
    }
}


console.log(producto);
console.log(producto.caracteristicas.Switches);
console.log(producto.caracteristicas.aspecto.rgb);
