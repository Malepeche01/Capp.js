const sucursales = ['urquiza', 'palermo',  'olivos']
const turnosReseva = ['Mañana' , 'Tarde' , 'Noche' ]

const clientes = []
const cursos =  ['Barista y arte latte ', ' Arte latte avanzado ', 'Tostado de café ', 'Cocktelería con café']

function resumen(_nombreCliente, _sucursalElegida, _turnosReseva) {
    
    alert("Su reserva se ha realizado a nombre de " + _nombreCliente + " para la Sucursal "+ _sucursalElegida + " en el turno de la "+ _turnosReseva+ ". Te esperamos.")
}

const agregarCliente = () => {
    prompt ("Gracias por elegirnos, querés hacer una reserva?"); 
    

    if (agregarCliente === "si") {
        const nombreCliente = prompt ("Ingresá tu nombre");
        if (agregarCliente !==""){
            alert("El nombre que ingresaste es " + nombreCliente);
           
    clientes.push(cliente)

        }
        else{
            alert("Debés ingresar un nombre para poder realizar la reserva")
            }
        
        
    
        alert("Nuestras sucursales son: Urquiza, Palermo y Olivos") 
        const sucursalElegida = prompt("En qué sucursal querés reservar?")
            if (sucursales.includes(sucursalElegida.toLocaleLowerCase())) {
                alert("Reservaste en Suc. " + sucursalElegida)
            }
            else{
                alert("No tenemos sucursal en ese barrio, estamos en Palermo, Urquiza y Olivos")  
            }

        alert("Las opciones para reservar son por turnos: Mañana, tarde o Noche")
        const horarioElegido = prompt("En qué turno te gustaría venir? " );
            alert("Elegiste el turno " + horarioElegido)

        const cliente = {nombreCliente, sucursalElegida, horarioElegido}
        resumen(nombreCliente, sucursalElegida, horarioElegido)

        
        agregarCliente()

        
    }
    else {

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

}

