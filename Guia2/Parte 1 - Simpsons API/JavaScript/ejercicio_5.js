const url = "https://thesimpsonsapi.com/api/characters";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const mayor = data.results.reduce((compara, personaje) => {
      if (personaje.age !== null && personaje.age > compara.age) {
        return personaje;
      } else {
        return compara;
      }
    });
    resultado.innerHTML = `El personaje mas viejo es ${mayor.name} con ${mayor.age} años.`;
  });
