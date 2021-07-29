const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

const sumOrMultiply = fn => fn(10, 3);

console.log(sumOrMultiply(sum));
console.log(sumOrMultiply(multiply));