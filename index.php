<!DOCTYPE html>
<html>

<head>
    <title>Number Game</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jquery-3.1.1.min.js"></script>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css">
    <link href='#' rel='stylesheet' id='font1'>
    <link href='#' rel='stylesheet' id='font2'>
    <link href='#' rel='stylesheet' id='font3'>
</head>

<body>
    <div class="wrapper">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>

    <div id="result">Find: <span></span></div>
    <div id="level">Level: <span>1</span></div>
    <div id="timer">Timer: <span>unlimited</span></div>
    <div id="score">Current Level Score: <span>0</span></div>
    <div id="total">Total Score: <span>0</span></div>
    <div id="record">Top Record: <span id='topRecord'>
        <?php include("topRecord.txt"); ?>
    </span></div>


</body>

</html>
