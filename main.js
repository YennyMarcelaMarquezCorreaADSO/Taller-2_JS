addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 9. 
//Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los impares. Numero par es aquel que su residuo igual a cero (num mod !=0)


    let pares, impares

    pares = []
    impares = []

    cantidad = Number(prompt("Ingrese la cantidad de numeros que desea calcular"))
    for (var y of cantidad){
        numero = Number(prompt("Ingrese un número")) 
        if (numero%2 != 0){
            impares.append(numero)
        }else if ( numero%2 == 0){
            pares.append(numero)
        }

    Sumpares = sum(pares)
    proimp = np.prod(impares)

    console.log(`El resultado de la operación de los números pares es: "${sumpares}"`);

    console.log(`El resultado de la operación de los números pares es: "${proImp}"`);
    }


       
    





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