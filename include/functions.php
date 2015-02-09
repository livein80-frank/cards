<?php
/*
    防止sql注入,防止xss攻击，放在php第一行
        @author:yaofuyuan
        @date:2012-11-15 14:23:11
*/
function safeInput(){
	   safeArray($_REQUEST);
       safeArray($_GET);
       safeArray($_POST);
       safeArray($_COOKIE);
}
/*
    处理数组中的sql注入字符和js代码
        @author:yaofuyuan
        @date:2012-11-15 14:23:
*/
function safeArray(&$arr){
    foreach($arr as $k => $v){
                if(is_array($v)){
                     $arr[$k]=safeArray($v);
                      continue;
                }
        $arr[$k]=str_replace(array('<','>'),array('&lt;','&gt;'),addslashes($v));
    }    
}

function safeInsert($table,$arr){
	safeArray($arr);
	$sql = 
	$col="";
	$val="";
	foreach ($arr as $k => $v){
		$col.=$k.",";
		$val.= "'".$v."',";
	}
	$col=rtrim($col,",");
	$val=rtrim($val,",");
	return query("insert into $table ($col) values($val)");
}

function safeUpdate($table,$arr,$where){
	safeArray($arr);	
	$sql = "";
	foreach ($aArray as $k => $v){
		$sql .= $k . "='".$v."',";
	}
	$sql="UPDATE $aTableName SET ".rtrim($sql,",");
	if ( $where ){
    	$sql .= " WHERE ".$where;
	}
	return query($sql);
}

/*
	后台记录信息
	$syslogFile在config.php定义
*/
function systemLog($msg){
	global $syslogFile;
	//echo $syslogFile ;
	return error_log(date("[Y-m-d H:i:s]")."\t".$_SERVER['REMOTE_ADDR']."\t".$msg."\n",3,$syslogFile);
}
/*
	获取数据库连接
*/
function getConnection(){
  $conn=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die(mysql_error());
  mysql_select_db(DB_DATABASE) or die(mysql_error());
	mysql_query("SET NAMES 'utf8'");	
	return $conn;
}
/*
	执行sql语句，执行出错则退出程序
	默认使用$conn做数据库连接
*/
function query($sql){
	$res=mysql_query($sql) or systemLog($sql."\t".mysql_error()); 
	return $res;
}

function startTransaction(){
	query("START TRANSACTION");	
}

function commitTransaction(){
	query("COMMIT");	
}

function rollback(){
	query("ROLLBACK");	
}

/*
	查询某表的所有记录
*/
function getAllRows($table){
	$res=query("select * from $table"); 
	$result=array();
	while($row=mysql_fetch_assoc($res)){
		$result[]=$row;
	}
	return $result; 
}


/*
	分页查询
*/
function getQueueByPage($page){
	$startPos=($page-1)*PAGE_SIZE;
	$res=query("select id,weibo_screen_name,weibo_icon,car_id,prize_id from car_queue order by id desc limit $startPos,".PAGE_SIZE); 
	$result=array();
	while($row=mysql_fetch_assoc($res)){
		$row['short_name']=getShortName($row['weibo_screen_name']);
		$result[]=$row;
	}
	return $result; 
}


function verifyMobile($mobile){ 
	//11位手机号  
	return preg_match("/^1[3|5|8]\d{9}$/",$mobile);
} 

function verifyEmail($email){  
	//Email地址   
	return preg_match('/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/', $email);
}

function verifyWeiboNickname($name){
	//4-30个字符，支持中英文、数字、"_"或减号
	if(strlen($name)<4){
		return false ;
	}else{
		return true ;
	}
}

function jumpTo($url){
	echo "<script> top.location='$url';</script>";
}
function uuid($prefix = ''){
     $chars = md5(uniqid(mt_rand(), true));
     $uuid= substr($chars,0,8) . '-';
     $uuid.= substr($chars,8,4) . '-';
     $uuid.= substr($chars,12,4) . '-';
     $uuid.= substr($chars,16,4) . '-';
     $uuid.= substr($chars,20,12);
     return $prefix . $uuid;
} 
//生成随机数
function randomkeys($length) {
    $returnStr='';
    //$pattern = '1234567890ABCDEFGHIJKLOMNOPQRSTUVWXYZ';
    $pattern = 'ABCDEFGHIJKLOMNOPQRSTUVWXYZ';
    for($i = 0; $i < $length; $i ++) {
        //$returnStr .= $pattern {mt_rand ( 0, 35 )}; //生成php随机数
        $returnStr .= $pattern {mt_rand ( 0, 25 )}; //生成php随机数
    }
    return $returnStr;
}


function getShortName($longName){
	//英语
	if(mb_strlen($longName,"UTF-8")==strlen($longName)){
		//中文yifangyou
		if(mb_strlen($longName,"UTF-8")>9){
				return mb_substr($longName,0,8,"UTF-8")."...";
		}else{
				return $longName;
		}
	}else
	if(mb_strlen($longName,"UTF-8")>5){
			//中文
			return mb_substr($longName,0,4,"UTF-8")."...";
	}else{
			return $longName;
	}
}

function getGeo($ip){
	$ipstr=sprintf("%u", ip2long($ip));
	if($res=query("select province_id,city_id from ip_db where start_ip<=$ipstr and end_ip>=$ipstr")){
		if($row=mysql_fetch_assoc($res)){
			if($row["province_id"]==0){
				$row["province_id"]=-1;
			}
			if($row["city_id"]==0){
				$row["city_id"]=-1;
			}
			return array($row["province_id"],$row["city_id"]);
		}
	}
	return array(-1,-1);
}

function getIp(){
	$ip=false;
	if(!empty($_SERVER["HTTP_CLIENT_IP"])){
  	$ip = $_SERVER["HTTP_CLIENT_IP"];
	}
	if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
  	$ips = explode (", ", $_SERVER['HTTP_X_FORWARDED_FOR']);
  	if($ip){
   		array_unshift($ips, $ip); $ip = FALSE;
  	}
  	for($i = 0; $i < count($ips); $i++){
   		if (!eregi ("^(10|172\.16|192\.168)\.", $ips[$i])){
    		$ip = $ips[$i];
    		break;
   		}
  	}
	}
	return($ip ? $ip : $_SERVER['REMOTE_ADDR']);
}

?>