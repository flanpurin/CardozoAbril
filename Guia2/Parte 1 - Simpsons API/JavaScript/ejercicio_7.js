const url = "https://thesimpsonsapi.com/api/characters";
const btnVerificar = document.getElementById("verifica");
const ocupacion = document.getElementById("ocupacion");
const resultado = document.getElementById("resultado");

btnVerificar.addEventListener("click", function verificaOcupacion() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const existe = data.results.some(
        (personaje) =>
          personaje.occupation.toLowerCase() === ocupacion.value.toLowerCase(),
      );

      if (existe) {
        resultado.innerHTML =
          "<p>" + "Sí, existe un personaje con esa ocupación" + "</p>";
      } else {
        resultado.innerHTML = "<p>" + "No se encontró ninguno" + "</p>";
      }
    });
});
