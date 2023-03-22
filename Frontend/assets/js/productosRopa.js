
//manipuilacion del dom

//vamos a identificar los elelmentos del html y asignarlos a variables


//creacion de las funciones

//una funcion para traer la infdrmacion del pokeon
function traerProductos(){
    fetch(`./dataRopa.json`)
    //la linea anterior es para realizar la peticion a la url, agregarmos la plantilla literal 
    //y esto nos ayudara a ir variando el elemento final de mi ruta (end point)
    
    .then(infoRopa=> infoRopa.json())
    //cuanfo la promesa se resuelva, asignamos la info a la variable infoPokemon en un formato json

    .then((data)=>{
        /*
        esta promesa se resuelve con la informacion ya guardada previamente y 
        resta informacion se pasara como un parametro de una funcion adicional llamada crearPokemon
        */
        crearListadoProductos(data);

    })
}

//una funcion para usar la informaciond de los productos,
// y ponerla en el html

function crearListadoProductos(datos){
    //aqui usamos la manipulacion del dom (api dom) para crear y poner la info del pokemon en el html
    //for para obtener todos los elementos del objetos y colocarlos dentro de elementos html
    for(id in datos){
        console.log("los id son: "+id);
        //var length = Object.keys(obj).length;

        //console.log(typeof(datos));
    
    //crear elemento imagen
    const img = document.createElement("img"); //creamos la etiqueta img
    img.src = datos[id].imagen; //usamos la imagen de mi pokemon
    //para usarla como el atributo src de la etiqueta imagen
    //img.height=450;
    img.alt= "aqui debe ir una imagen del producto"; //agregamos el atributo alt

        //creamos un elemento descripcion
    const h3 = document.createElement("h3");
    h3.textContent = datos[id].id+" - " + datos[id].descripcion; //asignamos la descripcion del producto

    //creamos un elemento para el precio
    const h2 = document.createElement("h2");
    h2.textContent = datos[id].precio; //asignamos precio del producto

    //obtengo el lugar
    let posicion = document.getElementById("productos");
    
    //creacion de cada producto con su imagen, descripcion, precio
    let tarjeta =`<div class="col-sm">
    <div class="card" style="width: 18rem;">
      <img src=${img.src} class="card-img-top" alt="imagenes_ropa">
      <div class="card-body">
        <h5 class="card-title">${h3.textContent}</h5>
        <p class="card-text">${h2.textContent}</p>
        <button class="btn btn-primary" id="buttoncar" onclick="guardarDatosCarrito('${datos[id].id}')">Agregar al carrito</button>
        
        <br><br>
      </div>
    </div>
  </div>`;

    //insertamos el elemento html, lo colocamos en el div de la pagina html.
    posicion.innerHTML  += tarjeta;
    //const div = document.createElement("div");
    //div.append(img);
    }

    console.log("El tamaño del objeto es "+Object.keys(datos).length);
    
}
traerProductos();
//crearAcciones();



