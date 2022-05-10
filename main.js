/* una calculadora que sume, reste, multiplique y divida*/

const sumar = (num1,num2)=>{
    return parseInt(num1)+parseInt(num2)
}

const restar = (num1,num2)=>{
    return parseInt(num1)-parseInt(num2)
}

const dividir = (num1,num2)=>{
    return parseInt(num1)/parseInt(num2)
}

const producto = (num1,num2)=>{
    return parseInt(num1)*parseInt(num2)
}

alert("Que operacion deseas realizar")
let operacion =prompt("1: suma 2: resta 3: dividir 4: producto")

if(operacion==1){
    let num1 = prompt("Primer numero")
    let num2 = prompt("Segundo numero")
    let resultado = sumar(num1,num2)
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion==2){
    let num1 = prompt("Primer numero")
    let num2 = prompt("Segundo numero")
    let resultado = restar(num1,num2)
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion==3){
    let num1 = prompt("Primer numero")
    let num2 = prompt("Segundo numero")
    let resultado = dividir(num1,num2)
    alert(`Tu resultado es ${resultado}`)
}
else if(operacion==4){
    let num1 = prompt("Primer numero")
    let num2 = prompt("Segundo numero")
    let resultado = producto(num1,num2)
    alert(`Tu resultado es ${resultado}`)
}












/* Se rompio el sistema de asistencias, deberas ayudar creando uno para los 30 dias proximos,

Crear mini-sistema que nos permita registrar los alumnos que esten presentes (P) y ausentes (A)
pasados los 30 dias mostrar la situacion final de todos (P Y A)
se ´puede tener un maximo de 10 de ausencias por semestre, si se tienen mas aclarar que esta reprobrado


let cantidad = prompt("Cuantos alumnos son?")
let alumnosTotales=[];
for(let i = 0; i < cantidad; i++){
    alumnosTotales[i]=[prompt("Nombre del alumno " + (i+1)),0]
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre)
    if (presencia == "p"){
        alumnosTotales[p][1]++
    }
}

for(i = 0; i < 3; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
}

for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _____________Presentes: ${alumnosTotales[alumno][1]}<br>
    _____________Ausentes: ${3 -alumnosTotales[alumno][1]}<br>`

    if(3 - alumnosTotales[alumno][1] >= 1){
       resultado+= "Reprobado<br>"
    }else{
       resultado+= "Prepara el ocote"
    }
    document.write(resultado)
}
*/







/* Un joven logro ganar el primer premio de la loteria... hace una fiesta
solo se admiten mayores de 18 años... La primer persona que entra despues
de las 2 AM, no paga.

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?")
    if(edad>=18){
        if(time>=2 && time<=7 && free==false){
            alert(`Podes pasar son las ${time} sos el primero, invita la casa`)
            free=true
        }else{
            alert(`Pasa pero paga son las ${time}`)
        }

    }else {
        alert("No podes pasar")
    }
}
validarCliente(23)
validarCliente(2)
validarCliente(4)
*/
