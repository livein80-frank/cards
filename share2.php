
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  
</body>
<script>
 var imgUrl = "http://"+window.location.host+"/cards/images/logo.png";
var lineLink = "http://"+window.location.host;
var descContent = '美的冰箱，求红包';
var shareTitle = '美的冰箱，求红包';
var appid = '';
 
function shareFriend() {
  WeixinJSBridge.invoke('sendAppMessage',{
    "appid": appid,
    "img_url": imgUrl,
    "img_width": "200",
    "img_height": "200",
    "link": lineLink,
    "desc": descContent,
    "title": shareTitle
  }, function(res) {
    //_report('send_msg', res.err_msg);
  })
}
function shareTimeline() {
  WeixinJSBridge.invoke('shareTimeline',{
    "img_url": imgUrl,
    "img_width": "200",
    "img_height": "200",
    "link": lineLink,
    "desc": descContent,
    "title": shareTitle
  }, function(res) {
       //_report('timeline', res.err_msg);
       //alert(res.err_msg) ;
       alert(2) ;
  });
}
$(function(){
  // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
  document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
      shareFriend();
    });
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv){
      shareTimeline();
      alert(1) ;
      $("body").remove() ;
    });
  }, false);  
}) ;
</script>
</html>
