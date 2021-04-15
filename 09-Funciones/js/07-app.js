
iniciarPrograma();


function iniciarPrograma () {
    console.log('Iniciando Programa');
    funcion2();
}


function funcion2() {
    console.log("Desde la función 2.");
    userAutenticado("Pablo");
}

function userAutenticado(usuario) {
    console.log("Autenticando usuario..");
    console.log(`${usuario} se ha autenticado con éxito`);
}