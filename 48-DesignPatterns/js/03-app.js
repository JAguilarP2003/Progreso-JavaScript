// Singleton.

let instance = null;
class Person {
    constructor (name, email) {
        if (!instance) {
            this.name = name;
            this.email = email;
            instance = this;
        } else {
            return instance;
        }
    }
}

const person = new Person('Juan', 'juan@gmail.com');
console.log(person);

const person2 = new Person('David', 'david@gmail.com');
console.log(person2);