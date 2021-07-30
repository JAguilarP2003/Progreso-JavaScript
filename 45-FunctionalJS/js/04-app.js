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

const getNames = product => {
    return product.name;
}

const result = cart.map(getNames);
console.log(result);
console.log(cart);