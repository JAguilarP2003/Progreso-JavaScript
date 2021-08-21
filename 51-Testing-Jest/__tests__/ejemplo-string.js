const password = "";

describe('Valida que el password no esté vacío', () => {
    test('Que el password tenga 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('Password no vacío', () => {
        expect(password).not.toHaveLength(0);
    })
})