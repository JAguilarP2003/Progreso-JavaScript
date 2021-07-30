const sum = (a, b, c) => a +b +c;

// Currying & Partial en 2 partes

// const partial = (a) => (b, c) => sum (a, b, c);
// const firstNumer = partial(5);
// const result = firstNumer(4,3);
// console.log(result);
// console.log(sum(1,2,3));



// Currying & Partial en 3 partes.

const partial = a => b => c => sum (a, b, c);
// const firstNumer = partial(5);
// const secondNumber = firstNumer(4);
// const result = secondNumber(3);
// console.log(result);



// Sintaxis corta.

const resultPartial = partial(5)(4)(3);
console.log(resultPartial);