addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 8. 
//En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.

    let Trabaja = (prompt("Ingrese en que trabaja planta (P) o administrativo (A): "))
    

    if (Trabaja == "P" ){
        horas = Number(prompt("¿Cantidad de horas trabajadas al día?: "))
        pagahora = 20000
        sueldo = horas * pagahora

        console.log(`%cFormula ${horas} * ${pagahora} `, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(` Sueldo de trabajador de planta según la cantidad de horas introducidas: ${sueldo}`);

    } else if(Trabaja == "A" ){
        horas = Number(prompt("¿Cantidad de horas trabajadas al día?"))
        pagahora = 10000
        sueldo = horas * pagahora

        console.log(`%cFormula ${horas} * ${pagahora} `, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Sueldo de trabajador Administrativo según la cantidad de horas introducidas: ${sueldo}`);

    }
})