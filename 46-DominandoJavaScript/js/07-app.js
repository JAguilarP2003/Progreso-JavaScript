console.log('First');

setTimeout(() => {
    console.log('Second');
}, 0);

console.log('Third');

setTimeout(() => {
    console.log('Fourth');
}, 0);

new Promise(function (resolve) {
    resolve('Unknown...')
}).then(console.log)

console.log('Final');

function hello() {
    console.log('Hello!');
}
hello();