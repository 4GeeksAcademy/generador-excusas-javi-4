/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/img-excusas.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//  console.log("Hello Rigo from the console!");
//};
// Algoritnmo de excusas
let quien = [
  "Mi perro",
  "Mi abuela",
  "Un extraterrestre",
  "Mi hermano",
  "El cartero",
  "Un vecino",
  "Mi gato",
  "Un hacker",
  "Un amigo",
  "Mi jefe"
];

let que = [
  "se unió a un culto satánico",
  "vendió mis riñones en la deep web",
  "reescribió mi tesis con emojis",
  "se tatuó mi contraseña bancaria",
  "decidió quemar la Constitución",
  "secuestró a mi Roomba",
  "me llamó para que le acompañase a tirar un anillo en Mordor",
  "inscribió a mi abuela en OnlyFans",
  "cambió mi nombre legal a 'Pancracio'",
  "organizó un torneo de lucha ilegal"
];

let como = [
  "mientras lideraba un sacrificio",
  "usando mi foto de perfil",
  ", exigió pago en bitcoin",
  "en mi casa",
  "por un desafío en TikTok",
  ", exigió un rescate",
  "mientras orinaba en mi sofá",
  "con el nombre de usuario 'abuelacaliente69'",
  "porque estaba borracho",
  "en el estacionamiento"
];

let consecuencia = [
  "y tuve que esconderme en el baño.",
  "y tuve que empezar una carrera como gurú espiritual.",
  "y tuve que vender sus órganos por eBay.",
  "y tuve que escribir una tesis sobre el tema.",
  "y tuve que huir del país con mi hermano.",
  "y tuve que enviarle un paquete de arroz con amor para que se calmara.",
  "y tuve que correr desnudo por la calle.",
  "y tuve que fingir mi propio secuestro.",
  "y tuve que ir a por pañales porque me había cagado encima.",
  "y decidí hacerme amigo de los cactus y no abandonarlos jamás."
];

// Función para obtener la frase aleatoria
function fraseAleatoria(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Función para generar la excusa
function excusa() {
  let parte1 = fraseAleatoria(quien);
  let parte2 = fraseAleatoria(que);
  let parte3 = fraseAleatoria(como);
  let parte4 = fraseAleatoria(consecuencia);
  var excusa = "";

  //document.querySelector("#excusa").innerHTML = `${parte1} +' '+ ${parte2} +' '+ ${parte3} +' '+ ${parte4}`;
}

// Ejecutar y mostrar la excusa
console.log(excusa());

window.onload = function() {
  //write your code here
  excusa =
    quien[Math.floor(Math.random() * quien.length)] +
    " " +
    que[Math.floor(Math.random() * que.length)] +
    " " +
    como[Math.floor(Math.random() * como.length)] +
    " " +
    consecuencia[Math.floor(Math.random() * consecuencia.length)];

  document.getElementById("excusa").innerHTML = excusa;
};
