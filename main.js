addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 1. 
// Determinar si un número es positivo y menor que 100.

    let numero = Number(prompt("Ingrese un número: "))

    if (numero > 0 && numero <100){
        console.log("Número positivo menor que 100")
    }else{
        console.log("Número negativo o mayor que 100")
    }
 
})