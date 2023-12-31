const sucursales = ['urquiza', 'palermo',  'olivos']
const turnosReseva = ['Mañana' , 'Tarde' , 'Noche' ]

const cursos =  ['Barista y arte latte ', ' Arte latte avanzado ', 'Tostado de café ', 'Cocktelería con café']

function resumen(_nombreCliente, _sucursalElegida, _turnosReseva) {
    
    alert("Su reserva se ha realizado a nombre de " + _nombreCliente + " para la Sucursal "+ _sucursalElegida + " en el turno de la "+ _turnosReseva+ ". Te esperamos.")
    
}

let inReserva = prompt("Gracias por elegirnos, querés hacer una reserva?"); 
if (inReserva === "si") {
    let nombreCliente = prompt ("Ingresá tu nombre");
    if (nombreCliente !==""){
        alert("El nombre que ingresaste es " + nombreCliente);
        const clientes = ['Pablo', nombreCliente,]
        clientes.push [nombreCliente] // solo suma el ultimo ingresado
        
        console.log(clientes) //???????
        
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
    else{
        alert("Debés ingresar un nombre para poder realizar la reserva")
    }
}
else{

    let hacerCurso = prompt("Te gustaría formarte como barista?");
    if (hacerCurso== "si") {
        alert("Éstos son los cursos que estamos ofreciendo actualmente: " + cursos)
    }
    for (const curso of cursos) {
        console.log(curso);
    }

    let info = prompt("Si querés que te enviemos info sobre los cursos, dejanos tu mail en este casillero")

    if (info ==="" ||info ==="null") {
        alert("Será la próxima");
    }
    
    else {
        alert("Te estaremos enviando la info enseguida");
    }        
    

} 

   