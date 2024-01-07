const sucursales = ['urquiza', 'palermo',  'olivos']
const turnosReseva = ['Mañana' , 'Tarde' , 'Noche' ]


//const nombreCliente = []
const cursos =  ['Barista y arte latte ', ' Arte latte avanzado ', 'Tostado de café ', 'Cocktelería con café']

function resumen(_nombreCliente, _sucursalElegida, _turnosReseva) {
    alert("Su reserva se ha realizado a nombre de " + _nombreCliente + " para la Sucursal "+ _sucursalElegida + " en el turno de la "+ _turnosReseva+ ". Te esperamos.")
}



let reserva =prompt("Gracias por elegirno, querés hacer una reserva?")
if (reserva==="si") {      
    let nombreCliente = prompt("Ingresa tu nombre")
    if (nombreCliente !==""){
        alert("El nombre que ingresaste es " + nombreCliente);
        //clientes.push(nombreCliente)
        //console.table(clientes) 

        alert("Nuestras sucursales son: Urquiza, Palermo y Olivos") 
        let sucursalElegida = prompt("En qué sucursal querés reservar?")
        if (sucursales.includes(sucursalElegida.toLocaleLowerCase())) {
            alert("Reservaste en Suc. " + sucursalElegida)
        }
        else{
            alert("No tenemos sucursal en ese barrio, estamos en Palermo, Urquiza y Olivos")  
        }
    
        alert("Las opciones para reservar son por turnos: Mañana, tarde o Noche")
        let horarioElegido = prompt("En qué turno te gustaría venir? " );
        alert("Elegiste el turno " + horarioElegido)
        
        resumen(nombreCliente, sucursalElegida, horarioElegido)
            
        }  
                    
    else {
        alert ("Debés ingresar un nombre para poder realizar la reserva")
    } 
}                       
else{
    let hacerCurso = prompt("Te gustaría formarte como barista?")
    if (hacerCurso== "si") {
        alert("Éstos son los cursos que estamos ofreciendo actualmente: " + cursos)
        for (const curso of cursos) {
            console.log(curso)
        }

        let info = prompt("Si querés que te enviemos info sobre los cursos, dejanos tu mail en este casillero")

        if (info ==="") {
            alert("Será la próxima");
        }
    } 
    else {
        let compra = []
       
        do {
            let cafe = prompt("Tenemos bolsas de café en granos o molido por 1kg, cual te gustaría comprar?")
            compra.push(cafe)
            console.table(compra)
            otraCompra = confirm("Querés sumar otro kg de café?")

        } while (otraCompra)
       
    } 

}





