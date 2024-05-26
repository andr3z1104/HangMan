boton_juego_nuevo.addEventListener('click', () =>{
  NewGame();
  limpiarCanva();
  resetTimer();
  run();
});

let num_errores = 0;
let num_aciertos = 0;
let puntaje = 0;
let palabra_acertada = 0; //recordarrrrrrr
let palabra;
let intervalId;
let start_tiempo = 0;
let current_tiempo = 0;
let elapsed_tiempo = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
const timer = document.getElementById('timer_block');
timer.style.fontFamily = 'Helvetica'; 
timer.style.fontWeight = 'Bold';
timer.style.fontSize = '20px';


const palabras =  [
  'manzana', 'pera', 'banana', 'naranja', 'uva', 'sandia', 'kiwi', 'mango', 'fresa', 'piña',
  'aguacate', 'albaricoque', 'cereza', 'ciruela', 'coco', 'durazno', 'frambuesa', 'granada',
  'higo', 'lima', 'limon', 'trigo', 'mandarina', 'maracuya', 'melocoton', 'melon', 'moras',
  'papaya', 'pomelo', 'zarzamora', 'arandano', 'caqui', 'carambola', 'chirimoya', 'lechuga',
  'guanabana', 'guayaba', 'pepino', 'tomate', 'cebolla', 'ajo', 'zanahoria', 'brocoli', 'espinaca', 'col', 'pimiento', 'berenjena',
  'calabaza', 'remolacha', 'alcachofa', 'esparrago', 'apio', 'champiñon', 'lentejas', 'garbanzo',
  'arroz', 'pasta', 'queso', 'pollo', 'res', 'cerdo', 'pescado', 'camaron', 'langosta', 'cangrejo',
  'mejillon', 'ostra', 'calamar', 'pulpo', 'sardina', 'atun', 'salmon', 'trucha', 'bacalao', 'merluza'
];


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
  puntaje = 0
  num_errores = 0;
  num_aciertos = 0;
  palabra_acertada = 0;
  ocultarBoton();
  cambiar_valor_puntos();
  palabras_acertadas();

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
      puntaje = puntaje + 50;
      num_aciertos++;
      cambiar_valor_puntos();
    }
  }

  if(acerto == false){
    num_errores++;
    if (puntaje > 0){
      puntaje = puntaje - 50;
    }else if(puntaje == 0){
      puntaje = puntaje;
    }

    ahorcado_trazo(num_errores);
    cambiar_valor_puntos();
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
    agregarUsuario();
    jugar_de_nuevo();
  }else if(num_aciertos == palabra_comprueba.length){
    alert('Ganaste! el personaje sobrevivio al ahorcamiento. --> Siguiente nivel ');
    palabra_acertada++;
    nextlevel();
  }

  console.log( 'la letra' + letra + "palabra" + palabra_comprueba + "existe?" + acerto );
}

function jugar_de_nuevo(){
  for ( let i = 0; i < btn_letras.length ; i++){
    btn_letras[i].disabled = true;
  }
  mostrarBoton();
  stopTimer();
}

window.onload = function(){
  for ( let i = 0; i < btn_letras.length ; i++){
    btn_letras[i].disabled = true;
  }

}

function agregarUsuario() {
  const nuevoUsuario = prompt("Ingresa el nombre del nuevo usuario:" + puntaje);
  if (nuevoUsuario) {
      const lista = document.getElementById("lista_usuarios");
      const nuevoElemento = document.createElement("li");
      nuevoElemento.textContent = nuevoUsuario + '->' + puntaje + " puntos " + palabra_acertada + " palabras acertadas " + hrs+':'+ mins+':'+secs + ' tiempo';
      lista.appendChild(nuevoElemento);
  }
}

function cambiar_valor_puntos() {
  const nuevo_record = document.getElementById('record_actual');
  nuevo_record.innerText = puntaje;
  nuevo_record.style.fontFamily = 'Helvetica'; 
  nuevo_record.style.fontWeight = 'Bold';
  nuevo_record.style.fontSize = '20px';
}

function palabras_acertadas() {
  const numero_palabras_acertadas = document.getElementById('intentos');
  numero_palabras_acertadas.innerText = palabra_acertada;
  numero_palabras_acertadas.style.fontFamily = 'Helvetica'; 
  numero_palabras_acertadas.style.fontWeight = 'Bold';
  numero_palabras_acertadas.style.fontSize = '20px';
}//recordarrrrrrrrrrrr



function nextlevel(){
  const adivinar = document.getElementById("palabra_secreta");
  adivinar.innerHTML= '';
  num_aciertos = 0;
  cambiar_valor_puntos();//cuidadoooooooo
  palabras_acertadas();//aaaa

  const len_palabras = palabras.length;
  const valor_palabra = palabraRandom(len_palabras);
  palabra = palabras[valor_palabra];
  const len_palabra = palabra.length;

  for ( let i = 0; i < btn_letras.length ; i++){
    btn_letras[i].disabled = false;
  
  }//habilitar otra vez las letras despues de otro juego


  console.log(palabra);

  for( let i =0; i < len_palabra; i++ ){
    const raya = document.createElement('span');
    adivinar.appendChild(raya);
  }

}


function run(){
  start_tiempo = Date.now() -elapsed_tiempo;
  intervalId = setInterval(updateTimer, 75);
}


function updateTimer(){
  elapsed_tiempo = Date.now() - start_tiempo;

  secs = Math.floor((elapsed_tiempo / 1000) % 60);
  mins = Math.floor((elapsed_tiempo / (1000*60)) % 60);
  hrs = Math.floor((elapsed_tiempo / (1000*60*60)) % 60);



  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timer.innerHTML = `${hrs}:${mins}:${secs}`;
  

  function pad(unit){
    return (("0") +unit).length > 2 ? unit: "0" +unit;
  }


}

function resetTimer(){
  clearInterval(intervalId);
    start_tiempo = 0;
     elapsed_tiempo = 0;
     current_tiempo = 0;
     hrs = 0;
     mins = 0;
     secs = 0;
    timer.textContent = "00:00:00"
  
}

function stopTimer(){
  elapsed_tiempo = Date.now() - start_tiempo;
  clearInterval(intervalId);
}