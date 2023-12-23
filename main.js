const sucursales = ['Urquiza' , ' Palermo' , ' y Olivos' ]
const turnosReseva = ['Mañana' , 'Tarde' , ' y Noche' ]


let in_reserva = prompt("Gracias por elegirnos, querés hacer una reserva?"); 
if (in_reserva == "si") {
    let sucursal = prompt("En qué sucursal querés reservar? Estamos en " + sucursales);
    
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

    let nombre = prompt("Ingresá tu nombre y apellido");
    if (nombre !=""){
        alert("El nombre que ingresaste es " + nombre ) 

        let horario =prompt("En qué momento del dia te gustaría venir? Abrimos de 10 a 20hs. " + "Las opciones de reserva son: " +turnosReseva );
        /*if (horario == toLowerCase("mañana") || horario == toLowerCase("tarde") || horario == toLowerCase("noche"))..else...{*/
            alert("Reservaremos para el turno de la " + horario + " a nombre de " + nombre)
           
        }
    else{
            alert("Debés ingresar un nombre para poder realizar la reserva")
    } 

    

    

    /*let cantidadClientes =parseInt(promt("Cuantos lugares te reservamos?"))
    alert("Te reservaremos " + cantidadClientes)*/
    

}
else {
    
    const cursos =  ['1. Barista y arte latte ', ' 2. Arte latte avanzado ',' 3. Tostado de café ',' 4. Cocktelería con café ']
    let hacerCurso = prompt("Te gustaría formarte como barista?");
    if (hacerCurso == "si") 
        alert("Estos son los cursos que estamos ofreciendo actualmente: " + cursos)
    for (const curso of cursos){
        console.log(curso)
    }
    let info = prompt("Si querés que te enviemos info sobre los cursos, dejanos tu mail en este casillero")
    console.log(info);
    if (info =="" ||info =="null") {
        alert("Será la próxima")
    }
    
    else {
        alert("Te estaremos enviando la info enseguida")
    }        
}  






