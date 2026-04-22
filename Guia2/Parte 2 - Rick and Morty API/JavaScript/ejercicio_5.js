const identif = document.getElementById("identif");
const btnBuscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

btnBuscar.addEventListener("click", function () {
  const id = identif.value;

  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("ID no existe");
      }
      return response.json();
    })

    .then((data) => {
      resultado.innerHTML = `<h2>${data.name}</h2>
      <p>Estado: ${data.status}</p>
      <img src="${data.image}" style="max-width: 200px;">`;
    })

    .catch((error) => {
      resultado.innerHTML = `<p>El ID ingresado no existe.</p>`;
    });
});
