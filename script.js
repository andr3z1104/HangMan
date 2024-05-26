
const letra = document.getElementById("contenerdor-letras");
const opciones_juegos = document.getElementById("opciones_juegos");
const input_usuario = document.getElementById("input_usuario");
const boton_juego_nuevo = document.getElementById("boton_juego_nuevo");
const juego_finalizado = document.getElementById("juego_finalizado");
const canvas = document.getElementById("canvas");
const resultado_final = document.getElementById("resultado_final");
const timer = document.getElementById("timer");

boton_juego_nuevo.addEventListener('click', NewGame);
let num_errores = 0;
let num_aciertos = 0;
let palabra;


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
  num_errores = 0;
  num_aciertos = 0;

  const len_palabras = palabras.length;
  const valor_palabra = palabraRandom(len_palabras);
  palabra = palabras[valor_palabra];
  const len_palabra = palabra.length;


  console.log(palabra);

  for( let i =0; i < len_palabra; i++ ){
    const raya = document.createElement('span');
    adivinar.appendChild(raya);
  }

}

const btn_letras = document.querySelectorAll('#botones_letras button');

for ( let i = 0; i < btn_letras.length ; i++){
  btn_letras[i].addEventListener('click', click_letras);

}


function click_letras(event){
  const spans = document.querySelectorAll('#palabra_secreta span');
  const button = event.target;
  button.disabled = true;
  const letra = button.innerHTML.toUpperCase();
  const palabra_comprueba = palabra.toUpperCase();

  let acerto = false;
  for(let i = 0; i < palabra_comprueba.length; i++){
    if(letra == palabra_comprueba[i]){
      spans[i].innerHTML = letra;
      acerto = true;
      num_aciertos++;
    }
  }

  if(acerto == false){
    num_errores++;
    //aqui van las imagenes con el canvas 50
  }

  if(num_errores == 5){
    alert('Perdiste porque el personaje fue ahorcado! La palabra era-->' + palabra_comprueba);
  }else if(num_aciertos == palabra_comprueba.length){
    alert('Ganaste! el personaje sobrevivio al ahorcamiento. ');
  }

  console.log( 'la letra' + letra + "palabra" + palabra_comprueba + "existe?" + acerto );
}

