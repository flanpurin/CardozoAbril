const url = "https://rickandmortyapi.com/api/character";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personajes = data.results.slice(0, 5).forEach((primeros5) => {
      resultado.innerHTML += `<p> ${primeros5.name} - ${primeros5.status} </p>`;
    });
  });
