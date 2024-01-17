let botones = document.querySelectorAll("button");

var resultados = [];

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
        trampa();
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
    return 0;
  }

  if (simbolo1 == "piedra" && simbolo2 == "tijera") {
    return 1;
  } else if (simbolo1 == "tijera" && simbolo2 == "papel") {
    return 1;
  } else if (simbolo1 == "papel" && simbolo2 == "piedra") {
    return 1;
  } else {
    return 2;
  }
}

function gestionarRonda(simboloJugador) {
  let simboloIA = getSimbolo();

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

  resultadoJugador.textContent = simboloJug;
  resultadoIA.textContent = simboloIA;
}

function porcentajeVictorias(partidas, puntos){
  return (puntos/partidas)*100;
}

function final() {
  let contadorPuntos = 0;
  let numerorondas = resultados.length;

  for (let resultado of resultados) {
    if (resultado.puntos == 1) {
      contadorPuntos++;
    }
  }

  window.alert("El jugador ha obtenido un total de: "+contadorPuntos+" y su porcentaje de victorias es un total del: "+porcentajeVictorias(numerorondas, contadorPuntos)+"%");
  console.log(resultados);
  //location.reload();
}

function trampaActivada(){
  let activada = new Boolean(false);
  if(activada){
    return false;
  }else{
    return true;
  }
}
function trampa(){
  if(!trampaActivada){
    console.log("la trampa se ha activado");
  }else{
    console.log("la trampa se ha desactivado");
  }
}

function mostrarHistorial(arrayResultados){
  
  for (let i = 0; i < array.length; i++) {
        
  }
}
