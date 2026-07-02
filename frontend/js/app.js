fetch('http://localhost:4000/api/productos')
.then(res => res.json())
.then(data => {

    console.log(data);

    let contenedor = document.getElementById('cont');

    contenedor.innerHTML = ""; // limpia antes

    data.productos.forEach(producto => {

        contenedor.innerHTML += `
            <div class="publicacion">

                <img class="img-pub" src="assets/${producto.imagen}" alt="">

                <h2>${producto.nombre}</h2>

                <p class="precio">$${producto.precio ?? "0.00"}</p>

                <div class="bottones">
                    <button>Comprar</button>
                    <button>Agregar</button>
                </div>

            </div>
        `;
    });

});



