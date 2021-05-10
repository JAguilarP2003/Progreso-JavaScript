const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', (cheems)=>{
    if (cheems.target.value === '') {
        console.log('Falló la validación.');
    }
    // console.log(cheems.target.value);
})