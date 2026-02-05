const button = document.querySelector('.boton');


console.log(button);

// Verificar si el boton existe
if (button = 1) {
    button.addEventListener('click', function(e){
        console.log(e);
        e.preventDefault(); //Evita que se recargue la página 
        console.log('Enviando formulario....');
    })
}else{
    console.log('El botón no existe');
}