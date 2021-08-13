// Constructor Pattern.

class Person {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
}

class Customer extends Person {
    constructor(name, email, company) {
        super(name, email);
        this.company = company;
    }
}

const person = new Person('David', 'person@gmail.com');
console.log(person);

const customer = new Customer('Juan', 'customer@gmeil.com', 'SENA');
console.log(customer);