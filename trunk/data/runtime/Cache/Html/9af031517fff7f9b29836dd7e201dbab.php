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
<link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/aui/aui-pull-refresh.css" />
<body>
<div class="aui-refresh-content answer-content">
    <ul class="aui-list aui-media-list" style="background: 0;">

    </ul>
</div>
<div class="copy-content aui-hide">
<li class="aui-list-item aui-list-item-arrow">
    <div class="aui-media-list-item-inner">
        <div class="aui-list-item-inner">
            <div class="aui-list-item-text">
                <div class="aui-list-item-title">
                    <span class="answer-title"></span>
                    <span class="answer-news"></span>
                </div>
                <div class="aui-list-item-right">
                    <span class="answer-date"></span>
                    <span class="answer-status"></span>
                </div>
            </div>
        </div>
    </div>
</li>
</div>
<script type="text/javascript" src="/application/Html/Dist/js/jquery.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-toast.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-dialog.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-popup.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/sha1.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/js-base64.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/md5.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/mobileSelect.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/common.js" ></script>
    <footer class="aui-bar aui-bar-tab" id="footer">
        <div class="aui-bar-tab-item" tapmode>
            <div class="aui-bar-tab-label">我要咨询</div>
        </div>
    </footer>
</body>

<script type="text/javascript">
    var url = "<?php echo U('answer/add');?>"
    AnswerFooter.init();
</script>
</html>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-scroll.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-pull-refresh.js"></script>
<script type="text/javascript">
var detailUrl = "<?php echo U('answer/detail');?>";
Answer.init();
</script>
</body>