addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 10. 
//Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de: Iva, Subtotal y Total de la compra de los artículos.


    let producto1 = Number(prompt("Ingrese el valor del produto 1: "))
    let producto2 = Number(prompt("Ingrese el valor del  produto 2: "))
    let producto3 = Number(prompt("Ingrese el valor del produto 3:"))
    let producto4 = Number(prompt("Ingrese el valor del produto 4:"))
    let producto5 = Number(prompt("Ingrese el valor del produto 5:"))

    sumaprecios = producto1 + producto2 + producto3 + producto4 + producto5

    if (sumaprecios > 0 ){
        subtotal = producto1 + producto2 + producto3 + producto4 + producto5

        console.log(` Sueldo de trabajador de planta según la cantidad de horas introducidas: ${subtotal}`);

        IVA = sumaprecios*19/100
        console.log(` Sueldo de trabajador de planta según la cantidad de horas introducidas: ${IVA}`);

        Totalcompra = sumaprecios + IVA
        console.log(` Sueldo de trabajador de planta según la cantidad de horas introducidas: ${Totalcompra}`);
    } else{
        console.log(`Lo ingresado no es valido`);
    }
    

})