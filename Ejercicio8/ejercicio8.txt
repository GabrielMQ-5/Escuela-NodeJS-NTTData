Subir todos sus ejercicios a sus repositorios compartidos.
- HU: Yo siendo usuario deseo buscar el pais segun lo que se ingrese
  ---
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
  ---
    CA: * Se debe usar la function searchByCodeCountry para realizar una busqueda de paises (codigo abreviado: col,pe,at)
        * Se debe mostrar en la consola el nombre del país, nombre y simbolo de moneda y el idioma del país.
        * Se debe mostrar el nombre de los pais vecinos (propiedad borders del response), usando la funcion searchByCodeCountry.
- HU: Yo siendo usuario requiero hornear una pizza congelada. Cada actividad se debe realizar mediantes funciones flecha.
    CA: * Primero se debe precalentar el horno durante 5 segundos. Al terminar debe sonar la alerta del horno (ej. 'Bep Bep Beeep! Horno Calentado!')
        * Mientras se precalienta el horno, sacas la pizza y abres la caja y la pones en el sarten de pizzas (duración de actividad 3seg).
        * Como el horno aun sigue caliente, te tomas un refresco.
        * Con el Horno precalentado. Se procede a meter la pizza al horno y calentarla por 10 segundos. Al terminar debe sonar la alerta del horno (ej. 'Bep Bep Beeep! Pizza lista!')
        * Mientras la pizza se calienta, miras la TV.