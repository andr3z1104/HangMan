boton_juego_nuevo.addEventListener('click', () =>{
  NewGame();
  limpiarCanva();
});

let num_errores = 0;
let num_aciertos = 0;
let palabra;


const palabras = ['manzana', 'pera', 'banana', 'naranja', 'uva', 'sandia', 'kiwi', 'mango', 'fresa', 'piña'];

const canvas = document.getElementById('canvas');
const canva = canvas.getContext('2d');
canva.clearRect(0,0, canvas.width, canvas.height);


function limpiarCanva(){
  canva.clearRect(0,0, canvas.width, canvas.height);
  return canva;
}


function palabraRandom(len){
  const valor_palabra = Math.floor(Math.random() * len);
  return valor_palabra;
}


function ocultarBoton() {
var boton = document.getElementById("boton_juego_nuevo");
boton.style.display = "none";
}

function mostrarBoton() { 
var boton = document.getElementById("boton_juego_nuevo");
boton.style.display = 'inline';
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
  ocultarBoton();

  const len_palabras = palabras.length;
  const valor_palabra = palabraRandom(len_palabras);
  palabra = palabras[valor_palabra];
  const len_palabra = palabra.length;

  for ( let i = 0; i < btn_letras.length ; i++){
    btn_letras[i].disabled = false;
  
  }//abilitar otra vez las letras despues de otro juego


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
    ahorcado_trazo(num_errores);
  }

  function ahorcado_trazo(num_errores){
    
    switch(num_errores){
      case 1:
        //base
        canva.beginPath();
        canva.moveTo(20, canvas.height -10);
        canva.lineTo(canvas.width - 20, canvas.height -10);
        canva.lineWidth = 5
        canva.stroke();
        break;
      case 2:
        //palo vertical
        canva.beginPath();
        canva.moveTo( 20, canvas.height -10);
        canva.lineTo( canvas.width-280, 10);
        canva.lineWidth = 5
        canva.stroke();
        break;
      case 3:
        //palo horizontal
        canva.beginPath();
        canva.moveTo(18, 10);
        canva.lineTo(canvas.width / 2, 10);
        canva.lineWidth = 5
        canva.stroke();
        break;
      case 4:
        //cuerda
        canva.beginPath();
        canva.moveTo(canvas.width /2, 10);
        canva.lineTo(canvas.width /2, 30);
        canva.lineWidth = 5
        canva.stroke();
        break;
      case 5:
        //cabeza
        canva.beginPath();
        //https://www.w3schools.com/html/html5_canvas.asp
        canva.arc(canvas.width /2, 50, 20, 0, Math.PI *2);
        canva.lineWidth = 5
        canva.stroke();
        break;
      case 6:
        //cuerpo
        canva.beginPath();
        canva.moveTo(canvas.width /2, 70);
        canva.lineTo(canvas.width /2, 110);
        canva.lineWidth = 5
        canva.stroke();
        break;
      case 7:
        //brazos
        canva.beginPath();
        canva.moveTo(canvas.width /2, 80);
        canva.lineTo(canvas.width /2 -20, 100);
        canva.moveTo(canvas.width /2, 80);
        canva.lineTo(canvas.width /2 +20, 100);
        canva.lineWidth = 5
        canva.stroke();
        break;
      case 8:
        //piernas
        canva.beginPath();
        canva.moveTo(canvas.width /2, 110);
        canva.lineTo(canvas.width /2 -20, 130);
        canva.moveTo(canvas.width /2, 110);
        canva.lineTo(canvas.width /2 +20, 130);
        canva.lineWidth = 5
        canva.stroke();

        canva.beginPath();
        canva.arc(canvas.width /2, 60, 10, 0, Math.PI, true);
        canva.lineWidth = 2
        canva.stroke();

        canva.font = 'bold 20px Arial';
        canva.fillText('x', canvas.width/2, canvas.height/2-26.5);
        canva.fillText('x', canvas.width/2-13, canvas.height/2-26.5);

        break;
    }

  }


  if(num_errores == 8){
    alert('Perdiste porque el personaje fue ahorcado! La palabra era-->' + palabra_comprueba);
    jugar_de_nuevo();
  }else if(num_aciertos == palabra_comprueba.length){
    alert('Ganaste! el personaje sobrevivio al ahorcamiento. ');
    jugar_de_nuevo();
  }

  console.log( 'la letra' + letra + "palabra" + palabra_comprueba + "existe?" + acerto );
}

function jugar_de_nuevo(){
  for ( let i = 0; i < btn_letras.length ; i++){
    btn_letras[i].disabled = true;
  }
  mostrarBoton();
  
}

window.onload = function(){
  for ( let i = 0; i < btn_letras.length ; i++){
    btn_letras[i].disabled = true;
  }

}