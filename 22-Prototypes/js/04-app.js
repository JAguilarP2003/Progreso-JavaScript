function customer (name, balance) {
    this.name = name;
    this.balance = balance;
}


customer.prototype.customerType = function () {
    let type;

    if (this.balance > 10000) {
        type = 'Platinum';
    } else if (this.balance > 5000) {
        type = 'Gold';
    } else {
        type = 'Normal';
    }
    return type;
}

customer.prototype.nameCustomerBalance = function () {
    return `Name: ${this.name}, Balance: ${this.balance}, Customer Type: ${this.customerType()}`
}

customer.prototype.withdrawBalance = function (withdraw) {
    this.balance -= withdraw
}

function person(name, balance, telephone) {
    customer.call(this, name, balance);
    this.telephone = telephone;
}

person.prototype = Object.create(customer.prototype);

person.prototype.constructor = customer;


// Instanciarlo
const juan = new person('Juan', 5000, 3014890191);
console.log(juan);
console.log(juan.nameCustomerBalance());

person.prototype.showTelephone = function() {
    return `The customer's telephone is: ${this.telephone}`
}

console.log(juan.showTelephone());