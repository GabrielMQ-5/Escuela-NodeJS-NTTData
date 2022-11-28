(function () {
    function saludar(nombre) {
        console.log("Hola", nombre);
    }
    var ironman = {
        nombre: "Tony",
        apellido: "Stark"
    };
    saludar("".concat(ironman.nombre, " ").concat(ironman.apellido));
})();
