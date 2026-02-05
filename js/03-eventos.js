// Eventos en JS

// Click del mouse sobre un elemento
// Pulsación de un tecla especifica
// Reproducción de un archivo multimedia
// Scroll del mouse
// Diligencia un formulario

// console.log(1);
// console.log(2);
// console.log(5);

// ===========================================

console.log(1);

// Load espera que el JS y los archivos que dependen del HTML esten listos.
window.addEventListener('load', function(){
    console.log(2);
    console.log('Ya cargó window2');
})


// Otra forma de hacer lo mismo
window.onload = function(){
    console.log(3);
    console.log('Ya cargo window3');
        
}
console.log(5);

const button = document.querySelector('.btnPrint');

// Evento click
button.addEventListener('click', function(){
    console.log('Funcion externa')
    window.print();
})

// Evento scroll

window.onscroll = function(){
    console.log('Estoy haciendo scroll...');
}
