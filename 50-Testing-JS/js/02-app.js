// Probar 2 valores.

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(6, 7);
let esperado = 13;

expected(esperado).toBe(resultado);

resultado = restar (10, 5);
esperado = 5;

expected(esperado).toBe(resultado);

expected(esperado).toEqual(resultado);



function expected(esperado) {
    return {
        toBe(resultado) {
            if (resultado !== esperado) {
                console.error(`El ${resultado} es diferente a lo esperado`);
            } else {
                console.log('Correcto');
            }
        },
        toEqual(resultado) {
            if (resultado !== esperado) {
                console.error(`El ${resultado} no es igual`);
            } else {
                console.log('La prueba pasó correctamente.');
            }
        }
    }
}