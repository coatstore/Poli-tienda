fetch('http://localhost:4000/api/productos')
.then(datos => datos.json()).then(data=>{
    console.log(data)
})







let publicacion = document.getElementById('cont')
for(i=0;i<=5;i++){

publicacion.innerHTML += `<div class="publicacion">
            <img class="img-pub" src="assets/med3.jpg" alt="">
            <div class="bottones">
                <button>comprar</button>
            <button id="boton">agregar a carrito</button>
            </div>
         </div>`



}