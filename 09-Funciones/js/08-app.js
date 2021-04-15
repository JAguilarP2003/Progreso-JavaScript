function sumar (a, b){
    return a + b;
}

const resultado = sumar(48, 546);

console.log(resultado);

// Ejemplo más avanzado

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total + agregarCarrito(499.95);
total + agregarCarrito(500);
total + agregarCarrito(299.8);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);

console.log(total);