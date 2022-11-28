function function1(valor1, valor2) {
    var suma = valor1 + valor2;
    return suma;
}
function function2(valor1, valor2, valor3) {
    if (valor3 === void 0) { valor3 = "suma"; }
    var resultado;
    if (valor3 === "suma")
        resultado = valor1 + valor2;
    else if (valor3 === "resta")
        resultado = valor1 - valor2;
    else if (valor3 === "multiplicacion")
        resultado = valor1 * valor2;
    else if (valor3 === "division")
        resultado = valor1 / valor2;
    else
        resultado = NaN;
    return resultado;
}
console.log(function1(1, 2));
console.log(function2(1, 2));
console.log(function2(1, 2, "suma"));
console.log(function2(1, 2, "resta"));
console.log(function2(1, 2, "multiplicacion"));
console.log(function2(1, 2, "division"));
