const url = "https://rickandmortyapi.com/api/character";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personajes = data.results;
    const vivos = personajes.filter((pj) => pj.status === "Alive");
    const cantidad = vivos.length;

    resultado.innerHTML = `Personajes vivos en esta página: ${cantidad}`;

    vivos.forEach((pj) => {
      resultado.innerHTML += `<p> ${pj.name} </p>`;
    });
  });
