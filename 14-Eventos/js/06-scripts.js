// Event bubbling

const carDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

carDiv.addEventListener('click', cheems =>{
    cheems.stopPropagation();
    console.log('Click en card');
});

infoDiv.addEventListener('click', cheems =>{
    cheems.stopPropagation();
    console.log('Click en info');
});

titulo.addEventListener('click', cheems =>{
    cheems.stopPropagation();
    console.log('Click en titulo');
});

