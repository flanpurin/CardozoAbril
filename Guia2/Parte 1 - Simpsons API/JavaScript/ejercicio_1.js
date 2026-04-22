const url = "https://thesimpsonsapi.com/api/characters";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => (resultado.innerHTML = data.results[0].name));
