var flag, //Variabile booleana per blocco funzione ricorsiva
signalActive = [false, false, false], //Array booleano per controllo segnali attivi, quindi > 0
color, //Variabile intera per contenere numero di colori dati in input
sound, //Variabile intera per contenere numero di suoni dati in input
picture, //Variabile intera per contenere numero di figure dati in input
delayRandom, //Variabile intera per contenere il numero random per "setTimeout"
delayMin, //Variabile intera per contenere ritardo minimo dato in input
delayMax, //Variabile intera per contenere ritardo massimo dato in input
timeShow, //Variabile intera per contenere tempo di visualizzazione del segnale dato in input
canvas,
ctx;

/* Funzione eseguibile all'evento onClick del btn "start".
  - Inizializzazione delle variabili con dati presi dai tag HTML di input;
  - Inizializzazione di altre variabili;
  - Attribuzione di larghezza e altezza del canvas;
  - Spostamento del focus sul canvas;
  - setTimeout sulla funzione "randomSignal" */
function start() {
  color = document.getElementById("color").value;
  sound = document.getElementById("sound").value;
  picture = document.getElementById("picture").value;
  delayMin = Number(document.getElementById("min").value); //Sicurezza che venga inizializzata come INT
  delayMax = Number(document.getElementById("max").value); //Sicurezza che venga inizializzata come INT
  timeShow = Number(document.getElementById("timeShow").value); //Sicurezza che venga inizializzata come INT
  flag = true; //Impostazione del flag di uscita su TRUE

  canvas = document.getElementById("drawZone");
  ctx = canvas.getContext("2d");
  window.addEventListener('resize', resizeCanvas, false); //Evento per modificare dimensioni canvas allo zoom della pagina
  window.addEventListener('orientationchange', resizeCanvas, false); //Evento per modificare dimensioni canvas al cambiamento di orientamento
  resizeCanvas();

  numberSignal = 0; //Algoritmo per salvare i segnali attivati
  if (color > 0) signalActive[0] = true;
  else signalActive[0] = false;
  if (sound > 0) signalActive[1] = true;
  else signalActive[1] = false;
  if (picture > 0) signalActive[2] = true;
  else signalActive[2] = false;

  if (signalActive[0] == false && signalActive[1] == false && signalActive[2] == false) { //Controllo se ci sono segnali attivi
    alert("Nessun segnale inserito!")
  }
  else {
    window.location.href="#drawZone"; //Spostamento focus su drawZone
    clear(); //Pulizia drawZone
    countdown(3);
    setTimeout("countdown(2)", 1000);
    setTimeout("countdown(1)", 2000);
    setTimeout(randomSignal, 3000); //Inizio funzione ricorsiva
  }
}

/* Funzione ricorsiva per scegliere randomicamente il segnale da mandare in output*/
function randomSignal() {
  clear(); //Pulizia drawZone, fondamentale per il countdown
  var tmp;
  do { //Ciclo per numero random
    tmp = (Math.floor(Math.random() * 3));
  } while (signalActive[tmp] == false); //ATTENZIONE RISCHIO CICLO INFINITO

  switch (tmp) {
    case 0:
      drawColor();
      break;
    case 1:

      break;
    case 2:
      drawPicture();
      break;
  }

  setTimeout(clear, timeShow); //Pulizia di drawZone con ritardo dato in input

  delayRandom = Math.floor(Math.random() * (delayMax - delayMin + 1)) + delayMin; //Metodo per trovare un ritardo randomico tra due input
  if (flag == true)
    setTimeout(randomSignal, delayRandom);

}

/* Funzione per pulizia drawZone*/
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/* Funzione per scelta randomica del colore in output */
function drawColor() {
var tmp = (Math.floor(Math.random() * color)) + 1;

switch (tmp) {
  case 1:
    ctx.fillStyle = "red"; //Impostazione del colore
    break;
  case 2:
    ctx.fillStyle = "blue"; //Impostazione del colore
    break;
  case 3:
    ctx.fillStyle = "yellow"; //Impostazione del colore
    break;
  case 4:
    ctx.fillStyle = "black"; //Impostazione del colore
    break;
  case 5:
    ctx.fillStyle = "green"; //Impostazione del colore
    break;
  }

  ctx.fillRect(0,0, canvas.width, canvas.height); //Disegno del rettangolo di colore scleto precedentemente
}

/* Funzione per scelta randomica della figura in output, utilizzo delle dimensioni
del canvas per creare figure responsive */
function drawPicture () {
  var tmp = (Math.floor(Math.random() * picture)) + 1;

  switch (tmp) {
    case 1:
      ctx.beginPath();
      ctx.arc((canvas.width/2),(canvas.height/2),(canvas.height/2),0,2*Math.PI);
      ctx.stroke();
      break;
    case 2:
      ctx.beginPath();
      ctx.rect(0,(canvas.height/4),canvas.width,(canvas.height/2));
      ctx.stroke();
      break;
    case 3:
      ctx.beginPath();
      ctx.moveTo((canvas.width/2), 0);
      ctx.lineTo(0, canvas.height);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.stroke();
      break;
    case 4:
      ctx.beginPath();
      ctx.rect((canvas.width/4),(canvas.height/4),(canvas.width/2),(canvas.height/2));
      ctx.stroke();
      break;
    case 5:
      ctx.beginPath();
      ctx.moveTo((canvas.width/2), 0);
      ctx.lineTo(0, (canvas.height/2));
      ctx.lineTo((canvas.width/2), canvas.width);
      ctx.lineTo(canvas.width, (canvas.height/2));
      ctx.closePath();
      ctx.stroke();
      break;
  }
}

/* Funzione per uscita dalla funzione ricorsiva "randomSignal" */
function stop() {
  flag = false;
}

/* Funzione per modifica parametri di altezza e larghezza canvas, si cerca di creare un quadrato per migliorare visibilità */
function resizeCanvas() {
  if (window.innerWidth < window.innerHeight) {
    canvas.width = window.innerWidth;
    canvas.height = canvas.width;
  }
  else {
    canvas.height = window.innerHeight;
    canvas.width = canvas.height;
  }
}

/* Funzione per countdown iniziale */
function countdown(string) {
  clear();
  ctx.font = "15px Arial";
  ctx.textAlign = "center";
  ctx.fillText(string, (canvas.width/2), (canvas.height/2));
}
