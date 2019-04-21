<?php
$seconds_to_cache = 86400;
$ts = gmdate("D, d M Y H:i:s", time() + $seconds_to_cache) . " GMT";
header("Cache-Control: max-age = $seconds_to_cache"); // HTTP 1.1.
header("Pragma: cache"); // HTTP 1.0.
header("Expires: $ts"); // Proxies.

// Include and instantiate the class.
require_once 'libs/Mobile_Detect.php';
$detect = new Mobile_Detect;
?>

<!DOCTYPE html>
<html lang="it-IT">
<head>
  <title>Andrea Rota</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
  <link rel="manifest" href="favicon/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="index.css">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  <script src="index.js"></script>
</head>
<body onload="onload()">

  <nav class="navbar navbar-expand-sm navbar-light border-bottom" id="navbar">
    <span class="navbar-brand text-center w-100 mb-0 display-4">Rapility</span>
  </nav>

  <div class="container" id="container_input">
    <div class="row justify-content-around firstRow">
      <?php
      if ($detect->isMobile()) {
        echo '<div class="col col-auto">';
      }
      else {
        echo '<div class="col col-auto">';
      }
      ?>
      <label for="colors" class="h4">Colors</label>
      <div id="colors">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" id="color_0" value="1">
          <label class="custom-control-label" for="color_0">Red</label>
        </div> <!-- .form-check -->
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" id="color_1" value="2">
          <label class="custom-control-label" for="color_1">Blue</label>
        </div> <!-- .form-check -->
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" id="color_2" value="3">
          <label class="custom-control-label" for="color_2">Green</label>
        </div> <!-- .form-check -->
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" id="color_3" value="4">
          <label class="custom-control-label" for="color_3">Yellow</label>
        </div> <!-- .form-check -->
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" id="color_4" value="5">
          <label class="custom-control-label" for="color_4">Gray</label>
        </div> <!-- .form-check -->
      </div>  <!-- #colors -->
    </div> <!-- .col-auto -->
    <?php
    if (!$detect->isMobile()) {
      echo '<div class="col col-auto">
      <label for="sounds" class="h4">Sounds</label>
      <div id="sounds">
      <div class="custom-control custom-checkbox">
      <input class="custom-control-input" type="checkbox" id="sound_0" value="1">
      <label class="custom-control-label" for="sound_0">Short beep</label>
      </div> <!-- .form-check -->
      <div class="custom-control custom-checkbox">
      <input class="custom-control-input" type="checkbox" id="sound_1" value="2">
      <label class="custom-control-label" for="sound_1">Long beep</label>
      </div> <!-- .form-check -->
      <div class="custom-control custom-checkbox">
      <input class="custom-control-input" type="checkbox" id="sound_2" value="3">
      <label class="custom-control-label" for="sound_2">Double Short beep</label>
      </div> <!-- .form-check -->
      <div class="custom-control custom-checkbox">
      <input class="custom-control-input" type="checkbox" id="sound_3" value="4">
      <label class="custom-control-label" for="sound_3">Short boop</label>
      </div> <!-- .form-check -->
      </div>  <!-- #sounds -->
      </div> <!-- .col-auto -->';
    }
    ?>
    <?php
    if ($detect->isMobile()) {
      echo '<div class="col col-auto">';
    }
    else {
      echo '<div class="col col-auto">';
    }
    ?>
    <label for="pictures" class="h4">Pictures</label>
    <div id="pictures">
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="picture_0" value="1">
        <label class="custom-control-label" for="picture_0">Circle</label>
      </div> <!-- .form-check -->
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="picture_1" value="2">
        <label class="custom-control-label" for="picture_1">Square</label>
      </div> <!-- .form-check -->
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="picture_2" value="3">
        <label class="custom-control-label" for="picture_2">Triangle</label>
      </div> <!-- .form-check -->
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="picture_3" value="4">
        <label class="custom-control-label" for="picture_3">Star</label>
      </div> <!-- .form-check -->
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="picture_4" value="5">
        <label class="custom-control-label" for="picture_4">Smile</label>
      </div> <!-- .form-check -->
    </div>  <!-- #colors -->
  </div> <!-- .col-auto -->
</div> <!-- .row -->
<div class="row">
  <div class="col-md-4">
    <label for="delayMin" class="h4">Min Time</label>
    <input type="number" min="0" step="250" pattern="[0-9]*" class="form-control" id="delayMin" placeholder="Milliseconds" aria-describedby="delayMinHelp" value="1500" onblur="check_input_int(this)">
    <small id="delayMinHelp" class="form-text text-muted">
      Your input must be greater than 0
    </small>
  </div>
  <div class="col-md-4">
    <label for="delayMax" class="h4">Max Time</label>
    <input type="number" min="0" step="250" pattern="[0-9]*" class="form-control" id="delayMax" placeholder="Milliseconds" aria-describedby="delayMaxHelp" value="3000" onblur="check_input_int(this)">
    <small id="delayMaxHelp" class="form-text text-muted">
      Your input must be greater than 0
    </small>
  </div>
  <div class="col-md-4">
    <label for="timeShow" class="h4">Vision Time</label>
    <input type="number" min="0" step="100" pattern="[0-9]*" class="form-control" id="timeShow" placeholder="Milliseconds" aria-describedby="timeShowHelp" value="500" onblur="check_input_int(this)">
    <small id="timeShowHelp" class="form-text text-muted">
      Your input must be greater than 0
    </small>
  </div>
</div> <!-- .row -->
<div class="row">
  <div class="col-md-4"></div>
  <div class="col-md-4 d-flex justify-content-between align-items-center">
    <!-- Rounded switch -->
    <label for="switchTimerSetting" class="h4">Timer Settings</label>
    <label class="switch"><input type="checkbox" id="switchTimerSetting" onclick="showOrHideRowTimerSettings(this)"><span class="slider round"></span></label>
  </div>
  <div class="col-md-4"></div>
</div> <!-- .row -->
<div class="row" id="row_timer_settings">
  <div class="col-md-4">
    <label for="workTime" class="h4">Work Time</label>
    <input type="number" min="0" step="1" pattern="[0-9]*" class="form-control" id="workTime" placeholder="Seconds" aria-describedby="workTimeHelp" value="20" onblur="check_input_int(this)">
    <small id="workTimeHelp" class="form-text text-muted">
      Your input must be greater than 0
    </small>
  </div>
  <div class="col-md-4">
    <label for="restTime" class="h4">Rest Time</label>
    <input type="number" min="0" step="1" pattern="[0-9]*" class="form-control" id="restTime" placeholder="Seconds" aria-describedby="restTimeHelp" value="5" onblur="check_input_int(this)">
    <small id="restTimeHelp" class="form-text text-muted">
      Your input must be greater than 0
    </small>
  </div>
  <div class="col-md-4">
    <label for="sets" class="h4">Sets</label>
    <input type="number" min="0" step="1" pattern="[0-9]*" class="form-control" id="sets" placeholder="0 = infinite" aria-describedby="setsHelp" value="0" onblur="check_input_int(this)">
    <small id="setsHelp" class="form-text text-muted">
      Your input must be greater than or equal to 0, 0 = infinite
    </small>
  </div>
</div> <!-- .row -->
<div class="row" style="border: none;">
  <div class="col-md-4"></div>
  <div class="col-md-4"><button type="button" class="btn btn-primary btn-block" id="btnStart" onclick="start()">START</button></div>
  <div class="col-md-4"></div>
</div> <!-- .row -->
</div> <!-- .container -->
<div class="container-fluid" id="container_show_var">
  <div class="row d-flex flex-nowrap align-items-center no-padding" id="row_show_var">
    <div class="col-md-3 no-padding"><h1><span class="badge badge-primary w-100" id="show_timeLeft"></span></h1></div>
    <div class="col-md-6" style="padding-top: .2rem; padding-bottom: .2rem;"><button type="button" class="btn btn-danger btn-block" id="btnStop" onclick="stop()">STOP</button></div>
    <div class="col-md-3 no-padding"><h1><span class="badge badge-primary w-100" id="show_setsLeft"></span></h1></div>
  </div> <!-- .row -->
  <div class="row no-padding">

    <div class="col-md-12"><canvas id="drawZone">Please use a different browser</canvas></div>

  </div> <!-- .row -->
</div> <!-- .container -->
</body>
</html>
