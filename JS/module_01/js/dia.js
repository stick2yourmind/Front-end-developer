const menu = ['gnocchi', 'lasagna', 'HamburguesaVegan', 
              'BrochetaDePolloConFritas', 'CrocantesOrganico', 
              'EnsaladaOrganicaDePalta', 'PizzaPrimaveraOrganica' ]

const fotoMenu = {
gnocchi: "./img/categoria/pasta/gnocchi.jpeg",
penne:   "./img/categoria/pasta/penne.jpeg",
spaghetti: "./img/categoria/pasta/spaghetti.jpg",
lasagna: "./img/categoria/pasta/lasagna.jpg",
Chapatta: "./img/categoria/pan/Chapatta.jpg",
FocacciaTomateAlbahaca: "./img/categoria/pan/FocacciaTomateAlbahaca.jpg",
FocacciaTomateCebolla: "./img/categoria/pan/FocacciaTomateCebolla.jpg",
Grissini: "./img/categoria/pan/Grissini.jpg",
CheesecakeVegano: "./img/categoria/vegano/CheesecakeVegano.jpg",
Frappes: "./img/categoria/vegano/Frappes.jpg",
GalletitasDeAlmendraAvenaPistachoVegan: "./img/categoria/vegano/GalletitasDeAlmendraAvenaPistachoVegan.jpg",
HamburguesaVegan: "./img/categoria/vegano/HamburguesaVegan.jpg",
BrochetaDePolloConFritas: "./img/categoria/organico/BrochetaDePolloConFritas.jpg",
CrocantesOrganico: "./img/categoria/organico/CrocantesOrganico.jpg",
EnsaladaOrganicaDePalta: "./img/categoria/organico/EmpanaDePolloOrganica.jpg",
PizzaPrimaveraOrganica: "./img/categoria/organico/PizzaPrimaveraOrganica.jpg"
}

const tituloMenu = {
gnocchi: '# Gnocchi',
penne:   '# Penne',
spaghetti: '# Spaguetti',
lasagna: '# Lasagna',
Chapatta: '# Chapatta',
FocacciaTomateAlbahaca: '# Focaccia con tomate y albahaca',
FocacciaTomateCebolla: '# Focaccia con tomate y cebolla',
Grissini: '# Grissini',
CheesecakeVegano: '# Chessecake vegano',
Frappes: '# Frappes de frutas',
GalletitasDeAlmendraAvenaPistachoVegan: '# Galletitas de almendras, avena y pistacho',
HamburguesaVegan: '# Hamburguesa vegana',
BrochetaDePolloConFritas: '# Brocheta de pollo vegano con papas fritas',
CrocantesOrganico: '# Crocantes de pollo',
EnsaladaOrganicaDePalta: '# Ensalada orgánica de palta',
PizzaPrimaveraOrganica: '# Pizza primavera'
}

const ingredientes = {
gnocchi: ['Papa', 'Harina', 'Huevo', 'Nuez moscada', 'Queso rallado', 'Nuez', 'Espinaca'],
penne:   ['Harina', 'Huevo', 'Tomate', 'Albahaca'],
spaghetti: ['Harina', 'Huevo','Albahaca','Queso rallado', 'Tomate', 'Camaron'],
lasagna: ['Harina', 'Huevo','Albahaca','Queso rallado', 'Tomate', 'Jamon cocido'],
Chapatta: ['Harina', 'Levadura', 'Leche', 'Aceite de oliva'],
FocacciaTomateAlbahaca: ['Harina', 'Levadura', 'Aceite de oliva', 'Tomate', 'Albahaca'],
FocacciaTomateCebolla: ['Harina', 'Levadura', 'Aceite de oliva', 'Tomate', 'Cebolla'],
Grissini: ['Harina', 'Levadura', 'Aceite de oliva'],
CheesecakeVegano: ['Harina', 'Yoghurt vegano' ,'Leche de soja', 'Frambuesa', 'Jugo de limón', 'Manteca vegana'],
Frappes: ['Fruta a elección', 'Hielo'],
GalletitasDeAlmendraAvenaPistachoVegan: ['Harina', 'Almendra', 'Avena', 'Pistacho', 'Manteca vegana'],
HamburguesaVegan: ['Harina', 'Leche de soja', 'Porotos', 'Hierbas', 'Lechuga', 'Tomate', 'Batata', 'Semilla de semola', 'Pepino'],
BrochetaDePolloConFritas: ['Pollo orgánico', 'Papas fritas', 'Tomate', 'Lechuga', 'Hierbas'],
CrocantesOrganico: ['Pollo orgánico', 'Lechuga', 'Hierbas'],
EnsaladaOrganicaDePalta: ['Palta', 'Albahaca', 'Brócoli', 'Espárrago'],
PizzaPrimaveraOrganica: ['Harina', 'Queso organico', 'Levadura', 'Tomate', 'Morron', 'Choclo']
}   

// Devuelve la foto del menu
function fotoMenuSeleccionado(indiceMenuSeleccionado){
    console.log('menu[indiceMenuSeleccionado]:', menu[indiceMenuSeleccionado]);
    console.log('Foto: ', fotoMenu[menu[indiceMenuSeleccionado]]);
    return fotoMenu[menu[indiceMenuSeleccionado]];
}

// Devuelve el titulo del menu
function tituloMenuSeleccionado(indiceMenuSeleccionado){
    console.log('Titulo: ', tituloMenu[menu[indiceMenuSeleccionado]]);
    return tituloMenu[menu[indiceMenuSeleccionado]];
}

// Devuelve los ingredientes del menu
function ingredientesMenuSeleccionado(indiceMenuSeleccionado){
    console.log('Ingredientes: ', ingredientes[menu[indiceMenuSeleccionado]]);
    return ingredientes[menu[indiceMenuSeleccionado]];
}

// Imprime foto en el id fotoAleatorio
function imprimirFoto(idFoto, indiceMenuSeleccionado){
    var FotoAImprimir = fotoMenuSeleccionado(indiceMenuSeleccionado);
    var Foto = document.getElementById(idFoto);
    Foto.setAttribute('style','background-image: url(' + FotoAImprimir + ')');
}
// Imprime titulo en el id tituloAleatorio
function imprimirTitulo(idTitulo, indiceMenuSeleccionado){
    var tituloAImprimir = tituloMenuSeleccionado(indiceMenuSeleccionado);
    var titulo = document.getElementById(idTitulo);
    titulo.innerHTML = tituloAImprimir;
}

// Imprime ingredientes en el id listaIngredientesAleatorio
function imprimirIngredientes(idLista, indiceMenuSeleccionado){
    var ingredientesAImprimir = ingredientesMenuSeleccionado(indiceMenuSeleccionado);
    var lista = document.getElementById(idLista);
    var i = 0;
    do{
        var listaItem = document.createElement('li');
        listaItem.innerHTML = ingredientesAImprimir[i];
        lista.appendChild(listaItem);
    i++;
    }while(i<ingredientesAImprimir.length);

}

var fecha = new Date();
// Obtiene el dia representado en un entero. 0-->Domingo 6-->Sabado
indiceMenuSeleccionado = fecha.getDay();
imprimirFoto('fotoDia', indiceMenuSeleccionado);
imprimirTitulo('tituloDia', indiceMenuSeleccionado);
imprimirIngredientes('listaIngredientesDia', indiceMenuSeleccionado);