const url = "https://thesimpsonsapi.com/api/characters";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const sacarNulos = data.results.filter((p) => p.age !== null);
    const jovenes = sacarNulos.sort((a, b) => a.age - b.age);
    const jovenes5 = jovenes.slice(0, 5);

    jovenes5.forEach((personaje) => {
      resultado.innerHTML += `<p>${personaje.name} - ${personaje.age}</p>`;
    });
  });
