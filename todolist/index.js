/*Accedemos a los objetos del DOOM*/
const input = document.getElementById('enterlist');
const button = document.querySelector('button');
const listTarea = document.querySelector('.list-tareas');

//Definimos cuando agregamos una tarea
function agregar() {
    //verificamos si existe un valor 
    if (input.value) {
        //Creamos tarea en memoria (no se encuentra en el dom)
        let newTarea = document.createElement('div');
        newTarea.classList.add('tarea');

        //Almacenamos el texto de input para despues pasarlo a p
        let txt = document.createElement('p');
        txt.innerText = input.value;
        //Metodo para agregar al final un nodo nuevo
        newTarea.appendChild(txt);

        //Creando los contenedores de iconos para los div de tareas
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        newTarea.appendChild(iconos);

        //Creando los iconos 
        let completar = document.createElement('img');
        completar.src = '../src/check-icon.png';
        completar.classList.add('check-icon');
        //Agregando el listener para el evento de boton check
        completar.addEventListener('click', checkTask);

        let eliminar = document.createElement('img');
        eliminar.src = '../src/trash-icon.png';
        eliminar.classList.add('trash-icon');
        //Agregando el listener para el evento de boton trash
        eliminar.addEventListener('click', rmTask);

        iconos.append(completar, eliminar);

        //Agregando la estructura de tareas
        listTarea.appendChild(newTarea);

    } else {
        alert('Porfavor ingresa una tarea!');
    }
}
//Definimos cuando se marca una tarea (recibe un objeto de evento e)
function checkTask(e) {
    /*target: donde ocurrio el envento (icono) para que se modifique el container*/
    let tarea = e.target.parentNode.parentNode;
    /*Metodo que permite alternar una clase: Si ya tiene la clase se elimina, si no la agrega*/
    tarea.classList.toggle('completada');
}
//Definimos cuando se elimina una tarea
function rmTask(e) {
    /*Target*/
    let tarea = e.target.parentNode.parentNode;
    //Quitamos la tarea del DOM
    tarea.remove();
}
//Eventos de boton y enter
button.addEventListener('click', agregar);
input.addEventListener('keydown', (e) => {
    //Funcion para verificar cual fue la tecla presionada
    if (e.key === 'Enter') {
        //Llamamos a la funcion agregar nueva tarea
        agregar();
    }
});