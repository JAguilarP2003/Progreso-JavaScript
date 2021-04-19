// Switch case

const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        console.log(`Pagaste con ${metodoPago}.`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}.`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}.`);
        break;
    default:
        console.log('Aún no  has seleccionado un método de pago o método de pago no soportado.');
        break;
}

function pagar() {
    console.log('Pagando...');
}