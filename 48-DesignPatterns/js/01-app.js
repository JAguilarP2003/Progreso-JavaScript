// Class Pattern.

class Person {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
}

const person = new Person ('Juan', 'email@gmail.com');

console.log(person);