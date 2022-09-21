addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 2. 
// Calcule el mayor de tres números, permitiendo leer 3 valores diferentes

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
 
})