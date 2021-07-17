function downloadNewCustomers() {
    return new Promise (resolve => {
        console.log('Downloading customers...');

        setTimeout(() => {
            resolve('Customers succesfully downloaded.')
        }, 5000);
    })
}

function downloadNewOrders() {
    return new Promise (resolve => {
        console.log('Downloading orders...');

        setTimeout(() => {
            resolve('Orders succesfully downloaded.')
        }, 3000);
    })
}

const app = async () => {
    try {
        const answer = await Promise.all([downloadNewCustomers(), downloadNewOrders()]);    
        console.log(answer[0]);
        console.log(answer[1]);
    } catch (error) {
        console.log(error);
    }
}

app()