<?php
include_once(dirname(dirname(dirname(__FILE__)))."/include/config.php") ;
include_once(dirname(dirname(dirname(__FILE__)))."/include/db.class.php") ;
/**
 * 登录信息
 * 
 */
class LoginInfo{
	public function __construct(){
		$this->db = new DB(DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD);
	}
	/**
	 * 保存录信息
	 */
	public function save($statistics){
		$now = date('Y-m-d H:i:s') ;
		$sql = "";
		$res = $this->db->execute($sql);
		return $res ;
	}
	/**
	 * 统计登录人数
	 */
	public function findLoginByDate($from,$to,$dealerId){
		$sql = "SELECT COUNT(*) c,DATE(create_date) date FROM login_info WHERE 1=1 ";
		
		if(!empty($dealerId)){
			$sql .= "AND dealer_id = '".$dealerId."'" ;
		}
		
		if(!empty($from)){
			$sql .= "AND DATE(create_date) >= '".$from."'" ;
		}
		if(!empty($to)){
			$sql .= " AND DATE(create_date) <= '".$to."'" ;
		}
		$sql .= " GROUP BY DATE(create_date) ORDER BY create_date ASC" ;
		$result = $this->db->query($sql);
		while ($line = $this->db->fetchNextObject($result)) {
			$res[] = $line ;
		}		
		return $res ;
	}
	/**
	 * 登录最近几天的统计
	 */
	public function findLogin($from,$to,$dealerId,$limit){
		$sql = "SELECT COUNT(*) c,DATE(create_date) date FROM login_info WHERE 1=1 ";
		
		if(!empty($dealerId)){
			$sql .= "AND dealer_id = '".$dealerId."'" ;
		}
		
		if(!empty($from)){
			$sql .= "AND DATE(create_date) >= '".$from."'" ;
		}
		if(!empty($to)){
			$sql .= " AND DATE(create_date) <= '".$to."'" ;
		}
		$sql .= " GROUP BY DATE(create_date) ORDER BY create_date DESC" ;
		if(!empty($limit)){
			$sql .= " limit 0,".$limit ;
		}
		$result = $this->db->query($sql);
		while ($line = $this->db->fetchNextObject($result)) {
			$res[] = $line ;
		}
		return $res ;
	}
	/**
	 * 登录分页
	 */
	public function findLoginByPage($from,$to,$dealerId,$currPage, $pageSize){
		$sql = "SELECT COUNT(*) c,DATE(create_date) date FROM login_info WHERE 1=1 ";
		
		if(!empty($dealerId)){
			$sql .= "AND dealer_id = '".$dealerId."'" ;
		}
		
		if(!empty($from)){
			$sql .= "AND DATE(create_date) >= '".$from."'" ;
		}
		if(!empty($to)){
			$sql .= " AND DATE(create_date) <= '".$to."'" ;
		}
		$sql .= " GROUP BY DATE(create_date) ORDER BY create_date DESC" ;
		$currCount = ($currPage-1)*$pageSize ;
		$sql .= " limit $currCount , $pageSize" ;
		$result = $this->db->query($sql);
		while ($line = $this->db->fetchNextObject($result)) {
			$res[] = $line ;
		}
		return $res ;
	}
	/**
	 * 总条数
	 */
	public function findLoginCount($from,$to,$dealerId){
		$sql = "SELECT * FROM login_info WHERE 1=1 " ;
		if(!empty($dealerId)){
			$sql .= " AND dealer_id = '".$dealerId."'" ;
		}
		if(!empty($from)){
			$sql .= " AND DATE(create_date) >= '".$from."'" ;
		}
		if(!empty($to)){
			$sql .= " AND DATE(create_date) <= '".$to."'" ;
		}
		$sql .= " GROUP BY DATE(create_date)" ;
		$result = $this->db->query($sql,false);
		$count = $this->db->numRows($result);
		return $count ;
	}
	
}
?>
