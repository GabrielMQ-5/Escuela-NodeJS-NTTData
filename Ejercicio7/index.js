var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
(function () {
    var fiesta = {
        tortas: 0
    };
    var Kayo = { saludable: undefined };
    var determinarSalud = function (persona) {
        persona.saludable = Math.floor(Math.random() * 10) > 5;
    };
    var confirmarTortas = function (fiesta, persona) {
        if (persona.saludable) {
            fiesta.tortas = Math.floor(Math.random() * 10) + 1;
        }
    };
    var obtenerResultado = function (fiesta, persona) {
        return new Promise(function (resolve, reject) {
            determinarSalud(persona);
            confirmarTortas(fiesta, persona);
            if (fiesta.tortas > 0) {
                resolve("La fiesta tendra ".concat(fiesta.tortas, " tortas."));
            }
            else
                reject("La fiesta no tendra tortas.");
        });
    };
    obtenerResultado(fiesta, Kayo)
        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn(err); });
})();
(function () {
    var ingresaNumero = function (ingreso) {
        return new Promise(function (resolve, reject) {
            var numNuevo = Number(ingreso);
            var numAleatorio = Math.floor(Math.random() * 5 + 1);
            if (isNaN(numNuevo))
                reject(new Error("Tipo de entrada incorrecto."));
            // puntos obtenidos
            // numero aleatorio
            var respuesta;
            if (numNuevo === numAleatorio) {
                respuesta = { puntos: 5, aleatorio: numAleatorio };
            }
            else if (numNuevo === numAleatorio - 1 ||
                numNuevo === numAleatorio + 1) {
                respuesta = { puntos: 2, aleatorio: numAleatorio };
            }
            else {
                respuesta = { puntos: 0, aleatorio: numAleatorio };
            }
            resolve(respuesta);
        });
    };
    var continuarAdivinanza = function (terminar) {
        if (terminar === void 0) { terminar = true; }
        return new Promise(function (resolve) {
            if (terminar)
                resolve(false);
            setTimeout(function () {
                resolve(true);
            }, 2000);
        });
    };
    var interfaceUsuario = function (status) { return __awaiter(_this, void 0, void 0, function () {
        var resultado, puntos, aleatorio, continuar, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, ingresaNumero(3)];
                case 1:
                    resultado = _a.sent();
                    puntos = resultado.puntos, aleatorio = resultado.aleatorio;
                    return [4 /*yield*/, continuarAdivinanza(status)];
                case 2:
                    continuar = _a.sent();
                    console.log("El resultado del numero aleatorio es: ".concat(aleatorio, ", obtuviste ").concat(puntos, "pts"));
                    if (continuar) {
                        console.log("Intentando de nuevo.");
                        interfaceUsuario(continuar);
                    }
                    else {
                        console.log("Fin del juego.");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    interfaceUsuario(false);
})();
