<?php
include_once(dirname(dirname(__FILE__))."/include/config.php") ;
include_once(dirname(dirname(__FILE__))."/include/dbi.class.php") ;
/**
 * 贺卡
 */
class Cards{
	public function __construct(){
		$this->db = new DB(DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD);
	}
	
	/**
	 * 保存贺卡
	 * @param string $value [description]
	 */
	public function save($card){
		$now = date('Y-m-d H:i:s') ;
		$res = $this->db->execute("INSERT INTO cards(openid,username,head_img,role,greet,created_at) VALUES('".$card['openid']."','".$card['nickname']."','".$card['headurl']."','".$card['roleid']."','".$card['greetid']."','".$now."')");

		return $this->db->lastInsertedId() ;
	}

}
?>
