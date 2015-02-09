<?php
error_reporting(E_ALL ^ E_NOTICE);
include_once(dirname(dirname(dirname(__FILE__)))."/include/config.php") ;
include_once(dirname(dirname(dirname(__FILE__)))."/include/db.class.php") ;
/*
 * 新闻
 */
class News{
	public $db ;
	public function News(){
		$this->db = new DB(DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD);
	}
	/**
	 * 新闻列表
	 */
	public function findNews($type,$currPage, $pageSize,$keywords){
		$currCount = ($currPage-1)*$pageSize ;
		
		$res = array() ;
		$sql = "SELECT * FROM news WHERE 1= 1  " ;
		if(!empty($type)){
			$sql .= " AND type='".$type."'" ;
		}
		if(!empty($keywords)){
			$sql .= " AND title like '%".$keywords."%'" ;
		}
		$sql .= " ORDER BY pub_date DESC,id DESC" ;
		$sql .= " limit ".$currCount." , ".$pageSize ;
		$result = $this->db->query($sql,false);
		while ($line = $this->db->fetchNextObject($result)) {
			$res[] = $line ;
		}		
		return $res ;
	}
	/**
	 * 新闻总数
	 */
	public function findCount($type,$keywords){
		$sql = "SELECT * FROM news WHERE 1=1 " ;
		if(!empty($type)){
			$sql .= " AND type='".$type."'" ;
		}
		if(!empty($keywords)){
			$sql .= " AND title like '%".$keywords."%'" ;
		}
		$result = $this->db->query($sql,false);
		$count = $this->db->numRows($result);
		return $count ;
	}

	/**
	 * 添加新闻
	 */
	public function save($news){
		$now = date('Y-m-d H:i:s') ;
		$res = $this->db->execute("INSERT INTO news(type,title,pub_date,pic,pic_name,summary,content,create_date) VALUES('".$news['type']."','".$news['title']."','".$news['pub_date']."','".$news['pic']."','".$news['pic_name']."','".$news['summary']."','".$news['content']."','".$now."')");
		return $res ;
	}
	/**
	 * 编辑新闻
	 */
	public function update($news){
		$now = date('Y-m-d H:i:s') ;
		$res = $this->db->execute("UPDATE news SET title='".$news['title']."' ,pub_date='".$news['pub_date']."' , pic='".$news['pic']."' , pic_name='".$news['pic_name']."' , summary='".$news['summary']."' , type='".$news['type']."' , content='".$news['content']."' WHERE id=".$news['id']);
		return $res ;
	}
	/**
	 * 查找某一新闻
	 */
	public function findById($id) {
		$line = $this->db->queryUniqueObject("SELECT * FROM news WHERE id='".$id."'");
		if(!empty($line)){
			return $line ;
		}else{
			return false ;
		}
	}
	/**
	 * 查找上一篇
	 */
	public function findPrevById($type,$id) {
		$line = $this->db->queryUniqueObject("SELECT * FROM news WHERE 1=1 AND type = '".$type."' AND id<".$id." ");
		if(!empty($line)){
			return $line ;
		}else{
			return false ;
		}
	}
	/**
	 * 查找下一篇
	 */
	public function findNextById($type,$id) {
		$line = $this->db->queryUniqueObject("SELECT * FROM news WHERE 1=1 AND type = '".$type."' AND id>".$id." ");
		if(!empty($line)){
			return $line ;
		}else{
			return false ;
		}
	}
	
	/**
	 * 删除新闻
	 */
	public function deleteById($id){
		$res = $this->db->execute(" DELETE FROM news WHERE id=".$id);
		return $res ;
	}
	
}
?>