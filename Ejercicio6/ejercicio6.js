(function () {
    var retirarDinero = function (montoARetirar) {
        return new Promise(function (resolve, reject) {
            var DINERO_ACTUAL = 1000;
            if (DINERO_ACTUAL >= montoARetirar)
                resolve("Monto disponible a retirar: ".concat(DINERO_ACTUAL - montoARetirar));
            else
                reject("No hay suficientes montos.");
        });
    };
    console.log(retirarDinero(500)
        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn(err); }));
    console.log(retirarDinero(1000)
        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn(err); }));
    console.log(retirarDinero(1500)
        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn(err); }));
})();
