addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 5. 
//Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos:
// área triangulo= lado * lado

    let lado = Number(prompt("Ingrese el valor del lado: "))

    if (lado > 0 ){

        area = lado * lado

        console.log(`%cFormula ${lado} * ${lado}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
        console.log(`El área del rectángulo es igual a : "${area}"`);

    }else{
        console.log("Lo ingresado no es valido")
    }

})