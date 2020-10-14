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

function validarContraseña (){
    let mensajeErrorInnerHTML = '';
    if(document.getElementById("password").validity.valueMissing){
        mensajeErrorInnerHTML = "Debe indicar una contraseña";
        console.log("Campo contraseña vacio");
        }
    else if(document.getElementById("password").validity.patternMismatch){
        mensajeErrorInnerHTML = "Debe indicar una contraseña de mínimo 8 caracteres" + 
         " alfanuméricos  y 16 números como máximo";
        console.log("Campo contraseña no concuerda con el patron");
        }
    else{
        console.log("Campo contraseña validado");
        // Elimino el párrafo de error del DOM
        if(document.getElementById("errorPassword")){
            document.getElementById("errorPassword").remove();
            }
        }
    // Existe error de validacion
    if(mensajeErrorInnerHTML){
        // Solo crea un elemento en el DOM si no existe el párrafo error
        if(!document.getElementById("errorPassword")){
            mensajeError = document.createElement('p');
            mensajeError.setAttribute("class", "error");
            mensajeError.setAttribute("id", "errorPassword");
            document.getElementById("password").insertAdjacentElement("afterend", mensajeError);
            console.log("Campo errorPassword creado");
            }
        else{
            // Si ya existe lo modifica
            mensajeError = document.getElementById("errorPassword");
        }
        mensajeError.innerHTML = mensajeErrorInnerHTML;
        console.log("Campo errorPassword modificado");
        }
}


// Campo nombre
nombre = document.getElementById("nombre");
nombre.addEventListener("change", validarNombre, false);
// Campo correo electrónico
correo = document.getElementById("correo");
correo.addEventListener("change", validarCorreo, false);
// Campo teléfono 
telefono  = document.getElementById("password");
telefono.addEventListener("change", validarContraseña, false);
// Formulario 
formulario  = document.getElementById("formularioCampos");
formulario.addEventListener("invalid", function(e){
    e.stopPropagation();
    validarNombre();
    validarCorreo();
    validarContraseña();
}, true);
