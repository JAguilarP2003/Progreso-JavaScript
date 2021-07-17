function downloadCustomers() {
    return new Promise((resolve, reject)=> {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('Customers List successfully downloaded.');
            } else {
                reject('Connection Failed.');
            }
        }, 3000);
    })
}

// Async await.
const run = async () => {
    try {
        console.log(12+1);
        const answer = await downloadCustomers();

        console.log( 2 + 2);
        console.log(answer);
    } catch (error) {
        console.log(error);
    }
}
run();