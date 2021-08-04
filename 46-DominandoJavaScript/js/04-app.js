// Implicit Binding.

const user = {
    name: 'Juan',
    age: 18,
    info() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    },
    pet: {
        name: 'Bertold',
        age: 5,
        info() {
            console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
        }
    }
}

user.info();
user.pet.info();