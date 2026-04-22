const url = "https://rickandmortyapi.com/api/character";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personaje = data.results[0].name;

    resultado.innerHTML = personaje;
  });
