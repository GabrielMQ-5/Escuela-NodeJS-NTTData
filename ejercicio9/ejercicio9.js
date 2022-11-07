"use strict";
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
exports.__esModule = true;
var events_1 = require("events");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var MAIN_FETCH_ERROR, BORDER_FETCH_ERROR, eventEmitter, searchByCodeCountry, printCountryInfo, countryToSearch, response, _a, name_1, currencies, languages, borders, countryFound, borderCountries, _i, borders_1, borderCountry, response_1, name_2, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                MAIN_FETCH_ERROR = "mainFetchError";
                BORDER_FETCH_ERROR = "borderFetchError";
                eventEmitter = new events_1.EventEmitter();
                eventEmitter.on(MAIN_FETCH_ERROR, function (country) {
                    var missingFields = [];
                    if (!country.name || !country.name.common) {
                        missingFields.push("nombre");
                    }
                    if (!country.languages) {
                        missingFields.push("lenguajes");
                    }
                    if (!country.currencies) {
                        missingFields.push("moneda");
                    }
                    console.log("ERROR: La data recibida del pais consultado es invalida: ".concat(missingFields.length > 1
                        ? "El campo ".concat(missingFields.join(), " falta")
                        : "Los campos ".concat(missingFields.join(", "), " faltan")));
                });
                eventEmitter.on(BORDER_FETCH_ERROR, function (countryCode) {
                    console.log("ERROR: El codigo de pais vecino: ".concat(countryCode, " es invalido."));
                });
                searchByCodeCountry = function (alpha3Code) { return __awaiter(void 0, void 0, void 0, function () {
                    var res, data, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, fetch("https://restcountries.com/v3.1/alpha/".concat(alpha3Code))];
                            case 1:
                                res = _a.sent();
                                return [4 /*yield*/, res.json()];
                            case 2:
                                data = _a.sent();
                                return [2 /*return*/, data];
                            case 3:
                                error_2 = _a.sent();
                                console.log(error_2);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                printCountryInfo = function (country, borders) {
                    var currencies = [];
                    var languages = [];
                    for (var key in country.currencies) {
                        if (Object.prototype.hasOwnProperty.call(country.currencies, key)) {
                            currencies.push(country.currencies[key]);
                        }
                    }
                    for (var key in country.languages) {
                        if (Object.prototype.hasOwnProperty.call(country.languages, key)) {
                            languages.push(country.languages[key]);
                        }
                    }
                    console.log("==================================");
                    console.log("El pais encontrado es: ".concat(country.name.common));
                    console.log("".concat(currencies.length > 1 ? "Sus monedas son" : "Su moneda es", ":"));
                    currencies.forEach(function (currency) {
                        console.log(" - ".concat(currency.name, " (").concat(currency.symbol, ")"));
                    });
                    console.log("".concat(languages.length > 1 ? "Sus lenguajes son" : "Su lenguaje es", ":"));
                    languages.forEach(function (language) {
                        console.log(" - ".concat(language));
                    });
                    console.log("".concat(borders.length > 1 ? "Sus paises vecinos son" : "Su pais vecino es", ":"));
                    borders.forEach(function (country) {
                        console.log(" - ".concat(country.name.common));
                    });
                    console.log("==================================");
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                countryToSearch = "br";
                console.log("Buscando pais...");
                return [4 /*yield*/, searchByCodeCountry(countryToSearch)];
            case 2:
                response = _b.sent();
                _a = response[0], name_1 = _a.name, currencies = _a.currencies, languages = _a.languages, borders = _a.borders;
                if (!name_1 || !currencies || !languages || !borders) {
                    eventEmitter.emit(MAIN_FETCH_ERROR, {
                        name: name_1,
                        currencies: currencies,
                        languages: languages
                    });
                    throw MAIN_FETCH_ERROR;
                }
                console.log("Pais encontrado.");
                countryFound = { name: name_1, currencies: currencies, languages: languages };
                borderCountries = [];
                console.log("Buscando paises vecinos...");
                _i = 0, borders_1 = borders;
                _b.label = 3;
            case 3:
                if (!(_i < borders_1.length)) return [3 /*break*/, 6];
                borderCountry = borders_1[_i];
                // FORCE ERROR ON 2 BORDER
                if (borderCountry == borders[1])
                    borderCountry = "ERROR";
                return [4 /*yield*/, searchByCodeCountry(borderCountry)];
            case 4:
                response_1 = _b.sent();
                try {
                    name_2 = response_1[0].name;
                    if (!name_2) {
                        eventEmitter.emit(BORDER_FETCH_ERROR, borderCountry);
                        throw BORDER_FETCH_ERROR;
                    }
                    borderCountries.push({ name: name_2 });
                }
                catch (error) {
                    eventEmitter.emit(BORDER_FETCH_ERROR, borderCountry);
                    throw BORDER_FETCH_ERROR;
                }
                _b.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                console.log("Paises vecinos encontrados.");
                console.log("Imprimiendo...");
                printCountryInfo(countryFound, borderCountries);
                return [3 /*break*/, 8];
            case 7:
                error_1 = _b.sent();
                console.warn("Error encontrado: ".concat(error_1));
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); })();
