<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strength Test</title>
</head>

<body>
    <?php
    if (isset($_POST["submit"])) {
        $passString = $_POST["password"];
    } 
    ?>

    <p>WOW, your password is </p>
    <div id="stopwatch">
        <!-- CURRENT TIME -->
        <div id="sw-time">00:00:00</div>

        <!-- CONTROLS -->
        <input type="button" value="Reset" id="sw-reset" disabled>
        <input type="button" value="Start" id="sw-go" disabled>
    </div>
</body>

</html>