<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
</head>
<body>
<h1>Register</h1>
<form>
    <fieldset>
        <legend>Register a new Account:</legend>
        Account name:<br>
        <input type="text" name="account">
        <br>
        Password:<br>
        <input type="password" name="password">
        <br><br>
        <input type="submit" name="submit" value="Submit">
    </fieldset>
</form>
</body>
<?php
if(isset($_POST['submit'])){
    $new_message = array(
           "account" => $_POST['account'],
        "passwort" => $_POST['passwort']

    );
    if(filesize("data.json") == 0){
        $first_record = array($new_message);
        $data_to_save=$first_record;
    }else{
        $old_records = json_decode(file_get_contents("data.json"));
        array_push($old_records,$new_message);
        $data_to_save = $old_records;
    }
    if(!file_put_contents("dada.json",json_encode($data_to_save,JSON_PRETTY_PRINT),LOCK_EX)){
            $error="Error storing message, please try again";
    }else{
        $success="Message is stored successfully";
    }
}
?>
</html>


