let botones = document.querySelectorAll("button");
let letrero = document.querySelector(".letrero");

var resultados = [];
var estaTrampaActivada = Boolean(false);

for (let boton of botones) {
  boton.addEventListener("click", function () {
    let simboloJug = boton.getAttribute("id");
    //console.log(simboloJug);

    switch (simboloJug) {
      case "piedra":
      case "papel":
      case "tijera":
        gestionarRonda(simboloJug);
        break;
      case "trampa":
        if (!estaTrampaActivada) {
          estaTrampaActivada = true;
          console.log("La trampa se ha activado");
          letrero.textContent = "¡LAS TRAMPAS HAN SIDO ACTIVADAS!";
        } else {
          estaTrampaActivada = false;
          console.log("La trampa se ha desactivado");
          letrero.textContent = "¡LAS TRAMPAS HAN SIDO DESACTIVADAS!";
        }
        break;
      case "fin":
        final();
        break;

      default:
        break;
    }
  });
}

function getSimbolo() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "piedra";
    case 1:
      return "papel";
    case 2:
      return "tijera";
  }
}

/**
 *
 * @param {Simbolo jugador} simbolo1
 * @param {Simbolo IA} simbolo2
 */
function quienGana(simbolo1, simbolo2) {
  if (simbolo1 == simbolo2) {
    letrero.textContent = "¡LA PARTIDA TERMINA EN EMPATE! :)";
    return 0;
  }

  if (simbolo1 == "piedra" && simbolo2 == "tijera") {
    letrero.textContent = "¡HA GANADO EL JUGADOR! :)";
    return 1;
  } else if (simbolo1 == "tijera" && simbolo2 == "papel") {
    letrero.textContent = "¡HA GANADO EL JUGADOR! :)";
    return 1;
  } else if (simbolo1 == "papel" && simbolo2 == "piedra") {
    letrero.textContent = "¡HA GANADO EL JUGADOR! :)";
    return 1;
  } else {
    letrero.textContent = "¡HA GANADO LA MÁQUINA! :(";
    return 2;
  }
}

function gestionarRonda(simboloJugador) {
  let simboloIA = getSimbolo();
  if (estaTrampaActivada) {
    simboloIA = hacerTrampas(simboloJugador);
  }
  switch (quienGana(simboloJugador, simboloIA)) {
    case 0:
      resultados.push({
        jugador: simboloJugador,
        IA: simboloIA,
        puntos: 0,
      });
      break;
    case 1:
      resultados.push({
        jugador: simboloJugador,
        IA: simboloIA,
        puntos: 1,
      });
      break;
    case 2:
      resultados.push({
        jugador: simboloJugador,
        IA: simboloIA,
        puntos: 0,
      });
      break;

    default:
      break;
  }

  mostrarSimboloDOM(simboloJugador, simboloIA);
}

function mostrarSimboloDOM(simboloJug, simboloIA) {
  let resultadoJugador = document.querySelector(".jugador");
  let resultadoIA = document.querySelector(".IA");
  resultadoJugador.innerHTML = `<p id="jugador">${dameEmoji(simboloJug)}</p>`;
  resultadoIA.innerHTML = `<p id="IA">${dameEmoji(simboloIA)}</p>`;
}

function dameEmoji(simbolo) {
  switch (simbolo) {
    case "piedra":
      return "&#9994;";
    case "papel":
      return "&#9995;";
    case "tijera":
      return "&#9996;";
  }
}

function porcentajeVictorias(partidas, puntos) {
  return Math.round((puntos / partidas) * 100);
}

function final() {
  let contadorPuntos = 0;
  let numerorondas = resultados.length;

  for (let resultado of resultados) {
    if (resultado.puntos == 1) {
      contadorPuntos++;
    }
  }
  window.alert(
    "El jugador ha obtenido un total de: " +
      contadorPuntos +
      " y su porcentaje de victorias es un total del: " +
      porcentajeVictorias(numerorondas, contadorPuntos) +
      "%"
  );
  console.log(resultados);
  location.reload();
}

function mostrarHistorial(arrayResultados) {
  for (let i = 0; i < array.length; i++) {}
}

function hacerTrampas(simboloSelect) {
  let random = Math.floor(Math.random() * 10);
  if (random < 4) {
    return ganarMaquina(simboloSelect);
  } else if (random > 4 && random < 8) {
    return empatarMaquina(simboloSelect);
  } else {
    perderMaquina(simboloJugador);
  }
}

function ganarMaquina(simboloJugador) {
  switch (simboloJugador) {
    case "piedra":
      return "papel";
    case "papel":
      return "tijera";
    case "tijera":
      return "piedra";
  }
}

function empatarMaquina(simboloJugador) {
  return simboloJugador;
}

function perderMaquina(simboloJugador) {
  switch (simboloJugador) {
    case "piedra":
      return "tijera";
    case "papel":
      return "piedra";
    case "tijera":
      return "papel";
  }
}
