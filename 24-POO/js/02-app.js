// Class Declaration.
class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance
    }

    showInfo () {
        return `${this.name}, your balance is ${this.balance}`;
    }

    static welcome() {
        return `Welcome!`
    }
}

// Instanciar la clase.
const juan = new Customer('Juan', 400 );
console.log(juan.showInfo());
console.log(juan);

console.log(Customer.welcome());


// Class Expression.
const Customer2 = class {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance
    }

    showInfo () {
        return `${this.name}, your balance is ${this.balance}`;
    }
}

// Instanciar la clase.
const David = new Customer2('David', 100 );
console.log(David.showInfo());
console.log(David);