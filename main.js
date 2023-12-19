let reservar = true

do{
    in_reserva = prompt("Gracias por elegirnos, querés hacer una reserva?");
    if(in_reserva == "si") {
        let sucursal = prompt("En qué sucursal querés reservar?")
        
        if (sucursal == "Palermo"){
            alert("Reservaste en Suc. Palermo");}
            
        else if(sucursal == "Urquiza"){
            alert("Reservaste en Suc. Urquiza");}
            
         else if(sucursal == "Olivos"){
            alert("Reservaste en Suc. Olivos"); }
            
         else{
            alert("No tenemos sucursal en ese barrio, estamos en Palermo, Urquiza y Olivos")
            break}
        }
              
let nombre = prompt("Ingrese su nombre y apellido");

if (nombre !=""){
    alert("El nombre que ingresaste es " + nombre )
    reservar = false
}
else{
    alert("Debe ingresar un nombre para poder realizar la reserva")
    break
}

     

}
while(reservar)        
 




