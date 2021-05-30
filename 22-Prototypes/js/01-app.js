const client = {
    name: 'Juan',
    balance: 600
}

console.log(client);
console.log(typeof client);


function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

const Juan = new Client('Juan', 600);
console.log(Juan);