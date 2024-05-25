(function() {
  const letra = document.getElementById("contenerdor-letras");
  const opciones_juegos = document.getElementById("opciones_juegos");
  const input_usuario = document.getElementById("input_usuario");
  const boton_juego_nuevo = document.getElementById("boton_juego_nuevo");
  const juego_finalizado = document.getElementById("juego_finalizado");
  const canvas = document.getElementById("canvas");
  const resultado_final = document.getElementById("resultado_final");
  const timer = document.getElementById("timer");


  function ocultarBoton() {
    var boton = document.getElementById("button_new_game");
    boton.style.display = "none";
  }

  function ocultarletra() {
    var letras = document.getElementsByClassName("botones_letras");
    for (var i = 0; i < letras.length; i++) {
        letras[i].style.display = "none";
    }
  }

  function crearListaAZ() {
  var lista = [];
  for (var i = 65; i <= 90; i++) {
    var letra = String.fromCharCode(i);
    lista.push(letra);
  }
  return lista;
  }
  var listaAZ = crearListaAZ();
  console.log(listaAZ);



  function reiniciarJuego() {
    var boton = document.getElementById("button_new_Game");
    boton.style.display = "block";
  }
  console.log("¡Hola desde la función autoejecutable!");
})();




