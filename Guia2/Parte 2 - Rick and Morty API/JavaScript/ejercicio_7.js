const url = "https://rickandmortyapi.com/api/character";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personajes = data.results;
    const imagen = personajes.every((pj) => pj.image !== "");

    if (imagen) {
      resultado.innerHTML = `Todos los personajes tienen imagen.`;
    } else {
      resultado.innerHTML = `Hay personajes sin imagen.`;
    }
  });
