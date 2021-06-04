// Class Declaration.
class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance
    }

    showInfo () {
        return `${this.name}, your balance is $${this.balance}`;
    }

    static welcome() {
        return `Welcome to the ATM!`
    }
}

// Herencia
class Company extends Customer {
    constructor (name, balance, tel, category) {
        super(name, balance);
        this.tel = tel;
        this.category = category;
    }
    static welcome() {  // Reescribir un método.
        return `Welcome to the government ATM!`
    }

}

// Instanciar la clase.
const juan = new Customer('Juan', 400 );
const company = new Company('Amestris', 7694630, 65146541, 'Alchemist Nation');
console.log(company);
console.log(company.showInfo());


console.log(Customer.welcome());
console.log(Company.welcome());