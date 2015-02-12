<?php
	error_reporting(E_ALL ^ E_NOTICE);
	//error_reporting(0);
	date_default_timezone_set('PRC'); //设置中国时区	
	define("NOW",time());

	define("DB_HOST","hdm106787582.my3w.com");
	define("DB_USER","hdm106787582");
	define("DB_PASSWORD","boat12345");
	define("DB_DATABASE","hdm106787582_db");
	$syslogFile=$_SERVER['DOCUMENT_ROOT']."/news-".date('Ymd').".log";
	
	define("HOST","http://boatinteractive.com") ;
	define("REDIRECT_URI","http://boatinteractive.com/cards/") ;
	define("BASE_DIR",dirname(dirname(__FILE__)));

	//正式
	//define("AppId","wxfeacbc4d70ea1ee4");
	//define("AppSecret","46c4b82829ff95ecc87336dffee1c930");

	define("AppId","wxb9baa02a839e1e58");
	define("AppSecret","1d98e8ff15a1bc69c33ebd994024a30a");
	
?>
