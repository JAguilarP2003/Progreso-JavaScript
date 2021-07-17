const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', getData);

function getData() {
    fetch(url)
        .then(answer => answer.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))
}

async function getData() {
    try {
        const answer = await fetch(url);
        const result = await answer.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}