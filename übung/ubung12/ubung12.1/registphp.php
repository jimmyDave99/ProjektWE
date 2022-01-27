<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
</head>
<style>
    body{
        background-color: #04a286;
    }
</style>
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
        <input type="submit" value="Submit">
    </fieldset>
</form>
<!--
https://kaul.inf.h-brs.de/we/#app-13-0&12_php=page-38
-->
<?PHP
function extracted()
{
    if (isset($_GET['account']) && isset($_GET['password'])) {
        $account = $_GET['account'];
        $passwd = $_GET['password'];
        $file = './raw_passwd.csv';
        $new_line = $account . ',' . $passwd . "\n";
        if (file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) {
            echo "<script>alert('Registered successfully!')</script>";
        }
    }
}

extracted();
?>
</body>
</html>


