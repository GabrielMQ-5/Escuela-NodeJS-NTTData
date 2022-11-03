(() => {
  //Colecciones
  const fruits = [
    "apple",
    "melon",
    "mango",
    (fruta: string) => {
      const zumo = `Zumo de ${fruta}`;
      console.log(zumo);
    },
  ];
  const [, , , fn1] = fruits;
  console.log("Coleccion array: ", fn1);
  console.log("-----------------------");

  const numbersColection = new Set();
  numbersColection.add(5);
  numbersColection.add(5);
  numbersColection.add(6);

  console.log("Coleccion set: ", numbersColection);
  console.log("-----------------------");

  const students = new Map();
  students.set("one", "Josue");
  students.set("two", "Alex");
  students.set("three", "Lucy");

  console.log("Coleccion map: ", students.get("one"));
  console.log("-----------------------");

  console.log("------*PROMESAS*-------");
  console.log("INICIO PROMESA");
  const promesaInicial = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error en carga de valores");
    }, 1000);
    setTimeout(() => {
      resolve("Se obtuvieron los valores esperados");
    }, 2000);
  });

  promesaInicial
    .then((res) => console.log(res))
    .catch((err) => console.warn("[Exception]", err));
  console.log("FIN PROMESA");
})();
