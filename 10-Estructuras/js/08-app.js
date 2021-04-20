
// const autenticado = true;

// if (autenticado) {
//     console.log('El usuario está autenticado');
// }




const calificacion = 5;

function notas() {
    if (calificacion >= 4) {
        console.log ('Bien hecho, felicidades!');
        return;
    };
    
    if (calificacion >= 3.5) {
        console.log ('Lo lograste!');
        return;
    };
    
    if (calificacion <= 3.4) {
        console.log ('Esfuérzate para la próxima!');
        return;
    };   
}

notas();