(() => {
  const retirarDinero = (montoARetirar: number): Promise<string> =>
    new Promise((resolve, reject) => {
      const DINERO_ACTUAL = 1000;
      if (DINERO_ACTUAL >= montoARetirar)
        resolve(`Monto disponible a retirar: ${DINERO_ACTUAL - montoARetirar}`);
      else reject("No hay suficientes montos.");
    });

  console.log(
    retirarDinero(500)
      .then((res) => console.log(res))
      .catch((err) => console.warn(err))
  );
  console.log(
    retirarDinero(1000)
      .then((res) => console.log(res))
      .catch((err) => console.warn(err))
  );
  console.log(
    retirarDinero(1500)
      .then((res) => console.log(res))
      .catch((err) => console.warn(err))
  );
})();
