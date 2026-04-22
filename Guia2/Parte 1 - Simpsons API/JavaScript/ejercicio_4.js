const url = "https://thesimpsonsapi.com/api/characters";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((personajes) => {
      resultado.innerHTML += `<p> ${personajes.name} - ${personajes.occupation}</p>`;
    });
  });
