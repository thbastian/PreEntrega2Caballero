const ContenedorTarjetas = document.getElementById("productos-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
function CrearTarjetasProductosInicio(){
    ContenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("TodosLosProductosInicio"));
    console.log(productos);
    if (productos && productos.length > 0){    
    productos.forEach((producto)=> {
    const NuevosProductos = document.createElement("div");
    NuevosProductos.classList = "tarjeta-producto";
    NuevosProductos.innerHTML = `
    <img src="../img/productos/${producto.id}.jfif">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <div>
        <button clas="button1">-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button class="button2">+</button>
    </div>
    `
    ContenedorTarjetas.appendChild(NuevosProductos);
    NuevosProductos
    .getElementsByTagName("button")[1]
    .addEventListener("click", (e) => {
        const cuentaElement = e.target.parentElement.getElementsByTagName("span")
        cuentaElement.innerText = AgregarAlCarrito(producto)
        actualizarTotales();
    });
    
    NuevosProductos
    .getElementsByTagName("button")[0]
    .addEventListener("click", (e) => {
        RestarAlCarrito(producto)
        CrearTarjetasProductosInicio();
        actualizarTotales();
    });
    });
    
}
}
CrearTarjetasProductosInicio();
actualizarTotales();

function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("TodosLosProductosInicio"));
let cantidad = 0;
let precio = 0;
if(productos && productos.length>0){
    productos.forEach(producto => {
        cantidad += producto.cantidad;
        precio += producto.precio * producto.cantidad;
    })
    cantidadElement.innerText = cantidad;
    precioElement.innerText = precio
}
}

