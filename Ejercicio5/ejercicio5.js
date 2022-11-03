// EJERCICIO 5
// 1.
console.log("\nTarea 1");
console.log("=======");
(function () {
    var TEXT = "CONSTANTE";
    var val1 = 1;
    if (val1 == 1) {
        var val1_1 = 0;
        var val2 = 1;
        console.log(val2 > val1_1 ? "true" : "false");
    }
    if (val1 == 1) {
        console.log(TEXT);
    }
})();
// 2.
console.log("\nTarea 2");
console.log("=======");
(function () {
    var casa1 = {
        area: 200,
        ambientes: 4,
        colorParedes: "crema"
    };
    console.log(casa1);
    console.log("El area promedio por ambiente es: " + casa1.area / casa1.ambientes);
})();
// 3.
console.log("\nTarea 3");
console.log("=======");
(function () {
    /*
          function calculoSumaCuadadro(x, y) {
              const resultado = (x + y)^2;
              return 'El resultado es ' + resultado;
          }
      */
    var calculoSumaCuadadro = function (x, y) {
        return "El resultado de (".concat(x, " + ").concat(y, ")^2 es ").concat(Math.pow(x + y, 2));
    };
    console.log(calculoSumaCuadadro(2, 3));
})();
// 4.
console.log("\nTarea 4");
console.log("=======");
(function () {
    var identificar = function (edad, nombre, apellido, esPeruano) {
        if (esPeruano === void 0) { esPeruano = true; }
        var nombreCompleto;
        if (apellido)
            nombreCompleto = nombre + " " + apellido;
        else
            nombreCompleto = nombre;
        console.log("El nombre del usuario es ".concat(nombreCompleto, " con edad de ").concat(edad, " y ").concat(esPeruano ? "con" : "sin", " nacionalidad peruana."));
    };
    identificar(20, "Daniel", "Villa");
    identificar(23, "Luis");
    identificar(22, "Juan", undefined, false);
})();
// 5.
console.log("\nTarea 5");
console.log("=======");
(function () {
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(base, altura) {
            var _this = this;
            this.area = function () { return _this.base * _this.altura; };
            this.base = base;
            this.altura = altura;
        }
        return Rectangulo;
    }());
    var rect1 = new Rectangulo(2, 3);
    console.log(rect1.area());
    var rect2 = new Rectangulo(3, 5);
    console.log(rect2.area());
})();
// 6.
console.log("\nTarea 6");
console.log("=======");
(function () {
    var nombreCompleto = "Javier Soliz";
    var edad = 16;
    console.log("El nombre del usuario es ".concat(nombreCompleto, " con edad de ").concat(edad, "."));
    var _a = [4, 6], x = _a[0], y = _a[1];
    var mult = function (a, b) { return a * b; };
    console.log("La multiplicacion de ".concat(x, " y ").concat(y, " es: ").concat(mult(x, y)));
    console.log("La edad de ".concat(nombreCompleto, " (").concat(edad, ") es ").concat(edad > mult(x, y) ? "mayor" : "menor", " a la edad minima requerida (").concat(mult(x, y), ")"));
})();
// 7.
console.log("\nTarea 7");
console.log("=======");
(function () {
    var temp1 = {
        usuario: "Usuario",
        clave: "Clave",
        fecha: new Date(),
        estado: true
    };
    var temp2 = {
        nombre: "Test",
        precio: 10
    };
    var arr = ["Jhon", "Luis", "Mateo", "Ana"];
    var temp3 = arr[2], temp4 = arr[3];
    console.log(temp1);
    console.log(temp2);
    console.log(temp3);
    console.log(temp4);
})();
