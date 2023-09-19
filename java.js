
function nombreApellido(nombre,apellido){
    nomYape = nombre + apellido;
  }
  nombreApellido(prompt("ingrese su nombre "),prompt(" ingrese su apellido"));


 

if(nomYape != ""){

    alert("hola "+nomYape+ " bienvenido a nuestra tienda virtual. pulsa para continuar.")
    
}else{

    alert("por favor ingrese su nombre para continuar")

}

const TIENDA = prompt("desea comprar algo "+ nomYape+" ?").toLowerCase()
if(TIENDA == "si"){
    
    alert("a contianuacion seleccione el producto de la tienda.")
    
        let productos = parseInt(prompt(
    
            " 1. silla   \n 2. mesa \n 3. cama \n 4. placar"
        ))
        while(productos >5){
            let productos = parseInt(prompt(
    
                " 1. silla   \n 2. mesa \n 3. cama \n 4. placar"
            ))
        }
    
    switch(productos){
        case 1:
            alert("compro una silla, gracias por su compra. el monto es de 1000 pesos. ")
            break;

        case 2: 
            alert("compro una mesa, gracias por su compra. el monto es de 1000 pesos.")
            break;

        case 3:
            alert("compro una cama, gracias por su compra. el monto es de 1000 pesos.")
            break;

        case 4:
            alert("compro un placar, gracias por su compra. el monto es de 1000 pesos.")
            break;

        case 5:
            alert("debe elegir un producto")
            break;
        default:
            alert("no selecciono ningun producto.")
            break;
        
    }
    
}else{
    alert("gracias por visitar nuestra tienda "+nomYape+" hasta pronto.")
}

