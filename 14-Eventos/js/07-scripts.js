const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', cheems => {
    // console.log(cheems.target.classList);
    if (cheems.target.classList.contains('titulo')) {
        console.log('Diste click en título');
    }

    if (cheems.target.classList.contains('precio')) {
        console.log('Diste click en precio');
    }

    if (cheems.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
});