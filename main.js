addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 12 
//Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en caso contrario indicar con un mensaje que la operación no es posible realizarla.

    let numero1 = Number(prompt("Ingrese el numero 1: "))
    let numero2 = Number(prompt("Ingrese el numero 2: "))
  

    if (numero1 > numero2){
        
        resta = numero1-numero2
        console.log(`Total resta: "${promedio}"`);

    } else{
        console.log(`La resta no se puede realizaar`);
    }
    

})