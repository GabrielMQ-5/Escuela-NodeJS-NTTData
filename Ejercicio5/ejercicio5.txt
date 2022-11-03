** Ejercicio 05
1.- Ejemplo de uso de let y const
2.- Crear una interfaz que sirva para validar el siguiente objeto
  interface casa {
    area: number,
    ambientes: number,
    colorParedes: string
  }
3.- Convertir esta funcion a una funcion de flecha
  function caluloSumaCuadadro(x, y) {
    const resultado = (x + y)^2;
    return 'El resultado es ' + resultado;
  }
4.- Crear una función con parametros obligatorios, opcionales y por defecto. Para ello usar estos parametros:
  - Nombre (obligatorio): string
  - Apellido (opcional): string
  - Edad (obligatorio): number
  - Es Peruano (opcional): boolean (default = true)
  Debe imprimir: El nombre del usuario es <nombre> <apellido> con edad de <edad> y con|sin nacionalidad peruana 
5.- Crear una clase que permita la siguiente estructura
  - La clase se debe de llamar rectangulo, con las siguientes propiedades: (base y altura)
  - La clase rectangulo debe calular el area y devolver un número
6.- 3 ejemplos de uso de template literal
  - Debe contener string, number
  - Debe contener function flecha
  - Debe contener string y usar boolean para cambiar un texto 
7.- 3 ejemplo de uso de desestructuración
  - Desestructuración de todas las variables de un objeto (funsionando interfaces). Las propiedades serian: 
    - usuario: string
    - clave: string
    - fecha: fecha actual
    - estado: boleano
  - Desestructuración de objecto (usando type). La estructura seria: nombre: string, precio: number
  - En una funcion flecha, realizar la desestructuración solo de los 2 ultimos elementos del array. El contenido del array es el siguiente:
    ['Jhon','Luis','Mateo','Ana']