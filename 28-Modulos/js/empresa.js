import { Customer } from './cliente.js';

export class Company extends Customer {
    constructor(name, saving, category) {
        super(name, saving);
        this.category = category;
    }

    showInfo() {
        return `Cliente: ${this.name} - Ahorro: ${this.saving} - Categoría: ${this.category}`;
    }
}
