/*Obtener elementos del HTML*/
let inputRojo = document.getElementById('red');
let inputVerde = document.getElementById('green');
let inputAzul = document.getElementById('blue');

const textoR = document.getElementById('text-red');
const textoG = document.getElementById('text-green');
const textoB = document.getElementById('text-blue');

/*Variables (tomamos los valores de los elementos de input)*/
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

/*usamos las variables para actualizar el texto*/
textoR.textContent = rojo;
textoG.textContent = verde;
textoB.textContent = azul;

/*Funcion para actualizar el color*/
function actColor(rojo, verde, azul){
    /*Plantillas literales(``): Reemplazan valores de variables en cadenas de caracteres*/
    const colorRGB = `rgb(${rojo},${verde},${azul})`;
    /*Actualizar el color de fondo (body)*/
    document.body.style.backgroundColor = colorRGB;
}
//EventListener para RED [Hacemos una funcion flecha con evento]
inputRojo.addEventListener('input', (e) => {
    rojo = e.target.value;
    textoR.textContent = rojo;
    /*Llamamos la funcion para actualizar los colores y pasamos los parametros globales*/
    actColor(rojo, inputVerde.value, inputAzul.value);
});

//Evento para GREEN
inputVerde.addEventListener('input', (e) => {
    verde = e.target.value;
    textoG.textContent = verde;
    /*Llamamos la funcion para actualizar los colores y pasamos los parametros globales*/
    actColor(inputRojo.value, verde, inputAzul.value);
});

//Evento para BLUE
inputAzul.addEventListener('input', (e) => {
    azul = e.target.value;
    textoB.textContent = azul;
    /*Llamamos la funcion para actualizar los colores y pasamos los parametros globales*/
    actColor(inputRojo.value, inputVerde.value, azul);
});
