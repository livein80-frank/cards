<?php
	error_reporting(E_ALL ^ E_NOTICE);
	//error_reporting(0);
	date_default_timezone_set('PRC'); //设置中国时区	
	define("NOW",time());

	define("DB_HOST","localhost");
	define("DB_USER","mdbxcjhk");
	define("DB_PASSWORD","MD_bxcjhk_123");
	define("DB_DATABASE","mdbxcjhk");
	$syslogFile=$_SERVER['DOCUMENT_ROOT']."/news-".date('Ymd').".log";
	
	//define("HOST","http://boatinteractive.com") ;
	define("HOST","http://act.midea.com") ;
	//define("REDIRECT_URI","http://boatinteractive.com/cards/") ;
	define("REDIRECT_URI","http://act.midea.com/mdbxcjhk/site/callback.php") ;
	define("BASE_DIR",dirname(dirname(__FILE__)));

	//正式
	define("AppId","wxfeacbc4d70ea1ee4");
	define("AppSecret","46c4b82829ff95ecc87336dffee1c930");
	//boat
	
	//define("AppId","wxb9baa02a839e1e58");
	//define("AppSecret","1d98e8ff15a1bc69c33ebd994024a30a");

	define("AppId_AUTH","wx98e78d22de880f6a");
	
?>
