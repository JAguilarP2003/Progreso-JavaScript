const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('dblclick', ()=>{
    console.log('Entrando a la navegación');
    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', ()=>{
    console.log('Saliendo a la navegación');
    nav.style.backgroundColor = 'transparent';
});


// mousedown - Similar al click
// click
// dblclick = doble click
// mouseup - cuando sueltas el mouse