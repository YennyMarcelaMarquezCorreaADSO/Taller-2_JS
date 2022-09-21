addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 11. 
//Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de computación.

    let estudiante1 = (prompt("Ingrese su nombre completo: "))
    let edad1 = Number(prompt("Ingrese su edad: "))
    let nota1 = Number(prompt("Ingrese su nota:"))

    let estudiante2 = (prompt("Ingrese su nombre completo: "))
    let edad2 = Number(prompt("Ingrese su edad: "))
    let nota2 = Number(prompt("Ingrese su nota:"))

    let estudiante3 = (prompt("Ingrese su nombre completo: "))
    let edad3 = Number(prompt("Ingrese su edad: "))
    let nota3 = Number(prompt("Ingrese su nota:"))

    let estudiante4 = (prompt("Ingrese su nombre completo: "))
    let edad4 = Number(prompt("Ingrese su edad: "))
    let nota4 = Number(prompt("Ingrese su nota:"))

    let estudiante5 = (prompt("Ingrese su nombre completo: "))
    let edad5 = Number(prompt("Ingrese su edad: "))
    let nota5 = Number(prompt("Ingrese su nota:"))
  
    Promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5

    if (pro > 0 ){
        
        console.log(`El promedio de los cinco estudiantes es: "${promedio}"`);

    } else{
        console.log(`Lo ingresado no es valido`);
    }
    

})