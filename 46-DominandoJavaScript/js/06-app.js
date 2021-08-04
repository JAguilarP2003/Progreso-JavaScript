// New Binding.

function Car(model, color) {
    this.model = model;
    this.color = color;
}

const car = new Car('Camaro', 'Black');
console.log(car);

// Window Binding
window.color = 'Black'
function hello() {
    console.log(color);
}

hello();