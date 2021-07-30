// const customer = 'Juan';

// function showCustomer() {
//     const customer = 'Aguilar';

//     console.log(customer);
// }

// console.log(customer);

// showCustomer();

const getCustomer = () => {
    const name = 'Juan';

    function showName() {
        console.log(name);
    }

    return showName;
}

const customer = getCustomer();

customer();