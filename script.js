let botones = document.querySelectorAll("button");

function generarSimbolo() {
  let ale = Math.floor(Math.random() * 3);
  switch (ale) {
    case 0:
      return "piedra";
      break;
    case 1:
      return "papel";
      break;
    case 2:
      return "tijera";
      break;
    default:
      break;
  }
}

function simboloMayor(string1, string2) {
  if (string1 == "piedra" && string2 == "tijera") {
    return 1;
  } else if (string2 == "piedra" && string1 == "tijera") {
    return 2;
  } else if (string1 == "tijera" && string2 == "papel") {
    return 1;
  } else if (string2 == "tijera" && string1 == "papel") {
    return 2;
  } else if (string1 == "papel" && string2 == "piedra") {
    return 1;
  } else if (string2 == "papel" && string1 == "piedra") {
    return 2;
  } else {
    return 3;
  }
}

function trampa(simbJUg) {
  let numAle = Math.floor(Math.random() * 10);
  let simboloIA = generarSimbolo();
  if (numAle < 10) {
    if (simbJUg == "piedra") {
      return "papel";
    } else if (simbJUg == "papel") {
      return "tijera";
    } else if (simbJUg == "tijera") {
      return "piedra";
    }
  }
}

for (let index = 0; index < botones.length; index++) {
  botones[index].addEventListener("click", function (b) {
    let simboloJug = botones[index].getAttribute("id");
    switch (simboloJug) {
      case "trampa":
        let simboloIAtrampa = trampa(simboloJug);
        if (simboloMayor(simboloJug, simboloIAtrampa) == 1) {
          window.alert("Ha ganado el jugador!");
          location.reload();
        } else if (simboloMayor(simboloJug, simboloIAtrampa) == 2) {
          window.alert("Ha ganado la maquina!");
          location.reload();
        } else {
          window.alert("La partida termina en Empate!");
          location.reload();
        }
        break;
      case "fin":
        break;
      case "piedra":
      case "papel":
      case "tijera":
        let simboloIA = generarSimbolo();
        console.log(simboloIA);
        if (simboloMayor(simboloJug, simboloIA) == 1) {
          window.alert("Ha ganado el jugador!");
          location.reload();
        } else if (simboloMayor(simboloJug, simboloIA) == 2) {
          window.alert("Ha ganado la maquina!");
          location.reload();
        } else {
          window.alert("La partida termina en Empate!");
          location.reload();
        }
        break;
      default:
        break;
    }
  });
}
