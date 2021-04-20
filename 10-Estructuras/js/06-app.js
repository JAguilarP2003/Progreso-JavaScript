const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Sí puedes comprar.');

} else if (!puedePagar && !usuario) {
    console.log('No puedes pagar.');

} else if (!usuario) {
    console.log('Inicia sesión primero.');

} else if (!puedePagar) {
    console.log('Fondos insuficientes.');
}