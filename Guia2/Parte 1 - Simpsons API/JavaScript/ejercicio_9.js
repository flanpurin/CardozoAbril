const url = "https://thesimpsonsapi.com/api/characters";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personaje = data.results;
    const personajes8 = personaje.slice(0, 8);

    personajes8.forEach((personaje) => {
      resultado.innerHTML += `<div style="border: 1px solid gray; padding: 10px; margin: 5px; display: inline-block;">
      
      <img src="https://cdn.thesimpsonsapi.com/200${personaje.portrait_path}"> <br>

      <strong>${personaje.name}</strong> <br>

      Ocupación: ${personaje.occupation} <br>

      Edad: ${personaje.age} </div>`;
    });
  });
