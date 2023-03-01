var nombre,parcial,final,promedio;
nombre = prompt("ingrese el nombre:");
parcial = parseFloat(prompt("ingresar nota parcial:"));
final = parseFloat(prompt("ingresar nota final:"));
promedio = (parcial + final)/2;
if(promedio >= 7){
    alert(nombre+" tu promedio es de "+promedio+" estas APROBADO");
}else{
    alert(nombre+" tu promedio es de "+promedio+" estas REPROBADO");
}
