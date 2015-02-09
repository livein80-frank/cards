<?php
/**
 * PHP SDK for weibo.com (using OAuth2)
 * 
 * @author Elmer Zhang <freeboy6716@gmail.com>
 */

/**
 * @ignore
 */
class OAuthException extends Exception {
	// pass
}


/**
 * 新浪微博 OAuth 认证类(OAuth2)
 *
 * 授权机制说明请大家参考微博开放平台文档：{@link http://open.weibo.com/wiki/Oauth2}
 *
 * @package sae
 * @author Elmer Zhang
 * @version 1.0
 */
class WeiXinAuthV1 {
	/**
	 * @ignore
	 */
	public $AppId;
	/**
	 * @ignore
	 */
	public $AppSecret;
	/**
	 * @ignore
	 */
	public $access_token;
	
	public $expires_in;
	/**
	 * Contains the last HTTP status code returned. 
	 *
	 * @ignore
	 */
	public $http_code;
	/**
	 * Contains the last API call.
	 *
	 * @ignore
	 */
	public $url;
	/**
	 * Set up the API root URL.
	 *
	 * @ignore
	 */
	public $host = "https://api.weixin.qq.com/cgi-bin/";
	/**
	 * Set timeout default.
	 *
	 * @ignore
	 */
	public $timeout = 30;
	/**
	 * Set connect timeout.
	 *
	 * @ignore
	 */
	public $connecttimeout = 30;
	/**
	 * Verify SSL Cert.
	 *
	 * @ignore
	 */
	public $ssl_verifypeer = FALSE;
	/**
	 * Respons format.
	 *
	 * @ignore
	 */
	public $format = 'json';
	/**
	 * Decode returned json data.
	 *
	 * @ignore
	 */
	public $decode_json = TRUE;
	/**
	 * Contains the last HTTP headers returned.
	 *
	 * @ignore
	 */
	public $http_info;
	/**
	 * Set the useragnet.
	 *
	 * @ignore
	 */
	public $useragent = 'WeiXin OAuth1 v0.1';

	/**
	 * print the debug info
	 *
	 * @ignore
	 */
	public $debug = FALSE;

	/**
	 * boundary of multipart
	 * @ignore
	 */
	public static $boundary = '';

	/**
	 * Set API URLS
	 */
	/**
	 * @ignore
	 */
	function accessTokenURL()  { return 'token'; }

	/**
	 * construct WeiboOAuth object
	 */
	function __construct($AppId, $AppSecret, $access_token = NULL) {
		$this->AppId = $AppId;
		$this->AppSecret = $AppSecret;
		$this->access_token = $access_token;
		$this->expires_in=0;
	}

	
	/**
	 * access_token接口
	 *
	 * 对应API：{@link http://open.weibo.com/wiki/OAuth2/access_token OAuth2/access_token}
	 *
	 * @param string $type 请求的类型,可以为:code, password, token
	 * @param array $keys 其他参数：
	 *  - 当$type为code时： array('code'=>..., 'redirect_uri'=>...)
	 *  - 当$type为password时： array('username'=>..., 'password'=>...)
	 *  - 当$type为token时： array('refresh_token'=>...)
	 * @return array
	 */
	function getAccessToken() {
		
		//?grant_type=client_credential
		$params = array();
		$params['appid'] = $this->AppId;
		$params['secret'] = $this->AppSecret;
		$params['grant_type'] = 'client_credential';
		$response = $this->oAuthRequest($this->accessTokenURL(), 'GET', $params);
		$token = json_decode($response, true);
		if ( is_array($token) && !isset($token['error']) ) {
			$this->access_token = $token['access_token'];
			$this->expires_in=$token['expires_in'];
		} else {
			throw new OAuthException("get access token failed." . $token['error']);
		}
		return $token;
	}
	/**
	 * [getAccessToken description]
	 * @return [type] [description]
	 */
	function getAccessTokenByCode($code) {
		
		//?grant_type=client_credential
		$params = array();
		$params['appid'] = $this->AppId;
		$params['secret'] = $this->AppSecret;
		$params['code'] = $code;
		$params['grant_type'] = 'authorization_code';
		$response = $this->oAuthRequest("https://api.weixin.qq.com/sns/oauth2/access_token", 'GET', $params);
		$token = json_decode($response, true);
		if ( is_array($token) && !isset($token['error']) ) {
			$this->access_token = $token['access_token'];
			$this->expires_in=$token['expires_in'];
		} else {
			throw new OAuthException("get access token failed." . $token['error']);
		}
		return $token;
	}
	
	/**
	 * [getAccessToken description]
	 * @return [type] [description]
	 */
	function refreshToken($refresh_token) {
		
		//?grant_type=client_credential
		$params = array();
		$params['appid'] = $this->AppId;
		$params['grant_type'] = 'refresh_token';
		$params['refresh_token'] = $refresh_token;
		$response = $this->oAuthRequest("https://api.weixin.qq.com/sns/oauth2/refresh_token", 'GET', $params);
		$token = json_decode($response, true);
		if ( is_array($token) && !isset($token['error']) ) {
			$this->access_token = $token['access_token'];
			$this->expires_in=$token['expires_in'];
		} else {
			throw new OAuthException("get access token failed." . $token['error']);
		}
		return $token;
	}
	
	/**
	 * GET wrappwer for oAuthRequest.
	 *
	 * @return mixed
	 */
	function get($url, $parameters = array()) {
		$response = $this->oAuthRequest($url, 'GET', $parameters);
		if ($this->format === 'json' && $this->decode_json) {
			return json_decode($response, true);
		}
		return $response;
	}

	/**
	 * POST wreapper for oAuthRequest.
	 *
	 * @return mixed
	 */
	function post($url, $parameters = array(), $postbody = false) {
		$response = $this->oAuthRequest($url, 'POST', $parameters, $postbody );
		if ($this->format === 'json' && $this->decode_json) {
			return json_decode($response, true);
		}
		return $response;
	}

	

	/**
	 * Format and sign an OAuth / API request
	 *
	 * @return string
	 * @ignore
	 */
	function oAuthRequest($url, $method, $parameters, $postbody = false) {

		if (strrpos($url, 'http://') !== 0 && strrpos($url, 'https://') !== 0) {
			$url = "{$this->host}{$url}";
		}

	switch ($method) {
		case 'GET':
			$url = $url . '?' . http_build_query($parameters);
			return $this->http($url, 'GET');
		default:
			$headers = array();
			if (!$postbody && (is_array($parameters) || is_object($parameters)) ) {
				$body = http_build_query($parameters);
			} else {
				$body = $postbody;
			}
			return $this->http($url, $method, $body, $headers);
	}
}

	/**
	 * Make an HTTP request
	 *
	 * @return string API results
	 * @ignore
	 */
	function http($url, $method, $postfields = NULL, $headers = array()) {
		$this->http_info = array();
		$ci = curl_init();
		/* Curl settings */
		curl_setopt($ci, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
		curl_setopt($ci, CURLOPT_USERAGENT, $this->useragent);
		curl_setopt($ci, CURLOPT_CONNECTTIMEOUT, $this->connecttimeout);
		curl_setopt($ci, CURLOPT_TIMEOUT, $this->timeout);
		curl_setopt($ci, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ci, CURLOPT_ENCODING, "");
		curl_setopt($ci, CURLOPT_SSL_VERIFYPEER, $this->ssl_verifypeer);
		curl_setopt($ci, CURLOPT_HEADERFUNCTION, array($this, 'getHeader'));
		curl_setopt($ci, CURLOPT_HEADER, FALSE);

		switch ($method) {
			case 'POST':
				curl_setopt($ci, CURLOPT_POST, TRUE);
				if (!empty($postfields)) {
					curl_setopt($ci, CURLOPT_POSTFIELDS, $postfields);
					$this->postdata = $postfields;
				}
				break;
			case 'DELETE':
				curl_setopt($ci, CURLOPT_CUSTOMREQUEST, 'DELETE');
				if (!empty($postfields)) {
					$url = "{$url}?{$postfields}";
				}
		}

		
		if ( isset($this->access_token) && $this->access_token ){
			if(strpos($url,"?")>0){
				$url.="&access_token=".$this->access_token;
			}else{
				$url.="?access_token=".$this->access_token;
			}
	  }
		$headers[] = "API-RemoteIP: " . $_SERVER['REMOTE_ADDR'];
		curl_setopt($ci, CURLOPT_URL, $url );
		curl_setopt($ci, CURLOPT_HTTPHEADER, $headers );
		curl_setopt($ci, CURLINFO_HEADER_OUT, TRUE );

		$response = curl_exec($ci);
		$this->http_code = curl_getinfo($ci, CURLINFO_HTTP_CODE);
		$this->http_info = array_merge($this->http_info, curl_getinfo($ci));
		$this->url = $url;

		if ($this->debug) {
			echo "=====post data======\r\n";
			var_dump($postfields);

			echo '=====info====='."\r\n";
			print_r( curl_getinfo($ci) );

			echo '=====$response====='."\r\n";
			print_r( $response );
		}
		curl_close ($ci);
		return $response;
	}

	/**
	 * Get the header info to store.
	 *
	 * @return int
	 * @ignore
	 */
	function getHeader($ch, $header) {
		$i = strpos($header, ':');
		if (!empty($i)) {
			$key = str_replace('-', '_', strtolower(substr($header, 0, $i)));
			$value = trim(substr($header, $i + 2));
			$this->http_header[$key] = $value;
		}
		return strlen($header);
	}
}


/**
 * 新浪微博操作类V2
 *
 * 使用前需要先手工调用saetv2.ex.class.php <br />
 *
 * @package sae
 * @author Easy Chen, Elmer Zhang,Lazypeople
 * @version 1.0
 */
class WeiXinClientV1
{
	/**
	 * 构造函数
	 * 
	 * @access public
	 * @param mixed $akey 微博开放平台应用APP KEY
	 * @param mixed $skey 微博开放平台应用APP SECRET
	 * @param mixed $access_token OAuth认证返回的token
	 * @param mixed $refresh_token OAuth认证返回的token secret
	 * @return void
	 */
	function __construct( $akey, $skey, $access_token= NULL)
	{
		$this->oauth = new WeiXinAuthV1( $akey, $skey, $access_token);
	}
	function createMenu($menus){
		$postbody=$this->my_json_encode($menus);
		//$menus=json_encode($menus) ;
		//$postbody = preg_replace("#\\\u([0-9a-f]+)#ie", "iconv('UCS-2LE', 'UTF-8', pack('H4', '\\1'))", $menus);//windows
		//$postbody=json_encode($menus,JSON_UNESCAPED_UNICODE);
		//echo $postbody;
		return $this->oauth->post('menu/create',array(), $postbody);
	}
	function getMenu()
	{
		$params = array();
		return $this->oauth->get('menu/get', $params);
	}
	//自定义推送消息
	function message($msg){
		$params = array();
		$postbody=$this->my_json_encode($msg);
		return $this->oauth->post('message/template/send',array(), $postbody);
	}
	function custom_service($msg){
		$postbody=$this->my_json_encode($msg);
		return $this->oauth->post('message/custom/send',array(), $postbody);		
	}
	function getUser($openid){
		//$params = array("openid"=>"oSET1jtgL4dJlufwLrJvZ6j89o2Y");
		//$params = array("openid"=>"oSET1jg84BDm8v205NpKyKWLcEM8");
		$params = array("openid"=>$openid);
		return $this->oauth->get('user/info', $params);
	}
	function findUser($openid){
		$params = array("openid"=>$openid,"lang"=>'zh_CN');
		return $this->oauth->get('https://api.weixin.qq.com/sns/userinfo', $params);
	}
	function my_json_encode($arr){
	        //convmap since 0x80 char codes so it takes all multibyte codes (above ASCII 127). So such characters are being "hidden" from normal json_encoding
	        array_walk_recursive($arr, function (&$item, $key) { if (is_string($item)) $item = mb_encode_numericentity($item, array (0x80, 0xffff, 0, 0xffff), 'UTF-8'); });
	        return mb_decode_numericentity(json_encode($arr), array (0x80, 0xffff, 0, 0xffff), 'UTF-8');
	
	}
}
