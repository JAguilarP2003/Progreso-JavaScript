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

// Instanciarlo
const Jhon = new customer('Jhon', 10500);
console.log(Jhon.customerType());
console.log(Jhon.nameCustomerBalance());
Jhon.withdrawBalance(1000);
console.log(Jhon.nameCustomerBalance());


console.log(Jhon);