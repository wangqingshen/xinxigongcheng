<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
    <meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Cache-Control" content="no-cache">
	<meta http-equiv="Expires" content="0">
    <title>任务分发</title>
    <link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/aui/aui.css" />
    <link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/mobileSelect.css" />
    <link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/style.css" />
<link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/supersized.css" />
<body>
<div class="aui-content login-content aui-hide">
	<ul class="aui-list aui-form-list aui-margin-l-15 aui-margin-r-15">
		<li class="aui-list-item">
            <div class="aui-list-item-inner">
                <div class="aui-list-item-label">
                   <i class="aui-iconfont aui-icon-my"></i>
                </div>
                <div class="aui-list-item-input">
                    <input type="text" placeholder="请输入用户名" class="username">
                </div>
            </div>
        </li>
        <li class="aui-list-item">
            <div class="aui-list-item-inner">
                <div class="aui-list-item-label">
                   <i class="aui-iconfont aui-icon-lock"></i>
                </div>
                <div class="aui-list-item-input">
                    <input type="password" placeholder="请输入登录密码" class="userpwd">
                </div>
            </div>
        </li>
	</ul>
	<div class="aui-btn aui-btn-primary aui-btn-block login-btn">
		登录
	</div>
    <input type="hidden" class="localStorage-url" value="/application/Html/Dist/images/" />
</div>
</body>
<script type="text/javascript" src="/application/Html/Dist/js/jquery.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-toast.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-dialog.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-popup.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/sha1.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/js-base64.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/md5.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/mobileSelect.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/common.js" ></script>
<script type="text/javascript">
var loginBgUrl = $('.localStorage-url').val();
</script>
<script type="text/javascript" src="/application/Html/Dist/js/supersized.3.2.7.min.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/supersized-init.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/md5.js" ></script>
<script type="text/javascript">
var id = localStorage.user_id;
var taskUrl = "<?php echo U('tasklist/index');?>";
if(id == undefined) {
    $('.login-content').removeClass('aui-hide');
    Login.init();
} else {
    window.location.href = taskUrl;
}

</script>
</html>