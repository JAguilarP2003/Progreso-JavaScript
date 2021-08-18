// Probar 2 valores.

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(6, 7);
let esperado = 13;

if (resultado !== esperado) {
    console.error(`El ${resultado} es diferente a lo esperado`);
} else {
    console.log('Correcto');
}

resultado = restar (10, 5);
esperado = 5;

if (resultado !== esperado) {
    console.error(`El ${resultado} es diferente a lo esperado`);
} else {
    console.log('Correcto');
}