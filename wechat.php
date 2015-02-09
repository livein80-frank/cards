<?php
if (!defined('BASEPATH'))
	exit ('No direct script access allowed');

class Wechat extends CI_Controller {
	public function __construct() {
		parent :: __construct();
		$this->load->model('member_model');
		$this->load->library('session');
		$this->load->helper('url');
		//$this->load->library('wechatCallbackapiTest');
		define("AppId","wxb9baa02a839e1e58");
		define("AppSecret","1d98e8ff15a1bc69c33ebd994024a30a");
		include(__dir__."/../libraries/weixin.ex.class.php");
	}

	public function index() {
		//define your token
		include(__dir__.'/../libraries/WechatCallbackapiTest.php') ;
		define("TOKEN", "distribution2015");
		$wechatObj = new wechatCallbackapiTest();
		$wechatObj->valid();
		//$this->wechatCallbackapiTest->valid(); 
	}	
	/**
	 * 菜单修改
	 * scope: snsapi_base snsapi_userinfo
	 * @return [type] [description]
	 */
	public function menu(){
		header("Content-Type:text/plain;charset=UTF-8");
		$menus = array(
		    "button" => array(
		        array(
		            "type"=>"view",
		            "name" => "我的账号",
		            "url"=>"https://open.weixin.qq.com/connect/oauth2/authorize?appid=".AppId."&redirect_uri=http%3A%2F%2Fwww.naifenyun.com%2Fwechat%2Fcallback&response_type=code&scope=snsapi_userinfo&state=account#wechat_redirect"       
		        ),
		        array(
		            "type"=>"view",
		            "name" => "积分兑换",
		            "url"=>"https://open.weixin.qq.com/connect/oauth2/authorize?appid=".AppId."&redirect_uri=http%3A%2F%2Fwww.naifenyun.com%2Fwechat%2Fcallback&response_type=code&scope=snsapi_userinfo&state=change#wechat_redirect"       
		        ),
		    )
		);		
		$wxClient=new WeiXinClientV1(AppId,AppSecret);
		$wxClient->oauth->debug = TRUE ;
		$token = $wxClient->oauth->getAccessToken();
		//var_dump($token) ;
		$ret = $wxClient->createMenu($menus);
		var_dump($ret) ;
	}
	/**
	 * OAuth2.0  网页授权回调
	 * state : login reg  account change
	 * @param  string   $value [description]
	 * @return function        [description]
	 */
	public function callback(){
		$code = $_GET['code'] ;
		$state = $_GET['state'] ;
		//echo "state:".$state ;
		//echo "<br/>";
		//echo "code:".$code ;
		//echo "<br/>";
		
		$user = $this->session->userdata('wxuser') ;
		if(empty($wxuser)){
			$wxClient=new WeiXinClientV1(AppId,AppSecret);
			$token = $wxClient->oauth->getAccessTokenByCode($code);
	
			$openid = $token['openid'] ;
			$user = $wxClient->findUser($openid) ;
			//log_message('error',__method__.":".var_export($user)) ;
			$this->session->set_userdata("wxuser",$user) ;
		}
		


		//var_dump($token)  ;
		//var_dump($user) ;
		//exit() ;
		//根据openid判断用户是否已经绑定
		//如果绑定直接登录成功
		//如果没有绑定，跳转到登录页面进行绑定
		//如果没有账号，先注册
		log_message('error',$openid);
		if($this->member_model->isbind($openid)){	
			if($state=="account"){				
				//log_message('error',$user['openid']) ;
				redirect('/member/','location',301) ;
			}elseif ($state=="change") {
				redirect('/change/','location',301) ;
				require_once(__dir__.'/../libraries/JSSDK.php');
				$jssdk = new JSSDK(AppId, AppSecret);
				$signPackage = $jssdk->GetSignPackage();

				$this->load->view('change',['wxuser'=>$user,'signPackage'=>$signPackage]);
			}elseif ($state=="logout") {
				$ret = $this->member_model->unbind($openid) ;
				if($ret){
					$this->load->view('login');				
				}else{
					echo "logout fail" ;
				}
			}
		}else{
			if($state=="reg"){
				$this->load->view('reg',['wxuser'=>$user]);
			}else{
				$this->load->view('login',['wxuser'=>$user]);				
			}
		}
	}

}
