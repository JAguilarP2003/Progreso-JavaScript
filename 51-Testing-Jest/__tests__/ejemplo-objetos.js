const cliente = {
    nombre: 'Juan',
    saldo: 500
};

describe('Testing al Cliente', () => {
    test('El cliente es Premium', () => {
        expect(cliente.saldo).toBeGreaterThan(400);
    });

    test('Es Juan', () => {
        expect(cliente.nombre).toBe('Juan');
    });

    test('No es otro CLiente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', () => {
        expect(cliente.saldo).not.toBe(300);
    });
})