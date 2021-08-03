getCustomer('Juan');

function getCustomer(name) {
    console.log(`Customer's name is ${name}`);
};

getCustomer2('David');

const getCustomer2;

getCustomer2 = function (name) {
    console.log(`Customer's name is ${name}`);
};