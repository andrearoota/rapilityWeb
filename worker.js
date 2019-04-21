var var_workTime, var_restTime, var_sets;
var signalActive, delayMin, delayMax, timeShow;

function timerWork() {
  var timeleft = var_workTime;

  var countdown = setInterval(function () {
    timeleft--;

    if (timeleft < 0) {
      clearInterval(countdown);
      self.postMessage(["stop_work"]);
      timerRest();
    }
    else {
      self.postMessage(["second_work", timeleft]);
    }
  }, 1000);
}


function timerRest() {
  var timeleft = var_restTime;

  var countdown = setInterval(function () {
    timeleft--;

    if (timeleft < 0) {
      clearInterval(countdown);
      self.postMessage(["start_work"]);
      timerWork();
    }
    else {
      self.postMessage(["second_rest", timeleft]);
    }
  }, 1000);
}

function selectSignal() {
  var tmp;
  do { //Ciclo per numero random
    tmp = (Math.floor(Math.random() * 14));
  } while (!signalActive[tmp]); //ATTENZIONE RISCHIO CICLO INFINITO

  self.postMessage(["signal", tmp]);

  var delayRandom = Math.floor(Math.random() * (delayMax - delayMin + 1)) + delayMin; //Metodo per trovare un ritardo randomico tra due input
  setTimeout(selectSignal, delayRandom + timeShow);
}

self.addEventListener("message", function(event) {
	if (event.data[0] == "timer") {
    var_workTime = event.data[1];
    var_restTime = event.data[2];
    var_sets = event.data[3];
		timerWork();
	}
  else if (event.data[0] == "signal") {
    signalActive = event.data[1];
    delayMin = event.data[2];
    delayMax = event.data[3];
    timeShow = event.data[4];
    var delayRandom = Math.floor(Math.random() * (delayMax - delayMin + 1)) + delayMin; //Metodo per trovare un ritardo randomico tra due input
    setTimeout(selectSignal, delayRandom + timeShow);
  }
});
