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
// CA 1
var CA1 = function () { return __awaiter(_this, void 0, void 0, function () {
    var searchByCodeCountry, printCountryInfo, countryToSearch, response, _a, name_1, currencies, languages, borders, countryFound, borderCountries, _i, borders_1, borderCountry, response_1, name_2, error_1;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                searchByCodeCountry = function (alpha3Code) { return __awaiter(_this, void 0, void 0, function () {
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
                countryToSearch = "pe";
                console.log("Buscando pais...");
                return [4 /*yield*/, searchByCodeCountry(countryToSearch)];
            case 2:
                response = _b.sent();
                _a = response[0], name_1 = _a.name, currencies = _a.currencies, languages = _a.languages, borders = _a.borders;
                if (!name_1 || !currencies || !languages || !borders)
                    throw new Error("Error en los valores obtenidos.");
                console.log("Pais encontrado.");
                countryFound = { name: name_1, currencies: currencies, languages: languages };
                borderCountries = [];
                console.log("Buscando paises vecinos...");
                _i = 0, borders_1 = borders;
                _b.label = 3;
            case 3:
                if (!(_i < borders_1.length)) return [3 /*break*/, 6];
                borderCountry = borders_1[_i];
                return [4 /*yield*/, searchByCodeCountry(borderCountry)];
            case 4:
                response_1 = _b.sent();
                name_2 = response_1[0].name;
                borderCountries.push({ name: name_2 });
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
                console.error(error_1);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
// CA 2
var CA2 = function () { return __awaiter(_this, void 0, void 0, function () {
    var pizza, oven, preheatOven, preparePizza, drinkSomething, cookPizza, watchSomething, ovenReady, pizzaReady;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pizza = { prepared: false, cooked: false };
                oven = { heated: false, cooking: false };
                preheatOven = function () {
                    console.log("[Precalentando horno]");
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            console.log("Bep Bep Beeep! Horno Calentado!");
                            resolve(true);
                        }, 5000);
                    }).then(function (res) {
                        oven.heated = res;
                    });
                };
                preparePizza = function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.log("[Preparando pizza]");
                                _a = pizza;
                                return [4 /*yield*/, new Promise(function (resolve) {
                                        setTimeout(function () {
                                            resolve(true);
                                        }, 3000);
                                    })];
                            case 1:
                                _a.prepared = _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); };
                drinkSomething = function (ovenReady) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("[Tomando refresco]");
                                return [4 /*yield*/, ovenReady["finally"]()];
                            case 1:
                                _a.sent();
                                console.log("[Dejaste de tomar refresco]");
                                return [2 /*return*/];
                        }
                    });
                }); };
                cookPizza = function () {
                    console.log("[Cocinando pizza]");
                    oven.cooking = true;
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            console.log("Bep Bep Beeep! Pizza lista!");
                            resolve(true);
                        }, 10000);
                    }).then(function (res) {
                        oven.cooking = !res;
                        pizza.cooked = res;
                    });
                };
                watchSomething = function (pizzaReady) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("[Mirando la TV]");
                                return [4 /*yield*/, pizzaReady["finally"]()];
                            case 1:
                                _a.sent();
                                console.log("[Dejaste de mirar la TV]");
                                return [2 /*return*/];
                        }
                    });
                }); };
                ovenReady = preheatOven();
                return [4 /*yield*/, preparePizza()];
            case 1:
                _a.sent();
                return [4 /*yield*/, drinkSomething(ovenReady)];
            case 2:
                _a.sent();
                pizzaReady = cookPizza();
                return [4 /*yield*/, watchSomething(pizzaReady)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// CA1().then(() => CA2());
CA2();
