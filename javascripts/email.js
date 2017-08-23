$outlook=$("#outlook");
$outlook.click(function(){
    $name=$("#info-name").val();
    $email=$("#info-email").val();
    $tel=$("#info-tel").val();
    $message=$("#info-message").val();
    location.href="mailto:szpengfengrui@126.com?subject=Name:"+$name+"Tel:"+$tel+"&body="+$message;
});