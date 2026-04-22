const url = "https://thesimpsonsapi.com/api/characters";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) =>
    data.results.slice(0, 5).forEach((personaje) => {
      resultado.innerHTML += "<p>" + personaje.name + "</p>";
    }),
  );
