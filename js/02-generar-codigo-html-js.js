// Crear un luevo link

// las etiquetas las creamos en mayuscula y sin apertura y cierre
const newlink = document.createElement('A')
console.log(newlink);

// Agregar el href
newlink.href = 'https://www.youtube.com/';

// Agregar un texto
newlink.textContent = 'A New link';

// Agregar una clase
newlink.classList.add('navegacion__enlace');

// Agregarlo al documento
const navigation = document.querySelector('.navegacion');

navigation.appendChild(newlink);

// a