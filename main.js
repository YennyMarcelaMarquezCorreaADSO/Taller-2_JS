addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 3. 
//Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o si son iguales.

    let numero1 = Number(prompt("Ingrese el número1: "))
    let numero2 = Number(prompt("Ingrese el número2: "))
    let numero3 = Number(prompt("Ingrese el número3: "))

    if (numero1 > numero2 && numero1 > numero3){
        console.log("Número 1 es mayor")
    }else if (numero2 > numero1 && numero2 > numero3) {
        console.log("Número 2 es mayor")
    }else{
        console.log("Número 3 es mayor")
    }

    if (numero1 > numero2 && numero1 > numero3){
        console.log("Número 1 es menor")
    }else if (numero2 < numero1 && numero2 < numero3) {
        console.log("Número 2 es menor")
    }else{
        console.log("Número 3 es menor")
    }

    if (numero1 == numero2 ){
        console.log("Número 1 es igual al numero 2")
    }else if (numero1 == numero3) {
        console.log("Número 1 es igual al numero 3")
    }else if(numero2 == numero3){
        console.log("Número 2 es igual al numero 3")
    }
 
})