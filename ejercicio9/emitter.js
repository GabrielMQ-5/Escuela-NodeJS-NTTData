"use strict";
exports.__esModule = true;
var events_1 = require("events");
var eventEmitter = new events_1.EventEmitter();
eventEmitter.on("primerEvento", function () {
    console.log("Se ejecuto el primer evento");
});
eventEmitter.prependListener("primerEvento", function () {
    console.log("Anteponiendo Event");
});
eventEmitter.emit("primerEvento");
eventEmitter.on("segundoEvento", function () {
    console.log("Se ejecuto el segundo evento");
});
eventEmitter.on("segundoEvento", function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var parameters = args.join(", ");
    console.log("Evento con parametros ".concat(parameters));
});
eventEmitter.emit("segundoEvento", 1, 2, 3);
eventEmitter.on("cargaUsuario", function (nombre, edad) {
    console.log("Se cargo los datos del usuario ".concat(nombre, " con ").concat(edad, " de edad"));
});
eventEmitter.emit("cargaUsuario", "Gabriel", 25);
console.log(eventEmitter.listeners("cargaUsuario"));
