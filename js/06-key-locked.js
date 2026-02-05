//Bloque de teclas

const keysLocked = ["a","b","c","e"];

document.querySelectorAll(".campo__field").forEach(field => {

    field.addEventListener("keydown", function(e){
        if(keysLocked.includes(e.key)){
            e.preventDefault();
            console.log(`tecla ${e.key} bloqueada`);
        
        };
    });

})
