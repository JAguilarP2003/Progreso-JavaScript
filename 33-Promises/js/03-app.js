const applyDisc = new Promise( (resolve, reject) => {
    
    const discount = true;
    
    if (discount) {
        resolve('Discount applied');
    } else {
        reject("Discount couldn't be applied");
    }
} );


applyDisc
    .then(result => discount(result))
    .catch(error => console.log(error));


// Hay 3 valores posibles:
// fulfilled - El promised se cumplió.
// reject - El promised no se cumplió.
// pending - No se ha cumplido y tampoco fue rechazado.

function discount(msg) {
    console.log(msg);
}