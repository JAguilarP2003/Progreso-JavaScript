function Seller (name) {
    this.name = name;
    this.salerrom = null
}

Seller.prototype = {
    offer: (item, price) => {
        console.log(
            `Here we have a very special guitar, it's the ${item}! customized with an incredible blue burst and spectacular sound. We start with a price of: $${price}`
        )
    },
    sold: buyer => {
        console.log(`Guitar sold to ${buyer}`);
    }
}

function Buyer (name) {
    this.name = name;
    this.salerrom = null;
}

Buyer.prototype = {
    offer: (amount, buyer) => {
        console.log(`${buyer.name}: $${amount}`);
    }
}

function Auction () {
    let buyers = {};

    return {
        register: user => {
            buyers[user.name] = user;
            user.salerrom = this;
        }
    }
}

// Crear Objetos

const juan = new Buyer ('Juan');
const david = new Buyer ('David');
const seller = new Seller ('Guitar Seller');
const auction = new Auction();

// Resgisrar objetos.
auction.register(juan);
auction.register(david);
auction.register(seller);

seller.offer('Gibson ES-335 DOT 2018', 4500);

juan.offer(5000, juan);
david.offer(5500, david);
juan.offer(6000, juan);
david.offer(7000, david);
juan.offer(8500, juan);

seller.sold('Juan');