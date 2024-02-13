/*Accedemos a los objetos del DOOM*/
const input = document.getElementById('enterlist');
const button = document.querySelector('button');
const listTarea = document.querySelector('.list-tareas');

//Definimos cuando agregamos una tarea
function agregar(){
    //verificamos si existe un valor 
    if(input.value){
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
        completar.src = '../src/trash-icon.png';
        completar.classList.add('check-icon');

        let eliminar = document.createElement('img');
        eliminar.src= '../src/check-icon.png';
        eliminar.classList.add('trash-icon');

        iconos.append(completar, eliminar);

        //Agregando la estructura de tareas
        listTarea.appendChild(newTarea);

    }else{
        alert('Porfavor ingresa una tarea!');
    }
}

button.addEventListener('click', agregar);
//Definimos cuando se marca una tarea

//Definimos cuando se elimina una tarea