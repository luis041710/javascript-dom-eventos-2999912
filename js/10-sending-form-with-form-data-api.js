// Enviar un formulario con Form Data API

const userForm = document.querySelector(".formulario");


userForm.addEventListener("submit", function(e){

    e.preventDefault();
    
    const data = new  FormData(userForm);
    const userData = Object.fromEntries(data.entries())

    console.log("Todos los datos del usuario son:", userData);

    // console.log("Este es el nombre del usuario: ",userData.userName)


    // Destructuring

    const { userName }= userData;
        console.log(userName)



    // console.log("Todos los datos del usuario son:", userPhone);

    // const{userPhone} = FormData

    // console.log("Este es el telefono: ",userData["user-phone"]);
    // console.log("Este es el telefono: ",userData["user-name"]);

    // console.log("Nombre:", userData["user-name"], " Teléfono:", userData["user-phone"]);

    // const tel = userData["user-phone"];

    // console.log("Este es una variable", tel);

});

