const url = "https://rickandmortyapi.com/api/character";
const resultado = document.getElementById("resultado");
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personajes = data.results;
    const humanos = personajes.filter((pj) => pj.species === "Human");
    const cantidad = humanos.length;
    humanos.forEach((pj) => {
      resultado.innerHTML += `<p>${pj.name} - ${pj.species}</p>`;
    });
    resultado.innerHTML += `Se encontraron ${cantidad} humanos.`;
  });
