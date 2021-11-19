window.addEventListener('load', function(){
    // validando formularios 
    let formulario = document.querySelector('form');
    let campo = document.querySelector('.formu');
    let mensajes = document.querySelector('.mensaje');

    formulario.addEventListener('submit',function(event) {
        event.preventDefault();
         if(campo.value == ""){
             mensajes.innerText = "Campo obligatorio"
            // chequear si puso mas de tres caracteres
        }else if (campo.value.length < 3){
            mensajes.innerText = "Ingresar al menos 3 caracteres"
        }else{
            formulario.submit()
        }
})
    // para que este limpio cuando el usuario entre al campo --> limpiar mensaje 
    campo.addEventListener('focus',function() {
         // limpiar mensaje de error
            mensajes.innerText = "" ;
         // limpiar el valor que tengo en el campo, this habla del elemento donde se verifico el event listener que es el campo
           campo.value = "";
     })
})