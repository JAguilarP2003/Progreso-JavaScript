const product = {
    id: 10,
}

const weakmap = new WeakMap();

weakmap.set(product, 'Screen');

console.log(weakmap.has(product));
console.log(weakmap.get(product));
console.log(weakmap.delete(product));


console.log(weakmap);