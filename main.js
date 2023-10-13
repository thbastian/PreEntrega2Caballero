const ContenedorTarjetas = document.getElementById("productos-container")

function CrearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
    const NuevosProductos = document.createElement("div");
    NuevosProductos.classList = "tarjeta-producto";
    NuevosProductos.innerHTML = `
    <img src="./img/productos/${producto.id}.jfif">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <button>agregar al carrito</button>
    `
    ContenedorTarjetas.appendChild(NuevosProductos);
    NuevosProductos.getElementsByTagName("button")[0].addEventListener("click",()=> AgregarAlCarrito(producto))
    });
}
CrearTarjetasProductosInicio(TodosLosProductosInicio);
