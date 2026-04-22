const url = "https://thesimpsonsapi.com/api/characters";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const mujeres = data.results.filter(
      (personaje) => personaje.gender === "Female",
    );

    const cantidad = mujeres.length;

    mujeres.forEach((personaje) => {
      resultado.innerHTML += "<p>" + personaje.name + "</p>";
    });

    resultado.innerHTML += `<p> Se encontraron ${cantidad} personajes femeninos </p>`;
  });
