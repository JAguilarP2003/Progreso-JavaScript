// const pendientes = ['Clase', 'Comer', 'Tarea', 'Gimnasio', 'Estudiar JavaScript'];

// for( let pendiente in pendientes) {
//     console.log(pendiente);
// };

const mouse = {
    Fabricante: "Logitech",
    modelo: "G203",
    Tipo: "RGB",
}

for (const propiedad in mouse) {
    console.log(`${mouse[propiedad]}`);
}


for (let [llave, valor] of Object.entries(mouse)) {
    console.log(llave, ":");
    console.log(valor);
}