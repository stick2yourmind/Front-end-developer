var tablaDestinoID="";
function dragOverTabla (evento){
    evento.preventDefault();
}
function dropTabla(evento) {
    let tablaOrigenID = tablaDestinoID = buffer = aux = null;
    evento.preventDefault();
    console.log(evento);
    console.log("inicio while");
    /* Etapa: Hallar la tabla padre contenedora, en el peor caso se dropea en una celda, por lo tanto,
    deberia ascender como maximo 2 niveles */
    aux = evento.target;
    for(let i=0; aux.parentElement.id.toString().includes("tablaDrag")==false && i<2; i++){
            aux = aux.parentElement;
            console.log("Iteración: ", i+1);
    }
    tablaDestinoID = aux.parentElement.id;
    console.log("tablaDestinoID: ", tablaDestinoID);
    tablaDestinoID = document.getElementById(tablaDestinoID);
    console.log("tablaDestinoID obj: ", tablaDestinoID);
    tablaOrigenID = evento.dataTransfer.getData("Text");
    console.log("tablaOrigenID: ", tablaOrigenID);
    tablaOrigenID = document.getElementById(tablaOrigenID);
    console.log("tablaOrigenID obj: ", tablaOrigenID);
    /* Invierto el contenido de las tablas */
    buffer = tablaDestinoID.innerHTML;
    tablaDestinoID.innerHTML = tablaOrigenID.innerHTML;
    tablaOrigenID.innerHTML = buffer;
    /* Almaceno el orden en el localStorage */
    guardarLocalStorageOrdenCripto();
}

function dragStartTabla(evento) {
    console.log(evento);
    evento.dataTransfer.setData("Text", evento.target.id);
    console.log("evento.dataTransfer.getData('Text'): ", evento.dataTransfer.getData("Text"));
}

function guardarLocalStorageOrdenCripto(){
    let ordenTablas = ordenCripto = [];
    let clave = nombrePagina();
    ordenTablas = document.getElementsByClassName("CaptionTablaSimbolo");
    for(let i =0;i<ordenTablas.length;i++)
        ordenCripto[i]=ordenTablas[i].id;
    localStorage.setItem(clave,ordenCripto);
}

function leerLocalStorageOrdenCripto(){
    let ordenTablas = ordenCripto = buffer =[];
    let clave = nombrePagina();
    if(localStorage.getItem(clave)){
        ordenCripto = localStorage.getItem(clave).split(',');
        console.log("ordenCripto: ", ordenCripto);
        ordenTablas = document.getElementsByClassName("CaptionTablaSimbolo");
        if(ordenCripto.length == ordenTablas.length){
            console.log("Vectores iguales");
            /* Almaceno un buffer del contenido actual para no perder los datos al pisarlos */
            for(let i =0;i<ordenTablas.length;i++)
                buffer[i] = document.getElementById(ordenCripto[i]).parentElement.innerHTML;
            console.log("buffer: ", buffer);
            for(let i =0;i<ordenTablas.length;i++)
                ordenTablas[i].parentElement.innerHTML = buffer[i];
        }
        else
            console.log("Vectores diferentes");
    }
    else{
        console.log("No existe almacenamiento local con dicha clave");
    }
    
}

function nombrePagina(){
    let clave = "";
    let ruta = window.location.pathname;
    let pagina = ruta.split("/").pop();
    if(pagina == "dolar.html")
        clave = "ordenCriptoDolar";
        else
            clave = "ordenCriptoPeso";
    console.log("clave: ", clave);
    return clave;
}
document.addEventListener("load",leerLocalStorageOrdenCripto(),false);
