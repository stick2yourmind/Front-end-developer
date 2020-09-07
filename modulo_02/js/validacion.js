function validarNombre (){
    if(this.validity.valueMissing){
        // Solo crea un elemento en el DOM si no existe el párrafo error
        if(!document.getElementById("errorNombre")){
            let mensajeError = document.createElement('p');
            mensajeError.setAttribute("class", "error");
            mensajeError.setAttribute("id", "errorNombre");
            mensajeError.innerHTML = "Debe indicar un nombre";
            this.insertAdjacentElement("afterend", mensajeError);
            console.log("Campo errorNombre creado");
        }
        console.log("Campo nombre vacio");
    }
    else{
        console.log("Campo nombre validado");
        if(document.getElementById("errorNombre")){
            document.getElementById("errorNombre").remove();
        }
    }
}

function validarApellido (){
    if(this.validity.valueMissing){
        // Solo crea un elemento en el DOM si no existe el párrafo error
        if(!document.getElementById("errorApellido")){
            let mensajeError = document.createElement('p');
            mensajeError.setAttribute("class", "error");
            mensajeError.setAttribute("id", "errorApellido");
            mensajeError.innerHTML = "Debe indicar un apellido";
            this.insertAdjacentElement("afterend", mensajeError);
            console.log("Campo errorApellido creado");
        }
        console.log("Campo apellido vacio");
    }
    else{
        console.log("Campo apellido validado");
        if(document.getElementById("errorApellido")){
            document.getElementById("errorApellido").remove();
        }
    }
}

function validarCorreo (){
    // Solo crea un elemento en el DOM si no existe el párrafo error
    if(!document.getElementById("errorCorreo")){
        var mensajeError = document.createElement('p');
        mensajeError.setAttribute("class", "error");
        mensajeError.setAttribute("id", "errorCorreo");
        console.log("Campo errorCorreo creado");
    }
    if(this.validity.valueMissing){
        mensajeError.innerHTML = "Debe indicar un correo";
        this.insertAdjacentElement("afterend", mensajeError);
        console.log("Campo correo vacio");
    }
    else if(this.validity.typeMismatch){
        mensajeError.innerHTML = "Debe indicar un correo válido";
        this.insertAdjacentElement("afterend", mensajeError);
        console.log("Campo correo no válido");

    }
    else{
        console.log("Campo correo validado");
        if(document.getElementById("errorCorreo")){
            document.getElementById("errorCorreo").remove();
        }
    }
}

function validarTelefono (){
    // Solo crea un elemento en el DOM si no existe el párrafo error
    if(!document.getElementById("errorTelefono")){
        var mensajeError = document.createElement('p');
        mensajeError.setAttribute("class", "error");
        mensajeError.setAttribute("id", "errorTelefono");
        console.log("Campo errorTelefono creado");
    }
    if(this.validity.valueMissing){
        mensajeError.innerHTML = "Debe indicar un teléfono";
        this.insertAdjacentElement("afterend", mensajeError);
        console.log("Campo telefono vacio");
    }
    else if(this.validity.patternMismatch){
        mensajeError.innerHTML = "Debe indicar un teléfono de mínimo 8 números" + 
         " y 14 números como máximo";
        this.insertAdjacentElement("afterend", mensajeError);
        console.log("Campo teléfono no concuerda con el patron");

    }
    else{
        console.log("Campo teléfono validado");
        if(document.getElementById("errorTelefono")){
            document.getElementById("errorTelefono").remove();
        }
    }
}

function validarMensaje (){
    // Solo crea un elemento en el DOM si no existe el párrafo error
    if(!document.getElementById("errorMensaje")){
        var mensajeError = document.createElement('p');
        mensajeError.setAttribute("class", "error");
        mensajeError.setAttribute("id", "errorMensaje");
        console.log("Campo errorMensaje creado");
    }
    if(this.validity.valueMissing){
        mensajeError.innerHTML = "Debe indicar un mensaje";
        this.insertAdjacentElement("afterend", mensajeError);
        console.log("Campo mensaje vacio");
    }
    else if(this.validity.tooLong){
        mensajeError.innerHTML = "Debe indicar un mensaje de máximo 1000 carácteres";
        this.insertAdjacentElement("afterend", mensajeError);
        console.log("Campo mensaje posee más de 1000 carácteres");

    }
    else{
        console.log("Campo mensaje validado");
        if(document.getElementById("errorMensaje")){
            document.getElementById("errorMensaje").remove();
        }
    }
}

// Campo nombre
nombre = document.getElementById("nombre");
nombre.addEventListener("change", validarNombre, false);
// Campo apellido
apellido = document.getElementById("apellido");
apellido.addEventListener("change", validarApellido, false);
// Campo correo electrónico
correo = document.getElementById("correo");
correo.addEventListener("change", validarCorreo, false);
// Campo teléfono 
telefono  = document.getElementById("telefono");
telefono.addEventListener("change", validarTelefono, false);
// Campo mensaje 
mensaje  = document.getElementById("mensaje");
mensaje.addEventListener("change", validarMensaje, false);
// Formulario 
formulario  = document.getElementById("formularioCampos");
formulario.addEventListener("invalid", function(){alert("Formulario submiteado");}, true);
