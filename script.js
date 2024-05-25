
const letra = document.getElementById("contenerdor-letras");
const opciones_juegos = document.getElementById("opciones_juegos");
const input_usuario = document.getElementById("input_usuario");
const boton_juego_nuevo = document.getElementById("boton_juego_nuevo");
const juego_finalizado = document.getElementById("juego_finalizado");
const canvas = document.getElementById("canvas");
const resultado_final = document.getElementById("resultado_final");
const timer = document.getElementById("timer")

boton_juego_nuevo.addEventListener('click', NewGame);

const palabras = ['manzana', 'pera', 'banana', 'naranja', 'uva', 'sandía', 'kiwi', 'mango', 'fresa', 'piña'];


function palabraRandom(len){
  const valor_palabra = Math.floor(Math.random() * len);
  return valor_palabra;
}



function ocultarBoton() {
var boton = document.getElementById("boton_juego_nuevo");
boton.style.display = "none";
}


function ocultarletra() {
  var letras = document.getElementsByClassName("botones_letras");
  for (var i = 0; i < letras.length; i++) {
      letras[i].style.display = "none";
  }
}


function reiniciarJuego() {
  var boton = document.getElementById("button_new_Game");
  boton.style.display = "block";
}


function NewGame(event){
  const adivinar = document.getElementById("palabra_secreta");
  adivinar.innerHTML= '';

  const len_palabras = palabras.length;
  const valor_palabra = palabraRandom(len_palabras);
  const palabra = palabras[valor_palabra]
  const len_palabra = palabra.length;

  console.log(palabra);

  for( let i =0; i < len_palabra; i++ ){
    const raya = document.createElement('span');
    adivinar.appendChild(raya);
  }

}



