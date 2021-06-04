// Class Declaration.
class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance
    }
}

// Instanciar la clase.
const juan = new Customer('Juan', 400 );
console.log(juan);




// Class Expression.
const Customer2 = class {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance
    }
}

// Instanciar la clase.
const David = new Customer2('Juan', 400 );
console.log(David);