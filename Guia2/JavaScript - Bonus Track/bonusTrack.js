const urlSimpsons = "https://thesimpsonsapi.com/api/characters";
const urlRM = "https://rickandmortyapi.com/api/character";
const btnSorteo = document.getElementById("sorteo");
const tarjetaSimpsons = document.getElementById("tarjetaSimpsons");
const tarjetaRM = document.getElementById("tarjetaRM");

btnSorteo.addEventListener("click", sortear);

Promise.all([
  fetch(urlSimpsons).then((response) => response.json()),
  fetch(urlRM).then((response) => response.json()),
]).then(([dataSimpsons, dataRM]) => {
  listaSimpsons = dataSimpsons.results;
  listaRM = dataRM.results;
  sortear();
});

function sortear() {
  const simpsons = Math.floor(Math.random() * listaSimpsons.length);
  const RM = Math.floor(Math.random() * listaRM.length);

  const pjSimpsons = listaSimpsons[simpsons];
  const pjRM = listaRM[RM];

  tarjetaSimpsons.innerHTML = `<img src="https://cdn.thesimpsonsapi.com/200${pjSimpsons.portrait_path}" width="150">
  <h2> ${pjSimpsons.name} </h2>
  Género: ${pjSimpsons.gender} <br>
  Ocupación: ${pjSimpsons.occupation} <br>
  Edad de ${pjSimpsons.name}: ${pjSimpsons.age} <br>`;

  tarjetaRM.innerHTML = `<img src="${pjRM.image}" width="150">
  <h2> ${pjRM.name} </h2>
  Género: ${pjRM.gender} <br>
  Estado: ${pjRM.status} <br>
  Episodios de ${pjRM.name}: ${pjRM.episode.length} <br>`;
}
