in_reserva = prompt("Gracias por elegirnos, querés hacer una reserva?");
if (in_reserva == "si") {
    let sucursal = prompt("En qué sucursal querés reservar?")
    
    if (sucursal.toLowerCase() == "palermo"){
        alert("Reservaste en Suc. Palermo");
    }
        
    else if(sucursal.toLowerCase() == "urquiza"){
        alert("Reservaste en Suc. Urquiza");
    }
        
    else if(sucursal.toLowerCase() == "olivos"){

        alert("Reservaste en Suc. Olivos"); 
    }
        
    else{
        alert("No tenemos sucursal en ese barrio, estamos en Palermo, Urquiza y Olivos")
    }

    let nombre = prompt("Ingrese su nombre y apellido");
    if (nombre !=""){
        alert("El nombre que ingresaste es " + nombre )
    }
    else{
        alert("Debe ingresar un nombre para poder realizar la reserva")
    }    
}
else {
    alert("Morite entonces");
}   





