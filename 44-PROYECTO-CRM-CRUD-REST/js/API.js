const url = 'http://localhost:4000/clientes';

// Cuando se crea nuevo cliente.
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
// Obtiene todos los clientes
export const getCustomers = async () => {
    try {
        const result = await fetch(url);
        const customers = await result.json();
        return customers;
    } catch (error) {
        console.log(error);
    }
}