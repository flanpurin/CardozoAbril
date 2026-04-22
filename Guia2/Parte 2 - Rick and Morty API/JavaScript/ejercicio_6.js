const url = "https://rickandmortyapi.com/api/character";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personajes = data.results;

    personajes.sort((a, b) => b.episode.length - a.episode.length);

    personajes.forEach((ordenados) => {
      const cantEpisodios = ordenados.episode.length;

      resultado.innerHTML += `<P>${ordenados.name} - ${cantEpisodios} episodios</P>`;
    });
  });
