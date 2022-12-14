// EJERCICIO 5

// 1.
console.log("\nTarea 1");
console.log("=======");
(() => {
  const TEXT = "CONSTANTE";
  let val1 = 1;
  if (val1 == 1) {
    let val1 = 0;
    let val2 = 1;

    console.log(val2 > val1 ? "true" : "false");
  }

  if (val1 == 1) {
    console.log(TEXT);
  }
})();

// 2.
console.log("\nTarea 2");
console.log("=======");
(() => {
  interface casa {
    area: number;
    ambientes: number;
    colorParedes: string;
  }

  let casa1: casa = {
    area: 200,
    ambientes: 4,
    colorParedes: "crema",
  };

  console.log(casa1);
  console.log(
    "El area promedio por ambiente es: " + casa1.area / casa1.ambientes
  );
})();

// 3.
console.log("\nTarea 3");
console.log("=======");
(() => {
  /*
        function calculoSumaCuadadro(x, y) {
            const resultado = (x + y)^2;
            return 'El resultado es ' + resultado;
        }
    */
  let calculoSumaCuadadro = (x: number, y: number): string =>
    `El resultado de (${x} + ${y})^2 es ${Math.pow(x + y, 2)}`;
  console.log(calculoSumaCuadadro(2, 3));
})();

// 4.
console.log("\nTarea 4");
console.log("=======");
(() => {
  let identificar = (
    edad: number,
    nombre: string,
    apellido?: string,
    esPeruano: boolean = true
  ) => {
    let nombreCompleto;
    if (apellido) nombreCompleto = nombre + " " + apellido;
    else nombreCompleto = nombre;
    console.log(
      `El nombre del usuario es ${nombreCompleto} con edad de ${edad} y ${
        esPeruano ? "con" : "sin"
      } nacionalidad peruana.`
    );
  };

  identificar(20, "Daniel", "Villa");
  identificar(23, "Luis");
  identificar(22, "Juan", undefined, false);
})();

// 5.
console.log("\nTarea 5");
console.log("=======");
(() => {
  class Rectangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
    }

    area = () => this.base * this.altura;
  }

  let rect1: Rectangulo = new Rectangulo(2, 3);
  console.log(
    `El area del rectangulo de dimensiones: ${rect1.base}x${
      rect1.altura
    } es ${rect1.area()}`
  );
  let rect2: Rectangulo = new Rectangulo(3, 5);
  console.log(
    `El area del rectangulo de dimensiones: ${rect2.base}x${
      rect2.altura
    } es ${rect2.area()}`
  );
})();

// 6.
console.log("\nTarea 6");
console.log("=======");
(() => {
  let nombreCompleto: string = "Javier Soliz";
  let edad: number = 16;
  console.log(
    `El nombre del usuario es ${nombreCompleto} con edad de ${edad}.`
  );

  let [x, y] = [4, 6];
  let mult = (a: number, b: number) => a * b;
  console.log(`La multiplicacion de ${x} y ${y} es: ${mult(x, y)}`);

  console.log(
    `La edad de ${nombreCompleto} (${edad}) es ${
      edad > mult(x, y) ? "mayor" : "menor"
    } a la edad minima requerida (${mult(x, y)})`
  );
})();

// 7.
console.log("\nTarea 7");
console.log("=======");
(() => {
  interface tempInt {
    usuario: string;
    clave: string;
  }
  interface tempInt {
    fecha: Date;
    estado: boolean;
  }

  let temp1: tempInt = {
    usuario: "Usuario",
    clave: "Clave",
    fecha: new Date(),
    estado: true,
  };

  let temp2 = {
    nombre: "Test",
    precio: 10,
  };

  let arr = ["Jhon", "Luis", "Mateo", "Ana"];
  let [, , temp3, temp4] = arr;

  console.log(temp1);
  console.log(temp2);
  console.log(temp3);
  console.log(temp4);
})();
