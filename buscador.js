alert("BIENVENIDO AL BUSCADOR DE LA TIENDA")
let nombre = prompt("Ingrese el nombre del producto").toLowerCase();
let precio = Number(prompt("Ingrese el precio"));
let origen = prompt("ingrese el origen");
const datosDeBusqueda = {
    nombre: nombre,
    precio: precio,
    origen: origen
}

const Productos = [
    {
        nombre: "silla",
        precio: 1500,
        origen: "argentina"
    },
    {
        nombre:"sillon",
        precio:4000,
        origen:"peru"  
    },
    {
        nombre:"placar",
        precio:2700,
        origen:"paraguay"  
    },
    {
        nombre:"tv",
        precio:3500,
        origen:"colombia" 
    },
    {
        nombre:"cama",
        precio:6400,
        origen:"bolivia" 
    },
    {
        nombre:"horno",
        precio:5400,
        origen:"brasil"  
    }
]


function mostrarProductos(Productos){
    Productos.forEach(Productos => alert(Productos.nombre + '-' + Productos.precio + '-' + Productos.origen));
}


function filtrarProductos(){
    const Resultado = Productos.filter(filtrarNombre).filter(filtrarPrecio).filter(filtrarOrigen)
    if (Resultado.length>0){
        mostrarProductos(Resultado);
    }else {
        alert("sin resultados");
    }
}

function filtrarNombre(Productos){
    if(datosDeBusqueda.nombre){
        return Productos.nombre === datosDeBusqueda.nombre
    }
    return Productos;

}


function filtrarPrecio(Productos){
    if(datosDeBusqueda.precio){
        return Productos.precio === datosDeBusqueda.precio
    }
    return Productos;

}

function filtrarOrigen(Productos){
    if(datosDeBusqueda.origen){
        return Productos.origen === datosDeBusqueda.origen
    }
    return Productos;

}
filtrarProductos();