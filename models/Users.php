<?php
include_once(dirname(dirname(__FILE__))."/include/config.php") ;
include_once(dirname(dirname(__FILE__))."/include/dbi.class.php") ;
/**
 * 验证码
 */
class Users{
	public function __construct(){
		$this->db = new DB(DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD);
	}
	/**
	 * 保存用户
	 * @param string $value [description]
	 */
	public function save($wxuser){
		$now = date('Y-m-d H:i:s') ;
		$res = $this->db->execute("INSERT INTO users(openid,username,head_img,created_at) VALUES('".$wxuser['openid']."','".$news['nickname']."','".$wxuser['headimgurl']."','".$now."')");
		return $res ;	
	}	
	/**
	 * 查找用户是否存在
	 */
	public function findByOpenId($openid) {
		$line = $this->db->queryUniqueObject("SELECT * FROM users WHERE openid='".$openid."'");
		if(!empty($line)){
			return $line ;
		}else{
			return false ;
		}
	}

}
?>
