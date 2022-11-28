function function1(valor1: number, valor2: number) {
  const suma = valor1 + valor2;
  return suma;
}

function function2(valor1: number, valor2: number, valor3: string = "suma") {
  let resultado: number;
  if (valor3 === "suma") resultado = valor1 + valor2;
  else if (valor3 === "resta") resultado = valor1 - valor2;
  else if (valor3 === "multiplicacion") resultado = valor1 * valor2;
  else if (valor3 === "division") resultado = valor1 / valor2;
  else resultado = NaN;
  return resultado;
}

console.log(function1(1, 2));

console.log(function2(1, 2));
console.log(function2(1, 2, "suma"));
console.log(function2(1, 2, "resta"));
console.log(function2(1, 2, "multiplicacion"));
console.log(function2(1, 2, "division"));
