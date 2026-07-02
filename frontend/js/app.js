fetch('http://localhost:4000/api/productos')
.then(res => res.json())
.then(data => {

    let contenedor = document.getElementById('cont');

    contenedor.innerHTML = "";

    data.productos.forEach(producto => {

        contenedor.innerHTML += `
            <div class="publicacion">

                <img class="img-pub" src="assets/${producto.imagen}" alt="${producto.nombre}">

                <h2>${producto.nombre}</h2>

                <p class="precio">$${producto.precio}</p>

                <div class="bottones">

                    <button class="comprar"
                        data-id="${producto.id}">
                        Comprar
                    </button>

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

    // =========================
    // AGREGAR AL CARRITO
    // =========================
    document.querySelectorAll(".agregar").forEach(boton => {

        boton.addEventListener("click", function () {

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

   
    document.querySelectorAll(".comprar").forEach(boton => {

        boton.addEventListener("click", function () {

            const producto = {
                id: this.dataset.id,
                nombre: this.closest(".publicacion").querySelector("h2").textContent,
                precio: this.closest(".publicacion").querySelector(".precio").textContent.replace("$",""),
                imagen: this.closest(".publicacion").querySelector("img").src.split("/assets/")[1]
            };

            localStorage.setItem("compraDirecta", JSON.stringify([producto]));

            window.location.href = "carrito.html";

        });

    });

});