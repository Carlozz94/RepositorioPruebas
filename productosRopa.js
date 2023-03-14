
//manipuilacion del dom

//vamos a identificar los elelmentos del html y asignarlos a variables
const input = document.getElementById("inputPokemon");
const button = document.getElementById("buscarPokemon");
const pokebola = document.getElementById("pokebola");

//creacion de las funciones

//una funcion para traer la infdrmacion del pokeon
function traerPokemon(){
    fetch(`./dataRopa.json`)
    //la linea anterior es para realizar la peticion a la url, agregarmos la plantilla literal 
    //y esto nos ayudara a ir variando el elemento final de mi ruta (end point)
    
    .then(infoPokemon=> infoPokemon.json())
    //cuanfo la promesa se resuelva, asignamos la info a la variable infoPokemon en un formato json

    .then((data)=>{
        /*
        esta promesa se resuelve con la informacion ya guardada previamente y 
        resta informacion se pasara como un parametro de una funcion adicional llamada crearPokemon
        */
        crearPokemon(data);

    })
}

//una funcion para usar la informaciond el pokemon,
// y ponerla en el html

function crearPokemon(pokemon){
    //aqui usamos la manipulacion del dom (api dom) para crear y poner la info del pokemon en el html
    for(id in pokemon){
        console.log("los id son: "+id);
        //var length = Object.keys(obj).length;

        //console.log(typeof(pokemon));
    
    //crear elementos
    const img = document.createElement("img"); //creamos la etiqueta img
    img.src = pokemon[id].imagen; //usamos la imagen de mi pokemon
    //para usarla como el atributo src de la etiqueta imagen
    //img.height=450;
    img.alt= "imagen bonita de un pokemon"; //agregamos el atributo alt

        //creamos un titulo h3
    const h3 = document.createElement("h3");
    h3.textContent = pokemon[id].id+" - " + pokemon[id].descripcion; //le ponemos el nombre del pokemon

    //creamos un titulo h2 para precio
    const h2 = document.createElement("h2");
    h2.textContent = pokemon[id].precio; //le ponemos el nombre del pokemon

    //obtengo el lugar
    let posicion = document.getElementById("pokebola");
    
    //creacion de cada producto con su imagen, descripcion, precio
    let tarjeta =`<div class="col-sm">
    <div class="card" style="width: 18rem;">
      <img src=${img.src} class="card-img-top" alt="imagenes_ropa">
      <div class="card-body">
        <h5 class="card-title">${h3.textContent}</h5>
        <p class="card-text">${h2.textContent}</p>
        <button class="btn btn-primary" id="buttoncar" onclick="guardarDatosCarrito(${pokemon[id].id})">Agregar al carrito</button>
        
        <br><br>
      </div>
    </div>
  </div>`;
    //< href="#" class="btn btn-primary">Agregar al carrito</a>
    /*posicion.append(img);
    posicion.append(h3);
    posicion.append(h2);
*/
posicion.innerHTML  += tarjeta;
    //const div = document.createElement("div");
    //div.append(img);

   
    }
    
    
    
    
    console.log("El tamaño del objeto es "+Object.keys(pokemon).length);
    
}
traerPokemon();
//crearAcciones();



