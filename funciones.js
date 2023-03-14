
//onclic="mostrar()"
let boton = document.getElementById("buttoncar");
boton.addEventListener("click",() => mostrar('hola55'));

   
function mostrar(mensaje){
    alert(mensaje);
}  
//crearAcciones()  onclick="mostrar()" onclick="mostrar()"

function guardarDatosCarrito(id){
    //manipulacion del DOM
    document.getElementById("confirmacion").innerHTML = "Elemento Guardado Correctament: "+id; 
    
    /*
    function addToCartClicked(event) {

        const button = event.target;
        const item = button.parentNode.parentNode; // Obtén el elemento padre del botón
        const itemTitle = item.querySelector('p').textContent;
        const itemPrice = item.querySelector('#CardPrice').textContent;
        const itemImage = item.querySelector('img').src;
       
    
      
        itemsToCart.addProductToCart(itemTitle, itemPrice, itemImage, sizeItem);
        itemsToCart.updateCartItems();
      
      */
        /* addItemToCart(itemTitle, itemPrice, itemImage); */
        /*const button = event.target;
        const item = button.parentNode.parentNode; // Obtén el elemento padre del botón
        const itemTitle = item.querySelector('p').textContent;
        document.getElementById("confirmacion").innerHTML = "Datos Guardados Correctament :D "+id; 
        */
    }
    
