addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 13
//En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendode su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
// Los descuentos son los siguientes:
// Tipo A 10% de descuento
// Tipo B 15% de descuento
// Tipo C 20% de descuento

    let membresia = (prompt("Ingrese a que tipo de membresia pertenece(A) (B) O (C): "))

    if (membresia == "A"){
        total = Number(prompt("Ingrese el total consumido"))
        descu= total * 10/100
        descuento = total - descu

        console.log(`Total con descuento realizado: "${descuento}"`);

    }else if (membresia == "B"){
        total = Number(prompt("Ingrese el total consumido"))
        descu= total * 15/100
        descuento = total - descu

        console.log(`Total con descuento realizado: "${descuento}"`);

    }else if (membresia == "C"){
        total = Number(prompt("Ingrese el total consumido"))
        descu= total * 20/100
        descuento = total - descu

        console.log(`Total con descuento realizado: "${descuento}"`);
    }
})