addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 6. 
//Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.

    let Temperatura = Number(prompt("Ingrese la temperatura: "))
    let Presion= Number(prompt("Ingrese la presión: "))

    if (Temperatura > 100 ){
        console.log(`ALARMA`);

    }else{
        console.log("Normal")
    }

    if (Presion > 200 ){
        console.log("ALARMA");

    }else{
        console.log("Normal")
    }
})