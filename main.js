addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 4. 
//Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
// ¿Qué figura quiere calcular (Escriba T o C)?
// Triangulo = base * altura / 2
// Circulo = PI * radio* radio

    let figura = (prompt("El área de que figura desea calcular Triangulo(T) o Circulo(C): "))

    if (figura ==  "T"){
        base = Number(prompt("Ingrese el valor de la base: "))
        altura = Number(prompt("Ingrese el valor de la altura: "))
        area = (base * altura)/2

        console.log(`%cFormula (${base} * ${altura}) / 2`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
        console.log(`El área del triángulo es igual a : "${area}"`);

    }else if (figura == "C") {
        radio = Number(prompt("Ingrese el valor del radio: "))
        area = Math.PI * Math.pow(radio, 2)

        console.log(`%cFormula ${Math.PI} * ${Math.pow(radio, 2)}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
        console.log(`El área del circulo es igual a : "${area}"`);

    }else{
        console.log("Lo ingresado no es valido")
    }

})