/*Seleccionar los objetos del DOM*/

const buttonPlaypause = document.getElementById('ini-pau');
const buttonRestart = document.getElementById('restart');
const timer = document.getElementById('cronos');

/*Definimos variables para cada tiempo en un array*/
let [horas, minutos, segundos] = [0,0,0];
//Definir variable para intervalo de tiempo
let intervaloTime;
//variable estado del cronometro (pausa-play)
let estadoCronos = 'pausado';

//Funcion que actualiza el cronometro

function actcronos(){
    segundos++;
    //Ciclo de un segundo
    if (segundos / 60 == 1){
        //Se reinicia seg
        segundos = 0;
        minutos++;
        if(minutos /60 == 1){
            //Se reinicia min
            minutos = 0;
            horas++;
        }
    }
    /*Funcion que agrega un cero al formato de conteo*/
    const segFormato = asigFormato(segundos);
    const minFormato = asigFormato(minutos);
    const hrsFormato = asigFormato(horas);

    /*Actualizando el DOM despues de cada actualizacion de formato */
    timer.innerText = `${hrsFormato}:${minFormato}:${segFormato}`;
}

function asigFormato(unidTiempo){
    //Retorna un cero al formato de conteo 
    return unidTiempo < 10 ? '0' + unidTiempo : unidTiempo;
}

/*Agregando los eventos de botones*/
buttonPlaypause.addEventListener('click', function(){
    //Verificamos el estado del cronometro
    if(estadoCronos === 'pausado'){
        //Conf el intervalo de tiempo antes de act el cronometro
        //Usamos window con metodo setInterval
        intervaloTime = window.setInterval(actcronos, 1000);
        //Act el icono del boton una vez que inicie
        buttonPlaypause.innerHTML = '<img src="../src/pause-icon.png" alt="pause">';
        //Remplazamos tambien las clases
        buttonPlaypause.classList.remove('iniciar');
        buttonPlaypause.classList.add('pausar');
        //Act el estado del cronometro
        estadoCronos = 'runnig';
    }else{
        //Cuando el cronometro esta corriendo
        window.clearInterval(intervaloTime);
        //Act html de inicio pausa
        buttonPlaypause.innerHTML = '<img src="../src/play-icon.png" alt="play">';
        //Intercambiar clases
        buttonPlaypause.classList.remove('pausar');
        buttonPlaypause.classList.add('iniciar');
        estadoCronos = 'pausado';
    }
});

/*Funcion para reiniciar cronometro*/
buttonRestart.addEventListener('click', function(){
    window.clearInterval(intervaloTime);
    //Sustituye los valores por cero
    horas = 0;
    minutos = 0;
    segundos = 0;
   /*Tomamos nuevamente el elemento cronometro para reiniciarlo*/
   timer.innerText = '00:00:00';
   //reiniciamos los botones de pausa
   buttonPlaypause.innerHTML = '<img src="../src/play-icon.png" alt="play">';
   //Quitamos las clases y las colocamos por defecto
   buttonPlaypause.classList.remove('pausar');
   buttonPlaypause.classList.remove('iniciar');
   //Modifica el estado del cronometro
   estadoCronos = 'pausado';
});