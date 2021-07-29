const cart = [
    { name: "20” Screen", price: 500},
    { name: "50” TV", price: 700},
    { name: "Tablet", price: 300},
    { name: "HeadSet", price: 200},
    { name: "Keyboard", price: 50},
    { name: "Phone", price: 500},
    { name: "Speakers", price: 300},
    { name: "Laptop", price: 800},
];

// const result = cart.filter(product => {
//     return product.price > 400;
// });

// console.log(result);

const higherThan400 = product => {
    return product.price > 400;
};

const result = cart.filter(higherThan400);
console.log(cart);
console.log(result);