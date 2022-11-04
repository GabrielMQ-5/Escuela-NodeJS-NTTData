(() => {
  interface Fiesta {
    tortas: number;
  }
  interface Persona {
    saludable?: boolean;
  }

  const fiesta: Fiesta = {
    tortas: 0,
  };
  const Kayo: Persona = { saludable: undefined };

  const determinarSalud = (persona: Persona) => {
    persona.saludable = Math.floor(Math.random() * 10) > 5;
  };

  const confirmarTortas = (fiesta: Fiesta, persona: Persona) => {
    if (persona.saludable) {
      fiesta.tortas = Math.floor(Math.random() * 10) + 1;
    }
  };

  const obtenerResultado = (
    fiesta: Fiesta,
    persona: Persona
  ): Promise<string> =>
    new Promise((resolve, reject) => {
      determinarSalud(persona);
      confirmarTortas(fiesta, persona);
      if (fiesta.tortas > 0) {
        resolve(`La fiesta tendra ${fiesta.tortas} tortas.`);
      } else reject(`La fiesta no tendra tortas.`);
    });

  obtenerResultado(fiesta, Kayo)
    .then((res) => console.log(res))
    .catch((err) => console.warn(err));
})();

(() => {
  interface ResultadoAleatorio {
    puntos: number;
    aleatorio: number;
  }

  const ingresaNumero = (ingreso?: number) => {
    return new Promise<ResultadoAleatorio>((resolve, reject) => {
      const numNuevo = Number(ingreso);
      const numAleatorio = Math.floor(Math.random() * 5 + 1);

      if (isNaN(numNuevo)) reject(new Error("Tipo de entrada incorrecto."));

      // puntos obtenidos
      // numero aleatorio
      let respuesta: ResultadoAleatorio;
      if (numNuevo === numAleatorio) {
        respuesta = { puntos: 5, aleatorio: numAleatorio };
      } else if (
        numNuevo === numAleatorio - 1 ||
        numNuevo === numAleatorio + 1
      ) {
        respuesta = { puntos: 2, aleatorio: numAleatorio };
      } else {
        respuesta = { puntos: 0, aleatorio: numAleatorio };
      }
      resolve(respuesta);
    });
  };

  const continuarAdivinanza = (terminar = true) => {
    return new Promise<boolean>((resolve) => {
      if (terminar) resolve(false);
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  const interfaceUsuario = async (status?: boolean) => {
    try {
      const resultado = await ingresaNumero(3);
      const { puntos, aleatorio } = resultado;

      const continuar = await continuarAdivinanza(status);
      console.log(
        `El resultado del numero aleatorio es: ${aleatorio}, obtuviste ${puntos}pts`
      );

      if (continuar) {
        console.log("Intentando de nuevo.");
        interfaceUsuario(continuar);
      } else {
        console.log("Fin del juego.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  interfaceUsuario(false);
})();
