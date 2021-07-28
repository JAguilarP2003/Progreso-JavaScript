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

// ELimina un cliente.
export const deleteCustomer = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// Obtiene un cliente por su ID.
export const getCustomer = async id => {
    try {
        const result = await fetch(`${url}/${id}`);
        const customer = await result.json();
        return customer;
    } catch (error) {
        console.log(error);
    }
}