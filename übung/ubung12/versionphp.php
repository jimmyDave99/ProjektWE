<!doctype html>
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

<?PHP
 if ( isset($_GET[ 'account' ]) && isset($_GET[ 'password' ]) ){
 $account = $_GET[ 'account' ];
 $passwd = $_GET[ 'password' ];
 $file = './raw_passwd.csv';
 $new_line = $account . ',' . $passwd . "\n";
 if ( file_put_contents( $file, $new_line, FILE_APPEND | LOCK_EX ) ){
 echo "<script>alert('Registered successfully!')</script>";
 }
 }
?>
