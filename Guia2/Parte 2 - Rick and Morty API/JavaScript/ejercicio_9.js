const url = "https://rickandmortyapi.com/api/character";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personajes = data.results;
    const todasEspecies = personajes.reduce((acumulador, pj) => {
      const especie = pj.species;

      if (!acumulador[especie]) {
        acumulador[especie] = 0;
      }

      acumulador[especie] += 1;
      return acumulador;
    }, {});

    Object.entries(todasEspecies).forEach(([nombre, cantidad]) => {
      resultado.innerHTML += `<p> Especie: ${nombre} - Cantidad: ${cantidad}</p>`;
    });
  });
