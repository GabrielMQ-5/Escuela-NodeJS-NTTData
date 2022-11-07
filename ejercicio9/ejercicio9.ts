import { EventEmitter } from "events";
(async () => {
  const MAIN_FETCH_ERROR = "mainFetchError";
  const BORDER_FETCH_ERROR = "borderFetchError";
  interface countryInfo {
    name: { common: string };
    currencies?: object;
    languages?: object;
  }
  interface countryCurrency {
    name: string;
    symbol: string;
  }

  const eventEmitter = new EventEmitter();

  eventEmitter.on(MAIN_FETCH_ERROR, (country: countryInfo) => {
    const missingFields: string[] = [];
    if (!country.name || !country.name.common) {
      missingFields.push("nombre");
    }
    if (!country.languages) {
      missingFields.push("lenguajes");
    }
    if (!country.currencies) {
      missingFields.push("moneda");
    }
    console.log(
      `ERROR: La data recibida del pais consultado es invalida: ${
        missingFields.length > 1
          ? `El campo ${missingFields.join()} falta`
          : `Los campos ${missingFields.join(", ")} faltan`
      }`
    );
  });

  eventEmitter.on(BORDER_FETCH_ERROR, (countryCode: string) => {
    console.log(`ERROR: El codigo de pais vecino: ${countryCode} es invalido.`);
  });

  const searchByCodeCountry = async (alpha3Code: string) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${alpha3Code}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const printCountryInfo = (country: countryInfo, borders: countryInfo[]) => {
    const currencies: countryCurrency[] = [];
    const languages: string[] = [];
    for (const key in country.currencies) {
      if (Object.prototype.hasOwnProperty.call(country.currencies, key)) {
        currencies.push(country.currencies[key] as countryCurrency);
      }
    }
    for (const key in country.languages) {
      if (Object.prototype.hasOwnProperty.call(country.languages, key)) {
        languages.push(country.languages[key]);
      }
    }

    console.log("==================================");
    console.log(`El pais encontrado es: ${country.name.common}`);
    console.log(
      `${currencies.length > 1 ? "Sus monedas son" : "Su moneda es"}:`
    );
    currencies.forEach((currency) => {
      console.log(` - ${currency.name} (${currency.symbol})`);
    });
    console.log(
      `${languages.length > 1 ? "Sus lenguajes son" : "Su lenguaje es"}:`
    );
    languages.forEach((language) => {
      console.log(` - ${language}`);
    });
    console.log(
      `${borders.length > 1 ? "Sus paises vecinos son" : "Su pais vecino es"}:`
    );
    borders.forEach((country) => {
      console.log(` - ${country.name.common}`);
    });
    console.log("==================================");
  };
  try {
    const countryToSearch = "br";

    console.log("Buscando pais...");
    const response = await searchByCodeCountry(countryToSearch);
    const { name, currencies, languages, borders } = response[0];
    if (!name || !currencies || !languages || !borders) {
      eventEmitter.emit(MAIN_FETCH_ERROR, {
        name,
        currencies,
        languages,
      } as countryInfo);
      throw MAIN_FETCH_ERROR;
    }

    console.log("Pais encontrado.");
    const countryFound: countryInfo = { name, currencies, languages };
    const borderCountries: countryInfo[] = [];

    console.log("Buscando paises vecinos...");
    for (let borderCountry of borders) {
      // FORCE ERROR ON 2 BORDER
      if (borderCountry == borders[1]) borderCountry = "ERROR";

      const response = await searchByCodeCountry(borderCountry);
      try {
        const { name } = response[0];
        if (!name) {
          eventEmitter.emit(BORDER_FETCH_ERROR, borderCountry);
          throw BORDER_FETCH_ERROR;
        }
        borderCountries.push({ name });
      } catch (error) {
        eventEmitter.emit(BORDER_FETCH_ERROR, borderCountry);
        throw BORDER_FETCH_ERROR;
      }
    }
    console.log("Paises vecinos encontrados.");

    console.log("Imprimiendo...");
    printCountryInfo(countryFound, borderCountries);
  } catch (error) {
    console.warn(`Error encontrado: ${error}`);
  }
})();
