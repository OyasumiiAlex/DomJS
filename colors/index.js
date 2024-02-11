//Seleccionar elementos del DOM
const boton = document.getElementById('colorChange');
const titulo = document.getElementById('titleColor');

//Funcion generar color
function generarColor(){
    let digitoshex = '0123456789ABCDEF';
    let color = '#';
    //ciclo para iterar Un color hexa tiene 6 digitos
    for(let i=0; i < 6; i++){
        /*Math floor lo convierte a entero,  es decir, random nos da numeros con decimales*/
        let indiceColores = Math.floor(Math.random() * 16);
        /*Concatenamos color con digitoshex */
        color += digitoshex[indiceColores];
    }
    return color;
}

/*Agregando el evento al titu y creando la funcion*/

boton.addEventListener('click', function(){
    let colorgenerado = generarColor();
    /*Accedemos a title para cambiar su titulo al nuevo color */
    titulo.textContent = colorgenerado;
    /*Accedemos a body para cambiar color de fondo*/
    document.body.style.backgroundColor = colorgenerado;

});