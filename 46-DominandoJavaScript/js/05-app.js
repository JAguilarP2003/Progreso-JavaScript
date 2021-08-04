// Explicit Binding

function person(el1, el2) {
    console.log(`My name is ${this.name} and my favourite artist are ${el1} and ${el2}`);
}

const info = {
    name: 'Juan'
}

const favArtists = ['Eve', 'SOAD'];

person.call(info, favArtists[0], favArtists[1]);

person.apply(info, favArtists);

const newFn = person.bind(info, favArtists[0], favArtists[1]);
newFn();