function AgregarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("TodosLosProductosInicio"));
  console.log(memoria);
  let contadorCarrito = 0;
  if (!memoria) {
    const NuevoProducto = NuevoProductoParaMemoria(producto);
    localStorage.setItem("TodosLosProductosInicio",JSON.stringify([NuevoProducto]));
    contadorCarrito = 1;
  } else {
    const IndiceProducto = memoria.findIndex(TodosLosProductosInicio => TodosLosProductosInicio.id === producto.id);
    console.log(IndiceProducto);
    const nuevaMemoria = memoria;
    if (IndiceProducto === -1){
      nuevaMemoria.push(NuevoProductoParaMemoria(producto));
      contadorCarrito = 1;
    } else {
      nuevaMemoria[IndiceProducto].cantidad ++;
      contadorCarrito = nuevaMemoria[IndiceProducto].cantidad;
    }
    localStorage.setItem("TodosLosProductosInicio",JSON.stringify(nuevaMemoria));
    return contadorCarrito;
  }
}
function RestarAlCarrito(producto){
  const memoria = JSON.parse(localStorage.getItem("TodosLosProductosInicio"));
  const IndiceProducto = memoria.findIndex(TodosLosProductosInicio => TodosLosProductosInicio.id === producto.id);
  if(memoria[IndiceProducto].cantidad === 1){
    memoria.splice(IndiceProducto,1);
    localStorage.setItem("TodosLosProductosInicio",JSON.stringify(memoria));
  }else{
    memoria[IndiceProducto].cantidad--;
  }
  localStorage.setItem("TodosLosProductosInicio",JSON.stringify(memoria));
}

function NuevoProductoParaMemoria(producto) {
  const NuevoProducto = producto;
  NuevoProducto.cantidad = 1;
  return NuevoProducto;
}
const CarritoDeCompras = document.getElementById("cantidad")

function ActualizarCarrito(){
    const Memoria = JSON.parse(localStorage.getItem("TodosLosProductosInicio"));
    const contadorCarrito = Memoria.reduce((a,b) => a+b.cantidad,0);
    CarritoDeCompras.innerText = contadorCarrito;
  }
  ActualizarCarrito();
