function nombreApellido(nombre,apellido){
    nombreYapellidoIngresado = nombre + " " + apellido;
  }
  nombreApellido(prompt("Ingrese su nombre "),
                prompt(" Ingrese su apellido"));
  
  if ( nombreYapellidoIngresado != " ") 
  {
    alert(
      "hola " +
      nombreYapellidoIngresado +
        " Bienvenido a nuestra tienda virtual. Pulsa para continuar."
    );
  } else {
    alert("Por favor ingrese su nombre para continuar");
  }
  
  function Producto(nombre,origen,precio){
    this.nombre = nombre;
    this.origen = origen;
    this.precio = precio;
    this.compra = function(){
      alert("Compro una" + " " + this.nombre + " " + this.precio + " " + "pesos")
    }
  }
  const Producto1 = new Producto("silla", "China", 15000);
  const Producto2 = new Producto("mesa", "China", 20000);
  const Producto3 = new Producto("cama", "EE.UU", 35000);
  const Producto4 = new Producto("placar", "Brasil", 25000);
  
  
  
  
  const TIENDA = prompt("Desea comprar algo " + nombreYapellidoIngresado + " ?").toLowerCase();
  
  if (TIENDA == "si") {
    alert("A continuacion seleccione el producto de la tienda.");
    let productos = (
    prompt("1. silla \n 2. mesa \n 3. cama \n 4. placar")).toLowerCase();
      switch (productos) {
        case "silla":
          Producto1.compra();
            break;
        case "mesa":
          Producto2.compra();
            break;
        case "cama":
          Producto3.compra();
            break;
        case "placar": 
          Producto4.compra();
            break;
        default:
          alert("No selecciono ningun producto.");
            break;
      }
    } else { alert("Gracias por visitar nuestra tienda " + nombreYapellidoIngresado + " hasta pronto.");
          }