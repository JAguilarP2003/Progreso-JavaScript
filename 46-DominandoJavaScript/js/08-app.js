self.onload = () => {
    console.log('Window Loaded');
}
window.name = "20” Screen";
const product = {
    price: 80,
    stock: true,
    showInfo: function () {
        // const self = this;
        return `A ${self.name} has a price of $${this.price}`
    }
}

console.log(product.showInfo());