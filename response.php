<? 

//server name, user name, password, db_name
$servername = 'localhost';
$username = 'cdance';
$password = 'web1020!';
$dbname = 'cdance';

//db connection 환경설정
$conn = mysqli_connect($servername,$username, $password, $dbname );
mysqli_set_charset($conn, 'utf-8');

if(!$conn){
    die("db connection failed");
}

$name       = $_POST['name'];
$email      = $_POST['email'];
$interest   = $_POST['interest'];
$message    = $_POST['message'];

//insert data
$sql = "insert into restaurant_contact(name, email, interest, message) value('$name', '$email', '$interest', '$message')";
mysqli_multi_query($conn, $sql);// insert data to dbtable

echo $name."<br>".$email."<br>".$interest."<br>".$message."<i>php response data</i>"; //response

mysqli_close($conn);
?>

