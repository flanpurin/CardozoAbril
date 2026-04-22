/* Dashboard completo
Mostrá un resumen completo de los personajes de la primera página.
El HTML debe mostrar todos estos datos:

Total de personajes en la primera página
Cuántos están vivos, muertos y con estado desconocido (filter para cada uno)
El personaje con más episodios — nombre y cantidad
El personaje con menos episodios — nombre y cantidad
Lista de todas las especies encontradas (sin repetir)
Métodos
filter sort reduce map
Para especies únicas: new Set(array) puede ayudar */
const url = "https://rickandmortyapi.com/api/character";
const resultado = document.getElementById("resultado");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const personajes = data.results;

    const totalPersonajes = personajes.length;

    const vivos = personajes.filter((pj) => pj.status === "Alive").length;
    const muertos = personajes.filter((pj) => pj.status === "Dead").length;
    const desconocido = personajes.filter(
      (pj) => pj.status === "unknown",
    ).length;

    const ordenados = personajes.sort(
      (a, b) => b.episode.length - a.episode.length,
    );
    const mayor = ordenados[0];
    const menor = ordenados[ordenados.length - 1];

    const especies = [...new Set(personajes.map((pj) => pj.species))];

    resultado.innerHTML += `Total de personajes en la primera pagina: ${totalPersonajes} <br> <br>
    Cantidad de Vivos: ${vivos} <br>
    Cantidad de Muertos: ${muertos} <br>
    Cantidad de Desconocido: ${desconocido} <br> <br> 
    Personaje con mas episodios: ${mayor.name} - ${mayor.episode.length} <br>
    Personaje con menos episodios: ${menor.name} - ${menor.episode.length} <br> <br>`;

    resultado.innerHTML += `Especies: `;
    especies.forEach((especie) => {
      resultado.innerHTML += `${especie} `;
    });
  });
