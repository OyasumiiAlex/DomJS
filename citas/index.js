//Obtenemos elementos 
let boton = document.getElementById("changequo");
let textCita = document.getElementById("cita");
let textAutor = document.getElementById("autor");

/*Generar un entero aleatorio*/
function geneAlea(min, max){
    //Sin incluir maximo en los valores posibles
    return Math.floor(Math.random() * (max - min) + min);
}

/*Funcion para cambiar la cita*/
function nextQuo(){
    //Obtener un indice aleatorio (indice 0, y el tamaño del arreglo)
    let indiceAlea = geneAlea(0, citas.length);
    /*Act elementos del DOM [Remplazamos en cita,
    en el indece aleatorio, remplazamos solamente texto que esta dentro del objeto]*/ 
    textCita.innerText = `"${citas[indiceAlea].texto}"`
    textAutor.innerText = citas[indiceAlea].autor;
}

nextQuo();
