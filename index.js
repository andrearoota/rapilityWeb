var flag = false, //Variabile booleana per blocco funzione ricorsiva
signalActive = [false, false, false, false, false, false, false, false, false, false, false, false, false, false], //Array booleano per controllo segnali attivi, quindi > 0
color, //Variabile intera per contenere numero di colori dati in input
sound, //Variabile intera per contenere numero di suoni dati in input
picture, //Variabile intera per contenere numero di figure dati in input
delayRandom, //Variabile intera per contenere il numero random per "setTimeout"
delayMin, //Variabile intera per contenere ritardo minimo dato in input
delayMax, //Variabile intera per contenere ritardo massimo dato in input
timeShow, //Variabile intera per contenere tempo di visualizzazione del segnale dato in input
workTime,
restTime,
sets,
setsCompleted,
canvas,
ctx,
audio_0 = new Audio("sound/single_short_beep.wav"),
audio_1 = new Audio("sound/double_short_beep.wav"),
audio_2 = new Audio("sound/single_long_beep.wav"),
audio_3 = new Audio("sound/single_long_boop.wav");

var countdownWorker, signalWorker;
var obj_countdown;

/* Funzione eseguibile all'evento onClick del btn "start".
- Inizializzazione delle variabili con dati presi dai tag HTML di input;
- Inizializzazione di altre variabili;
- Attribuzione di larghezza e altezza del canvas;
- Spostamento del focus sul canvas;
- setTimeout sulla funzione "randomSignal" */
function start() {
  var flag_check_input = false;
  delayMin = Number(document.getElementById("delayMin").value); //Sicurezza che venga inizializzata come INT
  delayMax = Number(document.getElementById("delayMax").value); //Sicurezza che venga inizializzata come INT
  timeShow = Number(document.getElementById("timeShow").value); //Sicurezza che venga inizializzata come INT
  workTime = Number(document.getElementById("workTime").value); //Sicurezza che venga inizializzata come INT
  restTime = Number(document.getElementById("restTime").value); //Sicurezza che venga inizializzata come INT
  sets = Number(document.getElementById("sets").value); //Sicurezza che venga inizializzata come INT

  if (document.getElementById("delayMin").classList.contains("border-danger")) flag_check_input = true;
  if (document.getElementById("delayMax").classList.contains("border-danger")) flag_check_input = true;
  if (document.getElementById("timeShow").classList.contains("border-danger")) flag_check_input = true;
  if (document.getElementById("switchTimerSetting").checked) {
    if (document.getElementById("workTime").classList.contains("border-danger")) flag_check_input = true;
    if (document.getElementById("restTime").classList.contains("border-danger")) flag_check_input = true;
    if (document.getElementById("sets").classList.contains("border-danger")) flag_check_input = true;
  }


  signalActive[0] = document.getElementById("color_0").checked; //Inizializzazione array signalActive, ".checked" return true se selezionata, altrimenti false
  signalActive[1] = document.getElementById("color_1").checked;
  signalActive[2] = document.getElementById("color_2").checked;
  signalActive[3] = document.getElementById("color_3").checked;
  signalActive[4] = document.getElementById("color_4").checked;
  if (document.getElementById("sound_0") !== null)
    signalActive[5] = document.getElementById("sound_0").checked;
  if (document.getElementById("sound_1") !== null)
    signalActive[6] = document.getElementById("sound_1").checked;
  if (document.getElementById("sound_2") !== null)
    signalActive[7] = document.getElementById("sound_2").checked;
  if (document.getElementById("sound_3") !== null)
    signalActive[8] = document.getElementById("sound_3").checked;
  signalActive[9] = document.getElementById("picture_0").checked;
  signalActive[10] = document.getElementById("picture_1").checked;
  signalActive[11] = document.getElementById("picture_2").checked;
  signalActive[12] = document.getElementById("picture_3").checked;
  signalActive[13] = document.getElementById("picture_4").checked;

  if (signalActive.indexOf(true) == -1) { //Controllo se ci sono segnali attivi
    alert("No signal selected")
  }
  else if (flag_check_input) {
    alert("Invalid values")
  }
  else if (document.getElementById("switchTimerSetting").checked) {
    document.getElementById("show_timeLeft").innerHTML = workTime;
    if (sets == 0)
      document.getElementById("show_setsLeft").innerHTML = 1;
    else
      document.getElementById("show_setsLeft").innerHTML = 1 + "/" + sets;
    document.getElementById("container_show_var").style.visibility = "visible";
    document.getElementById("container_show_var").style.display = "inherit";
    document.getElementById("container_input").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;

    canvas = document.getElementById("drawZone");
    ctx = canvas.getContext("2d");
    window.addEventListener('resize', resizeCanvas, false); //Evento per modificare dimensioni canvas allo zoom della pagina
    window.addEventListener('orientationchange', resizeCanvas, false); //Evento per modificare dimensioni canvas al cambiamento di orientamento
    resizeCanvas();

    window.location.href="#drawZone"; //Spostamento focus su drawZone
    flag = true; //Impostazione del flag di uscita su TRUE
    countdown(6)  // 5 secondi + START
  }
  else {
    document.getElementById("show_timeLeft").innerHTML = "";
    document.getElementById("show_setsLeft").innerHTML = "";
    document.getElementById("container_show_var").style.visibility = "visible";
    document.getElementById("container_show_var").style.display = "inherit";
    document.getElementById("container_input").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;

    canvas = document.getElementById("drawZone");
    ctx = canvas.getContext("2d");
    window.addEventListener('resize', resizeCanvas, false); //Evento per modificare dimensioni canvas allo zoom della pagina
    window.addEventListener('orientationchange', resizeCanvas, false); //Evento per modificare dimensioni canvas al cambiamento di orientamento
    resizeCanvas();

    window.location.href="#drawZone"; //Spostamento focus su drawZone
    flag = true; //Impostazione del flag di uscita su TRUE
    countdown(6)  // 5 secondi + START
  }
}

/* Funzione ricorsiva per scegliere randomicamente il segnale da mandare in output*/
function randomSignal(tmp) {
  clear(); //Pulizia drawZone, fondamentale per il countdown

  switch (tmp) {
    case 0:
    drawColor(tmp);
    break;
    case 1:
    drawColor(tmp);
    break;
    case 2:
    drawColor(tmp);
    break;
    case 3:
    drawColor(tmp);
    break;
    case 4:
    drawColor(tmp);
    break;
    case 5:
    playSound(tmp);
    break;
    case 6:
    playSound(tmp);
    break;
    case 7:
    playSound(tmp);
    break;
    case 8:
    playSound(tmp);
    break;
    case 9:
    drawPicture(tmp);
    break;
    case 10:
    drawPicture(tmp);
    break;
    case 11:
    drawPicture(tmp);
    break;
    case 12:
    drawPicture(tmp);
    break;
    case 13:
    drawPicture(tmp);
    break;
  }

  setTimeout(clear, timeShow); //Pulizia di drawZone con ritardo dato in input

}

/* Funzione per pulizia drawZone*/
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/* Funzione per scelta randomica del colore in output */
function drawColor(tmp) {

  switch (tmp) {
    case 0:
    ctx.fillStyle = "red"; //Impostazione del colore
    break;
    case 1:
    ctx.fillStyle = "blue"; //Impostazione del colore
    break;
    case 2:
    ctx.fillStyle = "green"; //Impostazione del colore
    break;
    case 3:
    ctx.fillStyle = "yellow"; //Impostazione del colore
    break;
    case 4:
    ctx.fillStyle = "gray"; //Impostazione del colore
    break;
  }

  ctx.fillRect(0,0, canvas.width, canvas.height); //Disegno del rettangolo di colore scleto precedentemente
}

/* Funzione per scelta randomica della figura in output, utilizzo delle dimensioni
del canvas per creare figure responsive */
function drawPicture (tmp) {
  tmp -= 9;
  ctx.strokeStyle="black";
  ctx.lineWidth = 8;

  switch (tmp) {
    case 0:
        ctx.beginPath();
        ctx.arc((canvas.width/2),(canvas.height/2),(canvas.height*0.4),0,2*Math.PI);
        ctx.stroke();
      break;

    case 1:
        ctx.beginPath();
        ctx.rect((canvas.width*0.10),(canvas.height*0.10),(canvas.width*0.8),(canvas.height*0.8));
        ctx.stroke();
      break;

    case 2:
        ctx.beginPath();
        ctx.moveTo((canvas.width/2),(canvas.height*0.10));
        ctx.lineTo((canvas.width*0.10), (canvas.height*0.90));
        ctx.lineTo((canvas.width*0.90), (canvas.height*0.90));
        ctx.closePath();
        ctx.stroke();
      break;

    case 3:
      var rot = Math.PI/2*3;
      var x = canvas.width/2;
      var y = canvas.height/2;
      var step = Math.PI/5;
      var outerRadius = canvas.width*0.4;
      var innerRadius = canvas.width*0.2;
      var cx = canvas.width/2;
      var cy = canvas.height/2;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius)
      for (i = 0; i < 5; i++) {
        x = cx + Math.cos(rot)*outerRadius;
        y = cy + Math.sin(rot)*outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot)*innerRadius;
        y = cy + Math.sin(rot)*innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();

      ctx.stroke();
      break;

    case 4:
    ctx.beginPath();
    ctx.arc((canvas.width/2),(canvas.height/2),(canvas.height*0.4),0,2*Math.PI); // Outer circle
    ctx.moveTo(canvas.width*0.8, canvas.height/2);
    ctx.arc(canvas.width/2, canvas.height/2, canvas.height*0.3, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(canvas.width*0.36, canvas.height*0.3);
    ctx.arc(canvas.width*0.34, canvas.height*0.3, canvas.width*0.02, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(canvas.width*0.70, canvas.height*0.3);
    ctx.arc(canvas.width*0.68, canvas.height*0.3, canvas.width*0.02, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
    break;
  }
}

/* Funzione per scelta randomica del suono in output */
function playSound(tmp) {
  tmp -= 5;

  switch (tmp) {
    case 0:
    audio_0.play();
    break;
    case 1:
    audio_1.play();
    break;
    case 2:
    audio_2.play();
    break;
    case 3:
    audio_3.play();
    break;
  }
}

/* Funzione per uscita dalla funzione ricorsiva "randomSignal" */
function stop() {
  document.getElementById("container_show_var").style.visibility = "hidden";
  document.getElementById("container_show_var").style.display = "none";
  document.getElementById("container_input").style.display = "inherit";
  document.getElementById("navbar").style.display = "inherit";
  window.location.href="#navbar";

  document.getElementById("btnStart").disabled = false;
  document.getElementById("btnStop").disabled = true;

  flag = false;

  if (countdownWorker) {
    countdownWorker.terminate();
    countdownWorker = null;
  }
  if (signalWorker) {
    signalWorker.terminate();
    countdownWorker = null;
  }

  clearInterval(obj_countdown);

  clear();
}

/* Funzione per modifica parametri di altezza e larghezza canvas, si cerca di creare un quadrato per migliorare visibilità */
function resizeCanvas() {
  var offsetHeight = document.getElementById("row_show_var").offsetHeight;

  if (window.innerWidth < (window.innerHeight - offsetHeight)) {
    canvas.width = window.innerWidth;
    canvas.height = canvas.width;
  }
  else {
    canvas.height = window.innerHeight - offsetHeight;
    canvas.width = canvas.height;
  }
  if (flag == true)
    window.location.href="#container_show_var"; //Spostamento focus su drawZone
}

function startWork() {
  if (workTime > 0) {
    countdownWorker = new Worker("worker.js");
  }
  signalWorker = new Worker("worker.js");

  setsCompleted = 1;

  if (document.getElementById("switchTimerSetting").checked) {
    countdownWorker.postMessage(["timer", workTime, restTime, sets]);
    countdownWorker.addEventListener("message", function(event) {
      if (event.data[0] == "second_work") {
        document.getElementById("show_timeLeft").innerHTML = event.data[1];
      }
      else if (event.data[0] == "second_rest") {
        clear();
        var tmpFont = "bold " + canvas.width + "px Arial"; //Eseguire ad ogni countdown in caso di cambiamento dimensione canvas
        ctx.font = tmpFont;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.fillStyle = "#212529";
        if (event.data[1] > 0) {
          ctx.fillText(event.data[1], (canvas.width/2), (canvas.height));
        }
        else if (event.data[1] == 0) {
          ctx.fillText("START", (canvas.width/2), (canvas.height), canvas.width);
        }
      }
      else if (event.data[0] == "stop_work") {
        signalWorker.terminate();
        signalWorker = null;
        setsCompleted++;
        if (setsCompleted == (sets + 1)) {
          stop();
        }
        else {
          clear();
          var tmpFont = "bold " + canvas.width + "px Arial"; //Eseguire ad ogni countdown in caso di cambiamento dimensione canvas
          ctx.font = tmpFont;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          ctx.fillStyle = "#212529";
          ctx.fillText(restTime, (canvas.width/2), (canvas.height));
        }
      }
      else if (event.data[0] == "start_work") {
        clear();
        document.getElementById("show_timeLeft").innerHTML = workTime;
        if (sets == 0) {
          document.getElementById("show_setsLeft").innerHTML = setsCompleted;
        }
        else {
          document.getElementById("show_setsLeft").innerHTML = setsCompleted + "/" + sets;
        }
        signalWorker = new Worker("worker.js");
        signalWorker.postMessage(["signal", signalActive, delayMin, delayMax, timeShow]);
        signalWorker.addEventListener("message", function(event) {
          if (event.data[0] == "signal") {
            randomSignal(event.data[1]);
          }
        });
      }
    });
  }
  signalWorker.postMessage(["signal", signalActive, delayMin, delayMax, timeShow]);
  signalWorker.addEventListener("message", function(event) {
    if (event.data[0] == "signal") {
      randomSignal(event.data[1]);
    }
});
}

/* Funzione per countdown iniziale */
function countdown(timeleft) {
    obj_countdown = setInterval(function () {
    timeleft--;
    clear();
    var tmpFont = "bold " + canvas.width + "px Arial"; //Eseguire ad ogni countdown in caso di cambiamento dimensione canvas
    ctx.font = tmpFont;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#212529";
    if (timeleft > 0) {
      ctx.fillText(timeleft, (canvas.width/2), (canvas.height/2));
    }
    else if (timeleft == 0) {
      ctx.fillText("START", (canvas.width/2), (canvas.height/2), canvas.width);
    }
    else {
      clear();
      clearInterval(obj_countdown);
      startWork();
    }
  }, 1000);
}

/* Funzione per validare input all'evento onBlur */
function check_input_int(element) {
  var tmp = Number(element.value);

  if (Number.isInteger(tmp)) {
    if (tmp <= 0) {
      if (element.id != document.getElementById("sets").id) {
        element.classList.add("border-danger");
      }
      else if (tmp < 0) {
        element.classList.add("border-danger");
      }
      else {
        element.classList.remove("border-danger");
      }
    }
    else {
      if (parseInt(document.getElementById("delayMin").value) > parseInt(document.getElementById("delayMax").value)) {
        document.getElementById("delayMin").classList.add("border-danger");
        document.getElementById("delayMax").classList.add("border-danger");
      }
      else {
        element.classList.remove("border-danger");
        if (document.getElementById("delayMin").value > 0) {
          document.getElementById("delayMin").classList.remove("border-danger");
        }
        if (document.getElementById("delayMax").value > 0) {
          document.getElementById("delayMax").classList.remove("border-danger");
      }
    }
  }
}
  else {
    element.classList.add("border-danger");
  }
}

function showOrHideRowTimerSettings(element) {
  if(element.checked) {
    document.getElementById("row_timer_settings").style.display = "flex";
  }
  else {
    document.getElementById("row_timer_settings").style.display = "none";
  }
}

function onload() {
  document.getElementById("container_show_var").style.display = "none";
  document.getElementById("row_timer_settings").style.display = "none";
}
