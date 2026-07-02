fetch('http://localhost:4000/api/productos')
.then(res => res.json())
.then(data => {

    let contenedor = document.getElementById('cont');

    contenedor.innerHTML = "";

    data.productos.forEach(producto => {

        contenedor.innerHTML += `
            <div class="publicacion">

                <img class="img-pub" src="assets/${producto.imagen}" alt="">

                <h2>${producto.nombre}</h2>

                <p class="precio">$${producto.precio}</p>

                <div class="bottones">
                    <button>Comprar</button>

                    <button class="agregar"
                        data-id="${producto.id}"
                        data-nombre="${producto.nombre}"
                        data-precio="${producto.precio}"
                        data-imagen="${producto.imagen}">
                        Agregar
                    </button>
                </div>

            </div>
        `;
    });

    // Agregar eventos a todos los botones
    document.querySelectorAll(".agregar").forEach(boton => {

        boton.addEventListener("click", function(){

            const producto = {
                id: this.dataset.id,
                nombre: this.dataset.nombre,
                precio: this.dataset.precio,
                imagen: this.dataset.imagen
            };

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            carrito.push(producto);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert("Producto agregado al carrito");
        });

    });

});