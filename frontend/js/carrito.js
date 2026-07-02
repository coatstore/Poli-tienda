const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("carrito");

let total = 0;

if (carrito.length === 0) {

    contenedor.innerHTML = "<h2 class='carrito-vacio'>Tu carrito está vacío.</h2>";

} else {

    carrito.forEach((producto, index) => {

        total += Number(producto.precio);

        contenedor.innerHTML += `
            <div class="producto-carrito">

                <img src="assets/${producto.imagen}" alt="${producto.nombre}">

                <div class="info-carrito">
                    <h2>${producto.nombre}</h2>
                    <p class="precio">$${producto.precio}</p>
                </div>

                <button class="btn-eliminar" onclick="eliminar(${index})">
                    Eliminar
                </button>

            </div>
        `;
    });

}

document.getElementById("total").textContent = "$" + total;

function eliminar(index) {

    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    location.reload();

}