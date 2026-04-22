const url = "https://thesimpsonsapi.com/api/characters";
const btnBuscar = document.getElementById("buscar");
const nombre = document.getElementById("nombre");
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personaje = data.results;

    btnBuscar.addEventListener("click", function buscarPersonaje() {
      const encontrado = personaje.find(
        (personaje) =>
          personaje.name.toLowerCase() === nombre.value.toLowerCase(),
      );

      if (encontrado) {
        resultado.innerHTML = `${encontrado.name} - ${encontrado.occupation} - ${encontrado.age}`;
      } else {
        resultado.innerHTML = "Personaje no encontrado";
      }
    });
  });
