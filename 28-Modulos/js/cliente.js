
export const nameCustomer = 'Juan';
export const saving = 500;

export function showInfo(name, saving) {
    return `Cliente: ${nameCustomer} - Ahorro: ${saving}`;
}

export function balance(saving) {
    if (saving > 0) {
        console.log('Sí tiene saldo.');
    } else {
        console.log('No tiene saldo.');
    }
}

export class Customer {
    constructor(name, saving) {
        this.name = name;
        this.saving = saving;
    }

    showInfo() {
        return `Cliente: ${this.name} - Ahorro: ${this.saving}`;
    }
}

export default function newFunction() {
    console.log('Este es el export default.');
}