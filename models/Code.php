<?php
include_once(dirname(dirname(dirname(__FILE__)))."/include/config.php") ;
include_once(dirname(dirname(dirname(__FILE__)))."/include/db.class.php") ;
/**
 * 验证码
 */
class Code{
	public function __construct(){
		$this->db = new DB(DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD);
	}
	/**
	 * 查询时间段的验证码
	 */
	public function findCodeByDate($from,$to,$dealerId){
		$sql = "SELECT COUNT(*) c,DATE(create_date) date FROM code WHERE 1=1 ";
		
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
	 * 按日期查询统计前几条code
	 */
	public function findCode($from,$to,$dealerId,$limit){
		$sql = "SELECT COUNT(*) c,DATE(create_date) date FROM code WHERE 1=1 ";
		
		if(!empty($dealerId)){
			$sql .= " AND dealer_id = '".$dealerId."'" ;
		}
		
		if(!empty($from)){
			$sql .= " AND DATE(create_date) >= '".$from."'" ;
		}
		if(!empty($to)){
			$sql .= " AND DATE(create_date) <= '".$to."'" ;
		}
		$sql .= " GROUP BY DATE(create_date) ORDER BY create_date DESC" ;
		if(!empty($limit)){
			$sql .= " limit 0,".$limit ;
		}
		//echo $sql ;
		$result = $this->db->query($sql);
		while ($line = $this->db->fetchNextObject($result)) {
			$res[] = $line ;
		}		
		return $res ;
	}
	/**
	 * 前几条手机记录
	 */
	public function findMobile($from,$to,$dealerId,$limit){
		$sql = "SELECT * FROM code WHERE 1=1 ";
		
		if(!empty($dealerId)){
			$sql .= " AND dealer_id = '".$dealerId."'" ;
		}
		
		if(!empty($from)){
			$sql .= " AND DATE(create_date) >= '".$from."'" ;
		}
		if(!empty($to)){
			$sql .= " AND DATE(create_date) <= '".$to."'" ;
		}
		$sql .= " ORDER BY create_date DESC" ;
		if(!empty($limit)){
			$sql .= " limit 0,".$limit ;
		}
		//echo $sql ;
		$result = $this->db->query($sql);
		while ($line = $this->db->fetchNextObject($result)) {
			$res[] = $line ;
		}		
		return $res ;
		
	}
	/**
	 * 验证码分页列表
	 */
	public function findCodeByPage($from,$to,$dealerId,$currPage, $pageSize){
		$sql = "SELECT COUNT(*) c,DATE(create_date) date FROM code WHERE 1=1 ";
		
		if(!empty($dealerId)){
			$sql .= " AND dealer_id = '".$dealerId."'" ;
		}
		
		if(!empty($from)){
			$sql .= " AND DATE(create_date) >= '".$from."'" ;
		}
		if(!empty($to)){
			$sql .= " AND DATE(create_date) <= '".$to."'" ;
		}
		$sql .= " GROUP BY DATE(create_date) ORDER BY create_date DESC" ;
		$currCount = ($currPage-1)*$pageSize ;
		$sql .= " limit $currCount , $pageSize" ;
		//echo $sql ;
		$result = $this->db->query($sql);
		while ($line = $this->db->fetchNextObject($result)) {
			$res[] = $line ;
		}		
		return $res ;
	}
	/**
	 * 验证码日期统计总条数
	 */
	public function findCodeCount($from,$to,$dealerId){
		$sql = "SELECT * FROM code WHERE 1=1 " ;
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
	/**
	 * 验证码分页列表
	 */
	public function findMobileByPage($from,$to,$dealerId,$currPage, $pageSize){
		$sql = "SELECT * FROM code WHERE 1=1 ";
		
		if(!empty($dealerId)){
			$sql .= " AND dealer_id = '".$dealerId."'" ;
		}
		
		if(!empty($from)){
			$sql .= " AND DATE(create_date) >= '".$from."'" ;
		}
		if(!empty($to)){
			$sql .= " AND DATE(create_date) <= '".$to."'" ;
		}
		$sql .= " ORDER BY create_date DESC" ;
		$currCount = ($currPage-1)*$pageSize ;
		$sql .= " limit $currCount , $pageSize" ;
		//echo $sql ;
		$result = $this->db->query($sql);
		while ($line = $this->db->fetchNextObject($result)) {
			$res[] = $line ;
		}		
		return $res ;
	}
	/**
	 * 验证码日期统计总条数
	 */
	public function findMobileCount($from,$to,$dealerId){
		$sql = "SELECT * FROM code WHERE 1=1 " ;
		if(!empty($dealerId)){
			$sql .= " AND dealer_id = '".$dealerId."'" ;
		}
		if(!empty($from)){
			$sql .= " AND DATE(create_date) >= '".$from."'" ;
		}
		if(!empty($to)){
			$sql .= " AND DATE(create_date) <= '".$to."'" ;
		}
		$result = $this->db->query($sql,false);
		$count = $this->db->numRows($result);
		return $count ;
	}
	
}
?>
