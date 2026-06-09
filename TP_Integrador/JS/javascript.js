const buscador = document.getElementById("buscador");
const variosUniversos = document.getElementById("universos");
const estados = document.getElementById("estados");
const orden = document.getElementById("orden");
const btnBuscar = document.getElementById("buscar");

const tarjetas = document.getElementById("tarjetas");
const estadisticas = document.getElementById("estadisticas");
const favoritos = document.getElementById("favoritos");

async function obtenerRickMorty(nombre) {
  try {
    const url = nombre
      ? `https://rickandmortyapi.com/api/character/?name=${nombre}`
      : `https://rickandmortyapi.com/api/character`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error: ${res.status} (Rick and Morty)`);
    }

    const data = await res.json();
    return data.results;
  } catch (error) {
    tarjetas.innerHTML = `A ocurrido un error. ${error.message}`;
    return [];
  }
}

async function obtenerSimpsons() {
  try {
    const res = await fetch("https://thesimpsonsapi.com/api/characters");

    if (!res.ok) {
      throw new Error(`Error: ${res.status} (The Simpsons)`);
    }

    const data = await res.json();
    return data.results;
  } catch (error) {
    tarjetas.innerHTML = `A ocurrido un error. ${error.message}`;
    return [];
  }
}

function normalizar(personaje, universo) {
  if (universo === "rickMorty") {
    return {
      id: personaje.id,
      nombre: personaje.name,
      imagen: personaje.image,
      estado: personaje.status,
      genero: personaje.gender,
      detalle: personaje.species,
      origen: "Rick and Morty",
    };
  } else {
    return {
      id: personaje.id,
      nombre: personaje.name,
      imagen: `https://cdn.thesimpsonsapi.com/200${personaje.portrait_path}`,
      estado: personaje.status || "unknown",
      genero: personaje.gender,
      detalle: personaje.occupation,
      origen: "The Simpsons",
    };
  }
}

let personajesFinales = [];

async function busqueda() {
  personajesFinales = [];

  const nombreBuscado = buscador.value.toLowerCase();
  const opcion = variosUniversos.value;

  try {
    if (opcion === "rickMorty") {
      const rm = await obtenerRickMorty(nombreBuscado);

      personajesFinales = rm.map((p) => normalizar(p, "rickMorty"));
    } else if (opcion === "simpsons") {
      const simpsons = await obtenerSimpsons();

      const filtrados = simpsons.filter((p) =>
        p.name.toLowerCase().includes(nombreBuscado),
      );

      personajesFinales = filtrados.map((p) => normalizar(p, "simpsons"));
    } else {
      const [rm, simpsons] = await Promise.all([
        obtenerRickMorty(nombreBuscado),
        obtenerSimpsons(),
      ]);

      const rmNormalizados = rm.map((p) => normalizar(p, "rickMorty"));

      const simpsonsFiltrados = simpsons.filter((p) =>
        p.name.toLowerCase().includes(nombreBuscado),
      );

      const simpsonsNormalizados = simpsonsFiltrados.map((p) =>
        normalizar(p, "simpsons"),
      );

      rmNormalizados.forEach((p) => {
        personajesFinales.push(p);
      });

      simpsonsNormalizados.forEach((p) => {
        personajesFinales.push(p);
      });
    }

    const estadoSeleccionado = estados.value;
    if (estadoSeleccionado !== "todos") {
      personajesFinales = personajesFinales.filter(
        (p) => p.estado === estadoSeleccionado,
      );
    }

    if (orden.value === "az") {
      personajesFinales.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
    } else {
      personajesFinales.sort((a, b) => (a.nombre < b.nombre ? 1 : -1));
    }

    mostrarTarjetas(personajesFinales);
    mostrarEstadisticas(personajesFinales);
  } catch (error) {
    tarjetas.innerHTML = `A ocurrido un error. ${error.message}`;
  }
}

function mostrarTarjetas(personajes) {
  tarjetas.innerHTML = "";

  if (personajes.length === 0) {
    tarjetas.innerHTML = `Personaje no encontrado`;
    return;
  }

  personajes.forEach((p) => {
    const esFavorito = listaFavoritos.some((fav) => fav.id === p.id);

    tarjetas.innerHTML += `<div style="border: 1px solid black;
    padding: 10px; margin: 10px; width: 220px; display: inline-block; vertical-align: top;">
    <img src="${p.imagen}" width="200">
    <h3>${p.nombre}</h3>
    <p>${p.estado}</p>
    <p>${p.genero}</p>
    <p>${p.detalle}</p>
    <p>${p.origen}</p>
  
    <p>${esFavorito ? "⭐" : ""}</p>
  
    <button onclick="agregarFav(${p.id})">
      Favorito </button> <br> <br>
    </div>`;
  });
}

function mostrarEstadisticas(personajes) {
  const masculinos = personajes.reduce((acumulador, pj) => {
    if (pj.genero === "Male") {
      acumulador = acumulador + 1;
    }
    return acumulador;
  }, 0);

  const femeninos = personajes.reduce((acumulador, pj) => {
    if (pj.genero === "Female") {
      acumulador = acumulador + 1;
    }
    return acumulador;
  }, 0);

  const desconocidoGenero = personajes.reduce((acumulador, pj) => {
    if (pj.genero === "unknown") {
      acumulador = acumulador + 1;
    }
    return acumulador;
  }, 0);

  const vivos = personajes.reduce((acumulador, pj) => {
    if (pj.estado === "Alive") {
      acumulador = acumulador + 1;
    }
    return acumulador;
  }, 0);

  const muertos = personajes.reduce((acumulador, pj) => {
    if (pj.estado === "Dead") {
      acumulador = acumulador + 1;
    }
    return acumulador;
  }, 0);

  const desconocidos = personajes.reduce((acumulador, pj) => {
    if (pj.estado === "unknown") {
      acumulador = acumulador + 1;
    }
    return acumulador;
  }, 0);

  const rickMorty = personajes.reduce((acumulador, pj) => {
    if (pj.origen === "Rick and Morty") {
      acumulador = acumulador + 1;
    }
    return acumulador;
  }, 0);

  const simpsons = personajes.reduce((acumulador, pj) => {
    if (pj.origen === "The Simpsons") {
      acumulador = acumulador + 1;
    }
    return acumulador;
  }, 0);

  estadisticas.innerHTML = ` <h2>Estadisticas</h2>
  <p>Total: ${personajes.length}</p>
  
  <h3>Estados</h3>
  <p>Vivos: ${vivos}</p>
  <p>Muertos: ${muertos}</p>
  <p>Desconocidos: ${desconocidos}</p>
  
  <h3>Generos</h3>
  <p>Masculinos: ${masculinos}</p>
  <p>Femeninos: ${femeninos}</p>
  <p>Desconocido: ${desconocidoGenero}</p>
  
  <h3>Universos</h3>
  <p>Rick and Morty: ${rickMorty}</p>
  <p>The Simpsons: ${simpsons}</p>`;
}

let listaFavoritos = [];

function cargarFav() {
  const guardados = localStorage.getItem("favoritos");

  if (guardados) {
    listaFavoritos = JSON.parse(guardados);
  }

  mostrarFav();
}

function agregarFav(id) {
  const personaje = personajesFinales.find((p) => p.id === id);

  if (!personaje) {
    return;
  }

  const existe = listaFavoritos.some((p) => p.id === personaje.id);

  if (!existe) {
    listaFavoritos.push(personaje);
  }

  localStorage.setItem("favoritos", JSON.stringify(listaFavoritos));

  mostrarFav();
  mostrarTarjetas(personajesFinales);
}

function quitarFav(id) {
  listaFavoritos = listaFavoritos.filter((p) => p.id !== id);

  localStorage.setItem("favoritos", JSON.stringify(listaFavoritos));

  mostrarFav();
  mostrarTarjetas(personajesFinales);
}

function mostrarFav() {
  favoritos.innerHTML = "";

  if (listaFavoritos.length === 0) {
    return;
  }

  favoritos.innerHTML = "<h2>Favoritos</h2>";

  listaFavoritos.forEach((p) => {
    favoritos.innerHTML += `<div>
        <p>${p.nombre}</p>
        <button onclick="quitarFav(${p.id})"> Quitar </button>
      </div>`;
  });
}

btnBuscar.addEventListener("click", busqueda);
cargarFav();
