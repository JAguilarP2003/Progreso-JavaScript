function costumer (name, balance) {
    this.name = name;
    this.balance = balance;
}

const Juan = new costumer('Juan', 600);

function formatCustomer(costumer) {
    const {name, balance} = costumer;
    return `The client ${name} have a balance of ${balance}`;
}

function formatCompany(company) {
    const {name, balance, category} = company;
    return `The client ${name} have a balance of ${balance} and belongs to the category ${category}`;
}

console.log(formatCustomer(Juan));

function company (name, balance, category) {
    this.name = name;
    this.balance = balance;
    this.category = category;
}

const CWJ = new company('Code with Juan', 4000, 'Online courses');
console.log(formatCompany(CWJ));