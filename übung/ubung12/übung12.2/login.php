<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<style>
    body{
        background-color: #04a286;
    }
</style>
<body>
<h1>Login zur WWWNavigator</h1>
<form id="login-form">
    <div>
        <span>Name: </span>
        <input type="text" name="name">
    </div>
    <br>
    <div>
        <span>Passwd: </span>
        <input type="text" name="passwd">
    </div>
    <br>
    <div><button>Submit!</button></div>
</form>
</body>
<?PHP
$user = $_GET[ 'name' ];
$passwd = $_GET[ 'passwd' ];
$My_Secrets = file('../ubung12.1/raw_passwd.csv');
foreach ($My_Secrets as $secret_num=> $secret ){
    list( $user1, $passwd1 ) = explode( ",", $secret );
    if($user === $user1
    ){
        echo "Login erfolgreich!";
        echo "<p>Klicken sie <a href='../ubung12.3/wwwnavphp.php'>Hier</a> Um nach WWWnavigator zu landern. </p>";
    }
}
echo "<p>Wenn sie noch nicht registriren sind, können sie sich <a href='../ubung12.1/registphp.php'>Hier</a> registrieren.</p>";
?>
</html>

