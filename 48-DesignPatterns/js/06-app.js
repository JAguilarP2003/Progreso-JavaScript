class Person {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
}

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const personFunctions = {
    showInfo() {
        console.log(`- Name: ${this.name} - Email: ${this.email} -`)
    },
    showName() {
        console.log(`- My name is: ${this.name} -`);
    }
}

// Añadir personfunctions a la clase Person.
Object.assign(Person.prototype, personFunctions);
Object.assign(Customer.prototype, personFunctions);

const customer = new Person ('Juan', 'juan@gmail.com');

console.log(customer);
customer.showInfo();
customer.showName();

const customer2 = new Customer('Customer', 'customer@gmail.com');

console.log(customer2);
customer2.showInfo();
customer2.showName();