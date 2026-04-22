const url = "https://thesimpsonsapi.com/api/characters";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personajes = data.results;
    const estadisticas = personajes.reduce((acumulador, personaje) => {
      const genero = personaje.gender;

      if (acumulador[genero]) {
        acumulador[genero] += 1;
      } else {
        acumulador[genero] = 1;
      }
      return acumulador;
    });

    resultado.innerHTML = `<p>Masculinos: ${estadisticas["Male"]} personajes</p>
      <p>Femeninos: ${estadisticas["Female"]} personajes</p>`;
  });
