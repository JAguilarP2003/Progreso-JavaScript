// Module Pattern.

const module1 = (function () {
    const name = 'Juan';

    function hello() {
        console.log('hello');
    }

    return {
        name,
        hello
    }
})();
