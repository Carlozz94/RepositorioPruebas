
//onclic="mostrar()"
//let boton = document.getElementById("buttoncar");
//boton.addEventListener("click",() => mostrar('hola55'));

   
function mostrar(mensaje){
    alert(mensaje);
}  
//crearAcciones()  onclick="mostrar()" onclick="mostrar()"

function guardarDatosCarrito(id){
    //manipulacion del DOM

    localStorage.id = id;
    //localStorage.precio = precio;
    //localStorage.descripcion = this.descripcion;
    document.getElementById("confirmacion").innerHTML = "";
    document.getElementById("confirmacion").innerHTML = "Agregado a su carrito: "+id; 

}
    
