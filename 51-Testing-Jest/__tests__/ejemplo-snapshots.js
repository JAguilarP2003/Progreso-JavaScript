const cliente = {
    nombre: "Juan David Aguilar",
    saldo: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Juan David', () => {
        expect(cliente).toMatchSnapshot();
    })
})

