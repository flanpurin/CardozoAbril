const resultado = document.getElementById("resultado");
const nombre = document.getElementById("nombre");
const btnBuscar = document.getElementById("buscar");

btnBuscar.addEventListener("click", function buscarImagen() {
  const texto = nombre.value;

  fetch(`https://rickandmortyapi.com/api/character?name=${texto}`)
    .then((response) => response.json())
    .then((data) => {
      const personajes = data.results;

      personajes.forEach((pj) => {
        resultado.innerHTML += `<div style="border: 1px solid gray; padding: 10px; margin: 5px; display: inline-block;">
       
        <img src="${pj.image}" style="max-width: 200px;">
       
        <h2>${pj.name}</h2>
        
        <p>Estado: ${pj.status}</p>
       
        </div>`;
      });
    });
});
