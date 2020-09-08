function validarNombre (){
    if(document.getElementById("nombre").validity.valueMissing){
        // Solo crea un elemento en el DOM si no existe el párrafo error
        if(!document.getElementById("errorNombre")){
            let mensajeError = document.createElement('p');
            mensajeError.setAttribute("class", "error");
            mensajeError.setAttribute("id", "errorNombre");
            mensajeError.innerHTML = "Debe indicar un nombre";
            document.getElementById("nombre").insertAdjacentElement("afterend", mensajeError);
            console.log("Campo errorNombre creado");
        }
        console.log("Campo nombre vacio");
    }
    else{
        console.log("Campo nombre validado");
        // Elimino el párrafo de error del DOM
        if(document.getElementById("errorNombre")){
            document.getElementById("errorNombre").remove();
        }
    }
}

function validarApellido (){
    if(document.getElementById("apellido").validity.valueMissing){
        // Solo crea un elemento en el DOM si no existe el párrafo error
        if(!document.getElementById("errorApellido")){
            let mensajeError = document.createElement('p');
            mensajeError.setAttribute("class", "error");
            mensajeError.setAttribute("id", "errorApellido");
            mensajeError.innerHTML = "Debe indicar un apellido";
            document.getElementById("apellido").insertAdjacentElement("afterend", mensajeError);
            console.log("Campo errorApellido creado");
            }
        console.log("Campo apellido vacio");
        }
    else{
        console.log("Campo apellido validado");
        // Elimino el párrafo de error del DOM
        if(document.getElementById("errorApellido")){
            document.getElementById("errorApellido").remove();
            }
        }
    }

function validarCorreo (){
    let mensajeErrorInnerHTML = '';
    if(document.getElementById("correo").validity.valueMissing){
        mensajeErrorInnerHTML = "Debe indicar un correo";
        console.log("Campo correo vacio");
    }
    else if(this.validity.typeMismatch){
        mensajeErrorInnerHTML = "Debe indicar un correo válido";
        console.log("Campo correo no válido");

    }
    else{
        console.log("Campo correo validado");
        // Elimino el párrafo de error del DOM
        if(document.getElementById("errorCorreo")){
            document.getElementById("errorCorreo").remove();
            }
        }
    // Existe error de validacion
    if(mensajeErrorInnerHTML){
        // Solo crea un elemento en el DOM si no existe el párrafo error
        if(!document.getElementById("errorCorreo")){
            mensajeError = document.createElement('p');
            mensajeError.setAttribute("class", "error");
            mensajeError.setAttribute("id", "errorCorreo");
            document.getElementById("correo").insertAdjacentElement("afterend", mensajeError);
            console.log("Campo errorCorreo creado");
            }
        else{
            // Si ya existe lo modifica
            mensajeError = document.getElementById("errorCorreo");
            }
        mensajeError.innerHTML = mensajeErrorInnerHTML;
        console.log("Campo errorCorreo modificado");
        }
}

function validarTelefono (){
    let mensajeErrorInnerHTML = '';
    if(document.getElementById("telefono").validity.valueMissing){
        mensajeErrorInnerHTML = "Debe indicar un teléfono";
        console.log("Campo telefono vacio");
        }
    else if(document.getElementById("telefono").validity.patternMismatch){
        mensajeErrorInnerHTML = "Debe indicar un teléfono de mínimo 8 números" + 
         " y 14 números como máximo";
        console.log("Campo teléfono no concuerda con el patron");
        }
    else{
        console.log("Campo teléfono validado");
        // Elimino el párrafo de error del DOM
        if(document.getElementById("errorTelefono")){
            document.getElementById("errorTelefono").remove();
            }
        }
    // Existe error de validacion
    if(mensajeErrorInnerHTML){
        // Solo crea un elemento en el DOM si no existe el párrafo error
        if(!document.getElementById("errorTelefono")){
            mensajeError = document.createElement('p');
            mensajeError.setAttribute("class", "error");
            mensajeError.setAttribute("id", "errorTelefono");
            document.getElementById("telefono").insertAdjacentElement("afterend", mensajeError);
            console.log("Campo errorTelefono creado");
            }
        else{
            // Si ya existe lo modifica
            mensajeError = document.getElementById("errorTelefono");
        }
        mensajeError.innerHTML = mensajeErrorInnerHTML;
        console.log("Campo errorTelefono modificado");
        }
}

function validarMensaje (){
    let mensajeErrorInnerHTML = '';
    if(document.getElementById("mensaje").validity.valueMissing){
        mensajeErrorInnerHTML = "Debe indicar un mensaje";
        console.log("Campo mensaje vacio");
    }
    else if(document.getElementById("mensaje").validity.tooLong){
        mensajeErrorInnerHTML = "Debe indicar un mensaje de máximo 1000 carácteres";
        console.log("Campo mensaje posee más de 1000 carácteres");

    }
    else{
        console.log("Campo mensaje validado");
        // Elimino el párrafo de error del DOM
        if(document.getElementById("errorMensaje")){
            document.getElementById("errorMensaje").remove();
            }
        }
    // Existe error de validacion
    if(mensajeErrorInnerHTML){
        // Solo crea un elemento en el DOM si no existe el párrafo error
        if(!document.getElementById("errorMensaje")){
            mensajeError = document.createElement('p');
            mensajeError.setAttribute("class", "error");
            mensajeError.setAttribute("id", "errorMensaje");
            document.getElementById("mensaje").insertAdjacentElement("afterend", mensajeError);
            console.log("Campo errorMensaje creado");
            }
        else{
            // Si ya existe lo modifica
            mensajeError = document.getElementById("errorMensaje");
            }
        mensajeError.innerHTML = mensajeErrorInnerHTML;
        console.log("Campo errorMensaje modificado");
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
formulario.addEventListener("invalid", function(e){
    e.stopPropagation();
    validarNombre();
    validarApellido();
    validarCorreo();
    validarTelefono();
    validarMensaje();
}, true);
