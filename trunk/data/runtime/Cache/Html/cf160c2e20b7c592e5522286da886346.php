<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
    <meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Cache-Control" content="no-cache">
	<meta http-equiv="Expires" content="0">
    <title><?php echo ($head_title); ?></title>
    <link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/aui/aui.css" />
    <link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/mobileSelect.css" />
    <link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/style.css" />
<body>
<div class="aui-content answer-detail-content aui-margin-l-15 aui-margin-r-15">
    <ul class="aui-list aui-media-list answer-info">
        <li class="aui-list-item" style="border-top: 0;background: none;">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title answer-detail-title"></div>
                    </div>
                    <div class="aui-list-item-text task_content" style="color: #434343">
                        
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div class="aui-content aui-content-padded" id="message-content">
        <div class="aui-chat-receiver">
            <div class="aui-chat-receiver-avatar"><img src="/application/Html/Dist/images/login_bg_1.jpg"></div>
            <div class="aui-chat-receiver-cont">
                <div class="aui-chat-left-triangle"></div>
                <span class="wx-name">专家微信昵称</span>
                <span class="wx-date">2017-10-20 10:10:50</span>
                <span>你好！</span>
            </div>
        </div>
        <div class="aui-chat-sender">
            <div class="aui-chat-sender-avatar"><img src="/application/Html/Dist/images/login_bg_2.jpg"></div>
            <div class="aui-chat-sender-cont">
                <div class="aui-chat-right-triangle"></div>
                <span class="wx-name">外部用户微信昵称</span>
                <span class="wx-date">2017-10-20 10:10:50</span>
                <span>我也不清楚</span>
            </div>
        </div>
    </div>
</div>
<div class="copy-item-right aui-hide">
    <div class="aui-chat-sender">
        <div class="aui-chat-sender-avatar"><img src="/application/Html/Dist/images/login_bg_2.jpg"></div>
        <div class="aui-chat-sender-cont">
            <div class="aui-chat-right-triangle"></div>
            <span class="wx-name">外部用户微信昵称</span>
            <span class="wx-date">2017-10-20 10:10:50</span>
            <span class="wx-content">我也不清楚</span>
        </div>
    </div>
</div>
<div class="copy-item-left aui-hide">
    <div class="aui-chat-receiver">
        <div class="aui-chat-receiver-avatar"><img src="/application/Html/Dist/images/login_bg_1.jpg"></div>
        <div class="aui-chat-receiver-cont">
            <div class="aui-chat-left-triangle"></div>
            <span class="wx-name">专家微信昵称</span>
            <span class="wx-date">2017-10-20 10:10:50</span>
            <span class="wx-content">你好！</span>
        </div>
    </div>
</div>
<div id="dialog-inner-content" class="aui-hide">
    <div class="popup-content answer-over-content" style="padding: 60px;">
        <p>确定要结束当前咨询的问题吗？</p>
    </div>
</div>
<div class="answer-footer">
    <textarea></textarea>
    <button class="add-btn">咨询</button>
    <button class="over-btn">结束</button>
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
// var taskUrl = "<?php echo U('employee/index');?>";
AnswerDetail.init();
</script>
</html>