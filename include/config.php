<?php
	error_reporting(E_ALL ^ E_NOTICE);
	//error_reporting(0);
	date_default_timezone_set('PRC'); //设置中国时区	
	define("NOW",time());

	define("DB_HOST","localhost");
	define("DB_USER","root");
	define("DB_PASSWORD","1234");
	define("DB_DATABASE","cards");
	$syslogFile=$_SERVER['DOCUMENT_ROOT']."/news-".date('Ymd').".log";
	
	define("HOST","http://cards.dev") ;
	define("REDIRECT_URI","http://cards.dev/") ;
	define("BASE_DIR",dirname(dirname(__FILE__)));

	define("AppId","wxb9baa02a839e1e58");
	define("AppSecret","1d98e8ff15a1bc69c33ebd994024a30a");
	
?>
