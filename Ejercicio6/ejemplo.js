(function () {
    //Colecciones
    var fruits = [
        "apple",
        "melon",
        "mango",
        function (fruta) {
            var zumo = "Zumo de ".concat(fruta);
            console.log(zumo);
        },
    ];
    var fn1 = fruits[3];
    console.log("Coleccion array: ", fn1);
    console.log("-----------------------");
    var numbersColection = new Set();
    numbersColection.add(5);
    numbersColection.add(5);
    numbersColection.add(6);
    console.log("Coleccion set: ", numbersColection);
    console.log("-----------------------");
    var students = new Map();
    students.set("one", "Josue");
    students.set("two", "Alex");
    students.set("three", "Lucy");
    console.log("Coleccion map: ", students.get("one"));
    console.log("-----------------------");
    console.log("------*PROMESAS*-------");
    console.log("INICIO PROMESA");
    var promesaInicial = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Error en carga de valores");
        }, 1000);
        setTimeout(function () {
            resolve("Se obtuvieron los valores esperados");
        }, 2000);
    });
    promesaInicial
        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn("[Exception]", err); });
    console.log("FIN PROMESA");
})();
