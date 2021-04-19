// Operdador Mayor que y menor que.

const dinero = 200;
const totalAPagar = 500;
const tarjeta = false;
const cheque = falso;

if (dinero >= totalAPagar) {
    console.log('Sí es posible pagar.');
} else if (cheque) {
    console.log('Sí tengo un cheque');
} else if(tarjeta) {
    console.log('Sí es posible pagar porque tengo tarjeta.');
} else {
    console.log('No es posible pagar.');
}