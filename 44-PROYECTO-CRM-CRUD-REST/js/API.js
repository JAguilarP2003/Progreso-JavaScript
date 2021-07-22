const url = 'http://localhost:4000/clientes';

export const newCustomer = async customer => {
    try {
        await fetch(url, {
            method:'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window,location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}