(function () {
  function saludar(nombre: string) {
    console.log("Hola", nombre);
  }

  interface heroe {
    nombre: string;
    apellido: string;
  }

  const ironman: heroe = {
    nombre: "Tony",
    apellido: "Stark",
  };

  saludar(`${ironman.nombre} ${ironman.apellido}`);
})();
