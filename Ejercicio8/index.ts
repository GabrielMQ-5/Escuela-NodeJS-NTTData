// CA 1
const CA1 = async () => {
  interface countryInfo {
    name: { common: string };
    currencies?: object;
    languages?: object;
  }
  interface countryCurrency {
    name: string;
    symbol: string;
  }

  const searchByCodeCountry = async (alpha3Code) => {
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
    const countryToSearch = "pe";

    console.log("Buscando pais...");
    const response = await searchByCodeCountry(countryToSearch);
    const { name, currencies, languages, borders } = response[0];
    if (!name || !currencies || !languages || !borders)
      throw new Error("Error en los valores obtenidos.");

    console.log("Pais encontrado.");
    const countryFound: countryInfo = { name, currencies, languages };
    const borderCountries: countryInfo[] = [];

    console.log("Buscando paises vecinos...");
    for (const borderCountry of borders) {
      const response = await searchByCodeCountry(borderCountry);
      const { name } = response[0];
      borderCountries.push({ name });
    }
    console.log("Paises vecinos encontrados.");

    console.log("Imprimiendo...");
    printCountryInfo(countryFound, borderCountries);
  } catch (error) {
    console.error(error);
  }
};

// CA 2
const CA2 = async () => {
  interface Pizza {
    prepared: boolean;
    cooked: boolean;
  }
  interface Oven {
    heated: boolean;
    cooking: boolean;
  }
  const pizza: Pizza = { prepared: false, cooked: false };
  const oven: Oven = { heated: false, cooking: false };

  const preheatOven = () => {
    console.log("[Precalentando horno]");
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        console.log("Bep Bep Beeep! Horno Calentado!");
        resolve(true);
      }, 5000);
    }).then((res) => {
      oven.heated = res;
    });
  };
  const preparePizza = async () => {
    console.log("[Preparando pizza]");
    pizza.prepared = await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  };
  const drinkSomething = async (ovenReady: Promise<void>) => {
    console.log("[Tomando refresco]");
    await ovenReady.finally();
    console.log("[Dejaste de tomar refresco]");
  };
  const cookPizza = () => {
    console.log("[Cocinando pizza]");
    oven.cooking = true;
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        console.log("Bep Bep Beeep! Pizza lista!");
        resolve(true);
      }, 10000);
    }).then((res) => {
      oven.cooking = !res;
      pizza.cooked = res;
    });
  };
  const watchSomething = async (pizzaReady: Promise<void>) => {
    console.log("[Mirando la TV]");
    await pizzaReady.finally();
    console.log("[Dejaste de mirar la TV]");
  };

  const ovenReady = preheatOven();
  await preparePizza();
  await drinkSomething(ovenReady);
  const pizzaReady = cookPizza();
  await watchSomething(pizzaReady);
};

CA1().then(() => CA2());
