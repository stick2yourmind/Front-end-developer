var botonReproducirPausa = document.getElementById("botonReproducirPausa");
//Event Listener para reproducir y pausar el video
botonReproducirPausa.addEventListener("click", playPausa, false);

var botonDetener = document.getElementById("botonDetener");
//Event Listener para detener el video
botonDetener.addEventListener("click", detener, false);

var botonAvanzar = document.getElementById("botonAvanzar");
//Event Listener para avanzar seis segundos cada medio segundo que el mouse se mantiene presionado
//mouseleave: En caso de ser detectado no se espera que el mouse sea liberado, detiene el proceso de avance
botonAvanzar.addEventListener("mousedown", avanzar, false);
botonAvanzar.addEventListener("mouseup", avanzar, false);
botonAvanzar.addEventListener("mouseleave", avanzar, false);
//Event Listener para avanzar seis segundos cada click
botonAvanzar.addEventListener("click", ()=>frameSecuencia(6), false);

var botonRetroceder = document.getElementById("botonRetroceder");
//Event Listener para retroceder seis segundos cada medio segundo que el mouse se mantiene presionado
//mouseleave: En caso de ser detectado no se espera que el mouse sea liberado, detiene el proceso de retroceso
botonRetroceder.addEventListener("mousedown", retroceder, false);
botonRetroceder.addEventListener("mouseup", retroceder, false);
botonRetroceder.addEventListener("mouseleave", retroceder, false);
//Event Listener para retroceder seis segundos cada click
botonRetroceder.addEventListener("click", ()=>frameSecuencia(-6), false);

var estadoAvance = 0;
var estadoRetroceso = 0;
var intervalAvanzar;
var intervalRetroceder;
var video = document.getElementById("medio");
video.addEventListener("ended", ()=>botonReproducirPausa.innerHTML = '<svg> <image href="./img/play-circle.svg" /> </svg>', false);



// Función utilizada para reproducir y pausar el video, si el video ya ha sido finalizado debe detener el video para 
// comenzar nuevamente un ciclo de reproducción
function playPausa(){
    if(video.paused){
        video.play();
        botonReproducirPausa.innerHTML = '<svg> <image href="./img/pause-circle.svg" /> </svg>'
    }else{
        video.pause();
        botonReproducirPausa.innerHTML = '<svg> <image href="./img/play-circle.svg" /> </svg>'
    }
}

// Función utilizada para detener el video
function detener(){
    video.pause();
    video.currentTime = 0;
}
// Función utilizada para avanzar en segundos el video
// estadoAvance = 0 = Estado inicial, estadoAvance = 1 = boton previamente presionado
function avanzar(event){
    console.log(event.type);
    switch (estadoAvance){
        case 0: if(event.type!="mouseleave"){intervalAvanzar=setInterval( ()=>{frameSecuencia(6)}, 500); estadoAvance = 1;}
                break;
        case 1: try{clearInterval(intervalAvanzar); estadoAvance = 0;console.log("Avance detenido")}
                catch {console.log("Error al intentar detener el avance")};break;
        default: estadoAvance = 0;
    }        
}

// Función utilizada para retroceder en segundos el video
// estadoRetroceso = 0 = Estado inicial, estadoAvance = 1 = boton previamente presionado
function retroceder(event){
    console.log(event.type);
    switch (estadoRetroceso){
        case 0: if(event.type!="mouseleave"){intervalRetroceder=setInterval( ()=>{frameSecuencia(-6)}, 500); estadoRetroceso = 1;}
                break;
        case 1: try{clearInterval(intervalRetroceder); estadoRetroceso = 0;console.log("Retroceso detenido")}
                catch {console.log("Error al intentar detener el retroceso")};break;
        default: estadoRetroceso = 0;
    }        
}

// Función utilziada para retroceder y avanzar tanto con el evento click, como mouseup y mousedown
function frameSecuencia(tiempo = 5){
    console.log("Corrimiento en segundos: ", tiempo);
    video.currentTime += tiempo;
}