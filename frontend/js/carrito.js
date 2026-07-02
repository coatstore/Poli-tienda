const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("carrito");

let total = 0;

if(carrito.length === 0){
    contenedor.innerHTML = "<h2>El carrito está vacío</h2>";
}else{

    carrito.forEach(producto => {

        total += Number(producto.precio);

        contenedor.innerHTML += `
            <div class="publicacion">
                <img src="assets/${producto.imagen}" width="120">

                <h3>${producto.nombre}</h3>

                <p>$${producto.precio}</p>
            </div>
        `;
    });

    contenedor.innerHTML += `<h2>Total: $${total}</h2>`;
}