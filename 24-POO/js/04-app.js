class Customer {

    #name;
    
    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}


const juan = new Customer();
juan.setName('Juan')
console.log(juan.getName());


console.log(juan.name());