

const CANTIDAD_RESULTADOS = 3;
const SECUENCIA_SECRETA = "sulek";
const CLICS_PARA_ABRIR = 3;

/* ---------- Foto de perfil ---------- */
const fotoPerfil = document.querySelector(".foto-perfil img");
fotoPerfil.addEventListener("error", () => {
  fotoPerfil.src = "https://media.tenor.com/0X1g6k5r8iAAAAAM/sam-sulek-sam-sulek-gif.gif";
});

/* ---------- Pestañas de rutinas ---------- */
const pestanas = document.querySelectorAll('[role="tab"]');

function activarPestana(pestanaElegida) {
  pestanas.forEach((pestana) => {
    const seleccionada = pestana === pestanaElegida;
    pestana.setAttribute("aria-selected", String(seleccionada));
    document.getElementById(pestana.getAttribute("aria-controls")).hidden = !seleccionada;
  });
}
pestanas.forEach((pestana) => pestana.addEventListener("click", () => activarPestana(pestana)));

/* ---------- Ejercicios por grupo muscular ---------- */
const selectorGrupos = document.getElementById("selector-grupos");
const listaEjercicios = document.getElementById("lista-ejercicios");

/** Dibuja las tarjetas de ejercicios del grupo elegido. */
function mostrarEjercicios(grupo) {
  selectorGrupos.querySelectorAll("button").forEach((boton) => {
    boton.setAttribute("aria-pressed", String(boton.textContent === grupo));
  });

  listaEjercicios.replaceChildren();
  EJERCICIOS_POR_GRUPO[grupo].forEach((ejercicio) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "ejercicio";

    const titulo = document.createElement("h3");
    titulo.textContent = ejercicio.nombre;

    const ejecucion = document.createElement("p");
    ejecucion.textContent = ejercicio.ejecucion;

    const error = document.createElement("p");
    error.className = "etiqueta-error";
    error.textContent = `Error común: ${ejercicio.errorComun}`;

    tarjeta.append(titulo, ejecucion, error);
    listaEjercicios.appendChild(tarjeta);
  });
}

Object.keys(EJERCICIOS_POR_GRUPO).forEach((grupo) => {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.textContent = grupo;
  boton.setAttribute("aria-pressed", "false");
  boton.addEventListener("click", () => mostrarEjercicios(grupo));
  selectorGrupos.appendChild(boton);
});
mostrarEjercicios("Pecho");

/* ---------- Easter egg ---------- */
const dialogoSecreto = document.getElementById("dialogo-secreto");
const campoAltura = document.getElementById("campo-altura");
const campoPeso = document.getElementById("campo-peso");
const contenedorResultados = document.getElementById("resultados-secreto");

/** Distancia entre el usuario y un fisicoculturista (altura y peso en la misma escala). */
function calcularDistancia(alturaCm, pesoKg, rival) {
  return Math.hypot((alturaCm - rival.alturaCm) / 10, (pesoKg - rival.pesoKg) / 10);
}

/** Crea una fila con nombre, medidas y diferencia respecto al usuario. */
function crearFicha(nombre, medidas, esUsuario) {
  const ficha = document.createElement("div");
  ficha.className = esUsuario ? "ficha tu" : "ficha";
  const titulo = document.createElement("strong");
  titulo.textContent = nombre;
  const detalle = document.createElement("span");
  detalle.textContent = medidas;
  ficha.append(titulo, detalle);
  return ficha;
}

function compararConLeyendas() {
  const alturaCm = Number(campoAltura.value);
  const pesoKg = Number(campoPeso.value);
  if (!alturaCm || !pesoKg) {
    contenedorResultados.textContent = "Escribe una altura y un peso válidos.";
    return;
  }

  const masParecidos = [...FISICOCULTURISTAS]
    .sort((a, b) => calcularDistancia(alturaCm, pesoKg, a) - calcularDistancia(alturaCm, pesoKg, b))
    .slice(0, CANTIDAD_RESULTADOS);

  contenedorResultados.replaceChildren(crearFicha("Tú", `${alturaCm} cm · ${pesoKg} kg`, true));
  masParecidos.forEach((rival) => {
    const diferenciaPeso = rival.pesoKg - pesoKg;
    const signo = diferenciaPeso >= 0 ? "+" : "";
    contenedorResultados.appendChild(
      crearFicha(rival.nombre, `${rival.alturaCm} cm · ${rival.pesoKg} kg (${signo}${diferenciaPeso} kg)`, false)
    );
  });
}

function abrirEasterEgg() {
  dialogoSecreto.showModal();
  compararConLeyendas();
}
document.getElementById("boton-comparar").addEventListener("click", compararConLeyendas);

// Activación 1: teclear «sulek» fuera de un campo de texto
let letrasTecleadas = "";
document.addEventListener("keydown", (evento) => {
  if (evento.target.tagName === "INPUT") return;
  letrasTecleadas = (letrasTecleadas + evento.key.toLowerCase()).slice(-SECUENCIA_SECRETA.length);
  if (letrasTecleadas === SECUENCIA_SECRETA) abrirEasterEgg();
});

// Activación 2: triple clic seguido en el logo
let clicsSeguidos = 0;
let temporizadorClics;
document.getElementById("logo").addEventListener("click", () => {
  clicsSeguidos += 1;
  clearTimeout(temporizadorClics);
  temporizadorClics = setTimeout(() => { clicsSeguidos = 0; }, 800);
  if (clicsSeguidos === CLICS_PARA_ABRIR) {
    clicsSeguidos = 0;
    abrirEasterEgg();
  }
});
