
//onclic="mostrar()"
let boton = document.getElementById("buttoncar");
boton.addEventListener("click",() => mostrar('hola55'));

   
function mostrar(mensaje){
    alert(mensaje);
}  
//crearAcciones()  onclick="mostrar()" onclick="mostrar()"

function guardarDatosCarrito(id){
    //manipulacion del DOM
    document.getElementById("confirmacion").innerHTML = "Datos Guardados Correctament :D "+id; 
}