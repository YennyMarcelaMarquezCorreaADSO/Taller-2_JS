addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 7. 
//Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los $130.000 el descuento será del 15%, de lo contrario no hay descuento

    let consumo = Number(prompt("Ingrese su total de consumo: "))
    

    if (consumo > 130000 ){
        descuento = consumo * (15/100)
        totalcondes  = consumo - descuento

        console.log(`%cFormula ${consumo} * ${15} / ${100}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
        console.log(`Total de descuento: ${descuento}`);

        console.log(`%cFormula ${consumo} - ${descuento}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
        console.log(`Total a pagar con descuento aplicado: ${totalcondes}`);
    }
})