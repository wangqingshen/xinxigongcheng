<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
    <meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Cache-Control" content="no-cache">
	<meta http-equiv="Expires" content="0">
    <title></title>
<body>
</body>
</html>
<script type="text/javascript" src="/application/Html/Dist/js/jquery.js" ></script>
<script type="text/javascript">
$(function(){
	// localStorage.clear();
	var type = "<?php echo ($enter_type); ?>";
	var id;
	var url = "<?php echo U('Index/wechat_auth');?>";
	if(type == 'fans') {
		id = localStorage.wechat_member_id == undefined ? '' : localStorage.wechat_member_id;
		url += '/enter/'+ type + '/wechat_member_id/'+id
	}else{
		id = localStorage.account_id == undefined ? '' : localStorage.account_id;
		url += '/enter/'+ type + '/account_id/' + id;
	}
	window.location.href = url;
})
</script>